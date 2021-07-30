import React from "react"
import emitter from './evnet'
export default class EventOne extends React.Component {
    constructor(props){
        super(props)
        this.state={
            message:"eventone"
        }
    }
    componentDidMount() {
        // 组件装载完成以后声明一个自定义事件
        this.eventEmitter = emitter.addListener('changeMessage', (message) => {
            this.setState({
                message,
            });
        });
    }
    // 组件销毁时  移除事件
    componentWillUnmount() {
        emitter.removeListener(this.eventEmitter);
    }
    render(){
        return(
            <div>
                {this.state.message}
            </div>
        )
    }
}