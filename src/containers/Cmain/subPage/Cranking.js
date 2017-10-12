import React from 'react'
import { connect } from 'react-redux'
import { fetchRanking } from '../../../actions/index.js'
import RankingTop from '../../../components/RankingTop/RankingTop.js'
import RankingItem from '../../../components/Ranking/Ranking.js'
import localStore from '../../../util/localStore.js'

class Rankings extends React.Component {
    render() {
        return (
            <div>
                <RankingTop type={this.props.type} forData={this.props.forData.bind(this)}/>
                <RankingItem type={this.props.type} ranking={this.props.ranking} forData={this.props.forData.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login.user,
        type: state.ranking.RankingType,
        ranking: state.ranking
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        forData: (type) => {
            let passData = {
                user: localStore.getItem('user'),
                type: type
            }
            dispatch(fetchRanking('GetRankList', passData))
        }
    }
}



const Ranking = connect(
    mapStateToProps,
    mapDispatchToProps
)(Rankings)

export default Ranking