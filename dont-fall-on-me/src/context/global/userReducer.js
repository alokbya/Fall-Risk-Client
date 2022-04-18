export default (state, action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            return { ...state, user: action.payload.user }
        case 'LOGIN_USER':
            return { ...state, user: action.payload.user, loggedIn: true }
        case 'LOGOUT_USER':
            return { loggedIn: false }
        case 'UPDATE_UNIT':
            return { ...state, unit: action.payload.unit }
        case 'UPDATE_ROOM':
            return { ...state, room: action.payload.room }
        case 'UPDATE_AUDIT_TYPE':
            return { ...state, auditType: action.payload.auditType }
        default:
            return state;
    }
}