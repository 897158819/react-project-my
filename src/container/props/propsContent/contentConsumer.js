import React from 'react'
import { Consumer } from './content'
export default class ContentConsumer extends React.Component{
    render(){
        return(
            <Consumer>
                {
                 theme => 
                 <h1 style={{ color: theme.themeColor }}>title</h1>
                }
            </Consumer>
        )
    }
}