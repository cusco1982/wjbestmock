import React from 'react';
import Thumbnail from './Thumbnail';



const ThumbnailGrid = ({ thumbnails, handleClick }) => {
    return (
        <div style={styles}>
            {
                thumbnails.map((thumbnail, i) => {
                    return (
                        <Thumbnail
                            key={i}
                            imgUrl={thumbnail.imgUrl}
                            handleClick={handleClick}
                            index={i}
                        />
                    )
                })
            }
        </div>
    )
}

const styles = {
    height: "50%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
}

export default ThumbnailGrid;