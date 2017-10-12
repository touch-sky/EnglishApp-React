const login = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_LOGIN_POST':
            return Object.assign({}, state, action.data)
        default:
            return state
    }
}

export default login