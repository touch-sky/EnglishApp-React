import React from 'react'
import './Ranking.css'

export default class extends React.Component {
    componentDidMount() {
        const { type, forData } = this.props;
        forData(type)
    }
    render() {
        const { ranking } = this.props;
        return (
            ranking.flag ?
                <div className="ranking-wrap box box-tb">
                    {ranking.data.map((item, index) => {
                        return <div key={index} className="box box-lr box-pack-start box-align-center ranking-box">
                            <div className="ranking-num-box">
                                {item['排名'] <= 3 ?
                                    <img className="ranking-num" src={'/images/' + item['排名'] + '.png'} alt="#" /> :
                                    <span className="ranking-num-bottom ranking-num">{item['排名']}</span>
                                }
                            </div>
                            <div className="box box-lr ranking-avater-outbox">
                                <div className="ranking-avater-box">
                                    <img className="ranking-avater" src={"data:image/png;base64," + item['头像']} alt="#" />
                                    {item['会员'] == 1 ?
                                        <span className="rangking-vip">vip</span> :
                                        ''}
                                </div>
                                <img className="ranking-sex self-align-end" src={item['性别'] == '女' ? '/images/female.png' : '/images/male.png'} alt="#" />
                            </div>
                            <div className="box box-lr ranking-up-box">
                                <img className="rangking-up " src={item['升降'] >= 0 ? '/images/up.png' : '/images/down.png'} alt="#" />
                                <span className="self-align-end">{item['升降']}</span>
                            </div>
                            <div className="box box-tb box-align-center rangking-name-box">
                                <span className="ranking-score text-info">{item['积分']}</span>
                                <span className="ranking-name">{item['用户名']}</span>
                            </div>
                        </div>
                    })}
                </div> :
                <div style={{marginTop: '200px',textAlign: 'center'}}>加载中..</div>
        )
    }
}