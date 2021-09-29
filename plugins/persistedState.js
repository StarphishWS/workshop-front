import createPersistedState from 'vuex-persistedstate';

export default ({store}) => {

    createPersistedState({
        path: ['auth']
    })(store)
}