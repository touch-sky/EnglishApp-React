import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MainHead from '../components/MainHead/MainHead.js'
import MainBottom from '../components/MainBottom/MainBottom.js'
import Ranking from './Cranking.js'
import Book from './Cbook.js'
import Record from './Crecord.js'
import Person from './Cperson.js'

class Mains extends React.Component {
    render() {
        return (
            <div>
                <MainHead />
                <Router>
                    <div>
                        <Route path='/main/ranking' component={Ranking} />
                        <Route path='/main/book/:text?' component={Book} />
                        <Route path='/main/Record' component={Record} />
                        <Route path='/main/person' component={Person} />
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