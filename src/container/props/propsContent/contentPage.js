import React from 'react'
import ContentConsumer from './contentConsumer'
export default class ContentPage extends React.Component {
    render(){
        return(
            <div>
                <ContentConsumer></ContentConsumer>
            </div>
        )
    }
}