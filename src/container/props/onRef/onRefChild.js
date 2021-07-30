import React from 'react'
import { Button } from "antd"
export default class OnRefChild extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:"这是子组件的name值"
        }
    }
    componentDidMount(){
        // 当组件挂载完毕发送给父组件
        this.props.OnRef(this)
        // console.log(this)
    }
    click=()=>{
        this.setState({name:'这是子组件click 方法改变name 值'})
    }
    render(){
        return(
            <div>
                <div>{this.state.name}</div>
                <Button type='primary' onClick={this.click}>这里是子组件</Button>
            </div>
        )
    }
}