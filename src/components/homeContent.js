import React from "react"

export default class HomeContentComponent extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        // console.log(this.props)
        return(
            <div className="homeContent">
                <div style={{ fontSize:"48px" }}>Welcome ！</div>
            </div>
        )
    }
}