import React from 'react';


const Thumbnail = ({imgUrl, handleClick}) => {
    return (
        <div style={styles} >

            <img src={imgUrl} style={{ height:'100%', width:'100%' }}
            onClick={handleClick} />

        </div>
    )
}

const styles = {
    height: "50%",
    width: "25%",
    position: 'relative'
}

export default Thumbnail;