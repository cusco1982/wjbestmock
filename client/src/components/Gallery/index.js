import React, {Component} from 'react';
import ActiveWindow from './ActiveWindow';
import ThumbnailGrid from './ThumbnailGrid';
import axios from 'axios';



export default class Gallery extends Component {

    state={
        thumbnails: []
    }


    // ------------insert link to thumbnails------------
    // componentDidMount(){
    //     axios.get(' urltothumbnail ')
    //     .then(res=>{
    //         console.log(res);
    //     })

    }

    render() {
        console.log(this.state.thumbnails);
        
        return (
            <div style={galleryStyles}>

                <div style={{ flex: 1 }} >
                    <ActiveWindow />
                    <ThumbnailGrid />
                </div>

                

                <div style={{ flex: 1, padding:'40px' }} >
                    Right
                </div>

            </div>

        )
    }
}

const galleryStyles = {
    background: "#ddd",
    height: "500px",
    width: "1024px",
    margin: "40px auto",
    display: "flex"
}