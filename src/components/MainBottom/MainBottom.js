import React from 'react'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import './MainBottom.css'

export default class extends React.Component {
    render() {
        return (
            <div>
                <div className="bottom-box box box-lr">
                    <NavLink activeClassName="router-link-active" to="/main/ranking" className="box box-tb box-pack-around box-align-center">
                        <span className="glyphicon glyphicon-road"></span>
                        <span>排行榜</span>
                    </NavLink>
                    <NavLink activeClassName="router-link-active" to="/main/book/hello word!" className="box box-tb box-pack-around box-align-center">
                        <span className="glyphicon glyphicon-book"></span>
                        <span>词书</span>
                    </NavLink>
                    <NavLink activeClassName="router-link-active" to="/main/record" className="box box-tb box-pack-around box-align-center">
                        <span className="glyphicon glyphicon-bookmark"></span>
                        <span>签到</span>
                    </NavLink>
                    <NavLink activeClassName="router-link-active" to="/main/person" className="box box-tb box-pack-around box-align-center">
                        <span className="glyphicon glyphicon-user"></span>
                        <span>个人中心</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}