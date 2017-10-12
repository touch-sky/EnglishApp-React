import React from 'react'
import { connect } from 'react-redux'

class Persons extends React.Component {
    render() {
        return (
            <h1 style={{marginTop: '80px'}}>这是个人页</h1>
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

const Person = connect(
    mapStateToProps,
    mapDispatchToProps
)(Persons)

export default Person