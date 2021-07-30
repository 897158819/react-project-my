import React from "react"
import { Button} from "antd"


export default class ChildComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={}

    }
    click = ()=>{
       // 通过触发方法子传父
        this.props.childTofather("这是 props 改变父元素的值")
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <div><b>通过props传入的值：</b>{this.props.name}</div>
                <Button type="ghost" onClick={this.click}>
                    点击改变父元素
                </Button>    
            </div>
            
        )
    }
}