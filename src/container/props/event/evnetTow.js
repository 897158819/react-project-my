import React from "react"
import emitter from './evnet'

export default class EventTow extends React.Component {
    //触发事件
    handleClick = (message) => {
        emitter.emit('changeMessage', message);
    };
    render(){
        return(
            <div>
                <button onClick={this.handleClick.bind(this, 'eventTow')}>点击我改变eventOne组件中显示信息</button>
            </div>
        )
    }
}