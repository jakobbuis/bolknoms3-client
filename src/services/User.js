export default {

    picture() {
        const oauth = window.store.state.oauth;
        return `https://people.debolk.nl/persons/${oauth.user.username}/photo/256/256?access_token=${oauth.token.access_token}`;
    },

    getDetails() {
        return axios.get('/users/me', {
            headers: {
                Authorization: `Token ${window.store.state.oauth.token.access_token}`,
            },
        });
    },

    updateDetails(details) {
        return axios.patch('/users/me', details, {
            headers: {
                Authorization: `Token ${window.store.state.oauth.token.access_token}`,
            },
        });
    },
};
