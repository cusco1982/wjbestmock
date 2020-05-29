import React from 'react';

const ActiveWindow = ({activeThumbnail}) => {
    return (
        <div style={styles}>
            <img src={activeThumbnail.imgUrl} alt="WJBest" className=""/>
        </div>
    )
}

const styles = {
    height: "65%",
    width: "100%",
    background: "#333"
}

export default ActiveWindow;