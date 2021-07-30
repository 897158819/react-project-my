import React from 'react'

import { Button } from 'antd'
export default class RefChild extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:"这里是refChild组件的name值"
        }
    }
    click=()=>{
        this.setState({name:"子组件改变后的name值"})
    }
    render(){
        return (
            <div>
                <div>{this.state.name}</div>
                <Button type='primary' onClick={this.click}>点击改变子组件（此按钮在子组件）</Button>
            </div>
        )
    }
}