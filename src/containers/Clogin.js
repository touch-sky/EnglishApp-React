import React from 'react'
import { connect } from 'react-redux'
import { fetchLogin } from '../actions/index'
import LoginBg from '../components/LoginBg/LoginBg.js'
import LoginForm from '../components/LoginForm/LoginForm.js'

class Logins extends React.Component {
    render() {
        return (
            <div>
                <LoginBg/>
                <LoginForm user={this.props.user} loginClick={this.props.loginClick.bind(this)} goMain={this.props.goMain.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login.user
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    return {
        loginClick: (data) => {
            dispatch(fetchLogin('Login', data, ownProps))
        },
        goMain: () => {
            ownProps.history.replace('./main/ranking')
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Logins)

export default Login