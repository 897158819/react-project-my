import React from "react"
import { Provider } from "./content";
import ContentPage from "./contentPage";
import { Button } from "antd";
export default class ContentProvider extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            thmem:""
        }
    }
    redClick =() =>{
        this.setState({thmem:"red"})
    }
    yellowClick = () =>{
        this.setState({thmem:"yellow"})

    }
    render(){
        const { thmem } = this.state
        return(
            <Provider value={{ themeColor: thmem }}>
                <Button type="default" size="middle" onClick={this.redClick}>红色</Button>
                <Button type="default" onClick={this.yellowClick}>黄色</Button>
                <ContentPage></ContentPage>
            </Provider>
        )
    }
}

