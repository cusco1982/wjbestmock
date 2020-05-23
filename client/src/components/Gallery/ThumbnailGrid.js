import React from 'react';
import ActiveWindow from './ActiveWindow';
import ThumbnailGrid from './ThumbnailGrid';



class ThumbnailGallery extends Component {
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
    height: "35%",
    width: "100%",
    background: "yellow",
    display: "flex"
    flexWrap: "wrap",
}

export default ThumbnailGrid;