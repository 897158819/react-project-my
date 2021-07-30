import React from "react"

import MenuComponent from "../components/menu"
import HomeContentComponent from "../components/homeContent"
export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div className="App-header" style={{height:"100%"}}>
                <div className="menu">
                    <MenuComponent></MenuComponent>
                </div>
                <div className="content">
                    <HomeContentComponent></HomeContentComponent>
                </div>
            </div>
        );
    }
}
