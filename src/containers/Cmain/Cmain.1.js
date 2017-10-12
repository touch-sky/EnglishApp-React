import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MainHead from '../../components/MainHead/MainHead.js'
import MainBottom from '../../components/MainBottom/MainBottom.js'
import Ranking from './subPage/Cranking.js'
import Book from './subPage/Cbook.js'



// import localStore from '../../util/localStore.js'

class Mains extends React.Component {
    render() {
        return (
            <div>
                <MainHead />
                <Router>
                    <div>
                        <Route path='/main/ranking' component={Ranking} />
                        <Route path='/main/book' component={Book} />
                    </div>
                </Router>
                <MainBottom />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(Mains)

export default Main