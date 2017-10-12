import { get } from '../fetch/get.js'
import { post } from '../fetch/post.js'
import localStore from '../util/localStore.js'


// 登陆异步请求
export const receiveLoginPost = (data) => {
    return {
        type: 'RECEIVE_LOGIN_POST',
        data
    }
}

export function fetchLogin(postName, data) {
    return dispatch => {
        return post(postName, data)
            .then(result => result.json())
            .then(json => {
                if (json.State == true) {
                    localStore.setItem('user', data.user)
                    dispatch(receiveLoginPost(data))
                } else {
                    alert('登录失败')
                }
            })
    }
}

// ranking 异步请求

export const beginRankingPost = (RankingType) => {
    let rangkingData = {}
    rangkingData.data = {}
    rangkingData.flag = false
    rangkingData.RankingType = RankingType
    return {
        type: 'BEGIN_RANKING_POST',
        rangkingData
    }
}

export const receiveRankingPost = (data) => {
    let rangkingData = {}
    rangkingData.data = data
    rangkingData.flag = true
    return {
        type: 'RECEIVE_RANKING_POST',
        rangkingData
    }
}

export function fetchRanking(postName, passData) {
    return dispatch => {
        dispatch(beginRankingPost(passData.type))
        return post(postName, passData)
            .then(response => response.json())
            .then(json => {
                dispatch(receiveRankingPost(JSON.parse(json)))
            })
    }
}

