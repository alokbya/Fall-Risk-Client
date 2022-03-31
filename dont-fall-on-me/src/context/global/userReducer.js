export default (state, action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            return { ...state, user: action.payload.user }
        case 'LOGIN_USER':
            return { ...state, user: action.payload.user, loggedIn: true }
        case 'LOGOUT_USER':
            return { loggedIn: false }
        default:
            return state;
    }
}