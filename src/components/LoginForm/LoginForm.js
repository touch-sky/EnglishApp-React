import React from 'react'
import './LoginForm.css'

export default class extends React.Component {
    render() {
        return (
            <div className="container input-box">
                <form className='login form-horizontal' onSubmit={this.handleData.bind(this)}>
                    <div className="form-group">
                        <label className='col-xs-2 control-label text-center'>用户</label>
                        <div className='col-xs-10'>
                            <input className="form-control" type='text' ref='user' placeholder='用户' />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className='col-xs-2 control-label text-center'>密码</label>
                        <div className='col-xs-10'>
                            <input className="form-control" type='password' ref='password' placeholder='密码' />
                        </div>
                    </div>
                    <button className="btn btn-info col-xs-12" type='submit'>登陆</button>
                </form>
            </div>
        )
    }
    componentDidUpdate() {
        if (this.props.user) {
            this.props.goMain()
        }
    }

    handleData(e) {
        e.preventDefault()
        let data = {
            user: this.refs['user'].value,
            password: this.refs['password'].value
        }
        this.props.loginClick(data)
    }
}