import React from 'react';
import ActiveWindow from './ActiveWindow';
import ThumbnailGrid from './ThumbnailGrid';



export default class ThumbnailGallery extends Component {
    render() {
        return (
            <div style={{ flex: 1 }} >
                <ActiveWindow />
            </div>
        )
    }
}

const styles = {
    height: "65%",
    width: "100%",
    background: "#333"
}

export default ActiveWindow;