import React from 'react'

export default class routerQueryOne extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <div>读取参数 this.props.location.query.name</div>
                <div>这里是query路由传参 值: </div>
            </div>
        )
    }
    
}