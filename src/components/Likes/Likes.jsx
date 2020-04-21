import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Likes.scss';


export class Likes extends Component {
    
    render(){
        const {likes}  = this.props;
        return(
            <React.Fragment>
                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart"
                    aria-hidden="true"></i>{likes}
                </li>
            </React.Fragment>
        )
    }
}

Likes.propTypes = {
    likes: PropTypes.number
}

