export default {

    picture() {
        const oauth = window.store.state.oauth;
        return `https://people.debolk.nl/persons/${oauth.user.username}/photo/256/256?access_token=${oauth.token.access_token}`;
    },
};
