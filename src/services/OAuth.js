import Config from '../Config';

/**
 * Generate and store a state token for use in authorization
 * @return {integer}
 */
function createStateToken() {
    const token = Math.random().toString(36).slice(2);
    window.store.commit('oauthState', token);
    return token;
}

export default {

    /**
     * Redirect the browser to start the authorization flow
     */
    toAuthorizationFlow() {
        const token = createStateToken();
        window.location.href = `https://auth.debolk.nl/authenticate?response_type=code&client_id=${Config.oauth.client_id}&redirect_uri=${Config.oauth.redirect_url}&state=${token}`;
    },

    // Refresh the expired token
    refreshToken() {

    },

    /**
     * Process the given authorization token, creating a logged-in user
     * @param  {string} code
     * @param  {string} state
     */
    processAuthorization(code, state) {
        if (state !== window.store.getters.oauthState) {
            // FIXME show alert when this happens
            console.error('state mismatch!', { returnedState: state, storedState: window.store.getters.oauthState });
            return;
        }

        axios.post('https://auth.debolk.nl/token', {
            grant_type: 'authorization_code',
            client_id: Config.oauth.client_id,
            client_secret: Config.oauth.client_secret,
            redirect_uri: Config.oauth.redirect_url,
            code,
        }).then(({ data }) => {
            window.history.pushState(null, null, '/');
            const token = data;

            axios.get(`https://auth.debolk.nl/resource?access_token=${data.access_token}`).then((response) => {
                token.expires = response.data.expires;
                window.store.commit('login', {
                    token,
                    username: response.data.user_id,
                });

                // Clean up the state
                window.store.commit('oauthState', null);
            });
        });
    },
};
