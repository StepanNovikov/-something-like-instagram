import React, {Component} from 'react';
import './ImageBox.scss';
import {Likes} from '../Likes';
import {Comments} from '../Comments';
import PropTypes from 'prop-types';


export class ImageBox extends Component {
    render(){
        const { image, likes, comments } = this.props;
        return(
            <div className="gallery-item" tabIndex="0">
                <img src={image}
                    className="gallery-image" alt=""/>
                <div className="gallery-item-info">
                    <ul>
                    {
                        <Likes likes={likes}/>
                    }   
                    {
                        <Comments comments={comments}/>
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

ImageBox.propTypes = {
    image: PropTypes.string,
}