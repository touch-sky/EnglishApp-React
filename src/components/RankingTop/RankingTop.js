import React from 'react'
import './RankingTop.css'

export default class extends React.Component {
    componentDidMount() {

    }
    render() {
        const { type, forData } = this.props
        return (
            <div className="raning-top-box box box-lr text-center">
                <div className={type == 0 ? "active flex" : "flex"} onClick={() => { forData(0) }}>日榜</div>
                <div className={type == 1 ? "active flex" : "flex"} onClick={() => { forData(1) }}>月榜</div>
                <div className={type == 2 ? "active flex" : "flex"} onClick={() => { forData(2) }}>总榜</div>
            </div>
        )
    }
}