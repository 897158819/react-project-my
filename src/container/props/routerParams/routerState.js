import React from 'react'

class routerStateOne extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dataList:[]
        }
    }
    componentWillMount () {

    }

    render(){
        console.log(this.props)
        return(
            <div>
                <div>读取参数 this.props.location.state.name</div>
                <div>这里是state路由传参 值: {this.props.location.state.name}</div>
            </div>
        )
    }    
}
export default routerStateOne