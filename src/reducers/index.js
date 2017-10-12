import {combineReducers} from 'redux'
import login from './login'
import ranking from './ranking'

const reduceApp=combineReducers({
    login,
    ranking
})

export default reduceApp