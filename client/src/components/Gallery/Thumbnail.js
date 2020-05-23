import React from 'react';
import ActiveWindow from './ActiveWindow';
import ThumbnailGrid from './ThumbnailGrid';



export default class ThumbnailGallery extends Component {
    render() {
        return (
            <div style={{ flex: 1 }} >
                <ActiveWindow />
                <ThumbnailGrid />
            </div>

            <div style={{ flex: 1 }} >
                Right
            </div>
        )
    }
}

const styles = {
    background: "#ddd"
    height: "500px",
    width: "1024px",
    margin: "40px auto",
    display: "flex"
}

export default ActiveWindow;