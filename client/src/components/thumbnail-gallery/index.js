import React, { Component } from 'react';

export default class ThumbnailGallery extends Component {
    render() {
        return (
            <div style={thumbnailStyles}>

                <div style={{ flex: 1 }}>
                    left
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