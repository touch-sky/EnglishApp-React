import React from 'react'
import { connect } from 'react-redux'

class Books extends React.Component {
    render() {
        return (
            <h1 style={{marginTop: '80px'}}>这是词书页面</h1>
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

const Book = connect(
    mapStateToProps,
    mapDispatchToProps
)(Books)

export default Book