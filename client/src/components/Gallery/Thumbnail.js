import React from 'react';


const Thumbnail = ({imgUrl}) => {
    return (
        <div style={styles} >

            <img src={imgUrl} style={{ height:'100%', width:'100%' }} />

        </div>
    )
}

const styles = {
    height: "50%",
    width: "25%",
    position: 'relative'
}

export default Thumbnail;