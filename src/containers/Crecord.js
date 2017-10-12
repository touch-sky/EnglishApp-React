import React from 'react'
import { connect } from 'react-redux'

class Records extends React.Component {
    render() {
        return (
            <h1 style={{marginTop: '80px'}}>这是签到页</h1>
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

const Record = connect(
    mapStateToProps,
    mapDispatchToProps
)(Records)

export default Record