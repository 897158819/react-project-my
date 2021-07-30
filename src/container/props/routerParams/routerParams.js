import React from 'react'

export default class routerParamsOne extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div>读取参数 this.props.match.params.name</div>
                <div>这里是params路由传参 值:  {this.props.match.params.name}</div>
            </div>
        )
    }
    
}