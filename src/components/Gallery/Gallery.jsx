import React, {Component} from 'react';
import './Gallery.scss';
import {ImageBox} from '../ImageBox';

export class Gallery extends Component {
    render(){
        const {pictures} = this.props;
        return(
            <div className="gallery">
                {pictures.map((picture,idx) => <ImageBox key={idx} {...picture}/>)}
            </div>
        )
    }
}

