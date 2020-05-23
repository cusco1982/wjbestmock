import React, { Component } from 'react';

import ActiveWindow from './active-thumbnail-window';



export default class ThumbnailGallery extends Component {
    render() {
        return (
            <div style={thumbnailStyles}>

                <div style={{ flex: 1 }}>
                    <ActiveWindow/>
                </div>

                <div style={{ flex: 1 }}>
                    right
                </div>

            </div>
        )
    }
}

const thumbnailStyles = {
    background: '#ddd',
    height: '500px',
    width: '1024px',
    margin: '40px auto',
    display: 'flex'
}