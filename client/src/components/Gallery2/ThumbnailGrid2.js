import React from 'react';
import Thumbnail2 from './Thumbnail2';



const ThumbnailGrid2 = ({ thumbnails, handleClick }) => {
    return (
        <div style={styles}>
            {
                thumbnails.map((thumbnail, i) => {
                    return (
                        <Thumbnail2
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

export default ThumbnailGrid2;