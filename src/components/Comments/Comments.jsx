import React, {Component} from 'react';
import './Comments.scss';
import PropTypes from 'prop-types';


export class Comments extends Component {
    
    render(){
        const {comments}  = this.props;
        return(
            <React.Fragment>
                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment"
                    aria-hidden="true"></i>{comments}
                </li>
            </React.Fragment>
        )
    }
}

Comments.propTypes = {
    comments: PropTypes.number
}