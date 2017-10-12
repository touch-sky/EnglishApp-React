const rangking = (state = {
    RankingType: 0
}, action) => {
    switch (action.type) {
        case 'BEGIN_RANKING_POST':
            return Object.assign({}, state, action.rangkingData)
        case 'RECEIVE_RANKING_POST':
            return Object.assign({}, state, action.rangkingData)
        default:
            return state
    }
}

export default rangking