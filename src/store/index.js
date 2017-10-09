export default {
    state: {
        oauth: {
            token: null,
            state: null,
            user: null,
        },
    },

    mutations: {
        // Record the ?state=123456 for use in the OAuth authorization flow
        oauthState(state, token) {
            state.oauth.state = token;
        },

        // update the oauth token
        accessToken(state, token) {
            state.oauth.token = token;
        },

        // Logout from the app by wiping all credentials
        logout(state) {
            state.oauth.token = null;
            state.oauth.state = null;
            state.oauth.user = null;
        },

        login(state, { token, username }) {
            state.oauth.token = token;
            state.oauth.user = { username, level: null };
        },
    },

    getters: {

        // OAuth state parameter
        oauthState(state) {
            return state.oauth.state;
        },

        // whether we are logged in
        loggedIn(state) {
            return state.oauth.user !== null;
        },

        // Whether the current user is a member
        isMember(state) {
            return state.oauth.user !== null && ['board', 'member'].indexOf(state.oauth.user.level) !== -1;
        },

        // Whether the current user is a board member
        isBoard(state) {
            return state.oauth.user !== null && state.oauth.user.level === 'board';
        },
    },
};
