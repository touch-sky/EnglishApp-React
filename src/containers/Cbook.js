import React from 'react'
import { connect } from 'react-redux'

class Books extends React.Component {
    render() {
        return (
            <div style={{ marginTop: '80px' }}>
                <h1>这是词书页面</h1>
                <p>传入参数为=>{this.props.match.params.text}</p>
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

const Book = connect(
    mapStateToProps,
    mapDispatchToProps
)(Books)

export default Book