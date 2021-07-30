import React from 'react'

class routerSearchOne extends React.Component{
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
                <div>读取参数 this.props.location.search</div>
                <div>这里是search路由传参 值: {this.props.location.search}</div>
            </div>
        )
    }    
}
export default routerSearchOne