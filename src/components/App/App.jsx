import React, {Component} from 'react';
import {ImageBox} from '../ImageBox';
import {pictures} from '../../pictures';

export class App extends Component {
    render(){
        return(
            <div>
                <main>
                    <div className="container">
                        <div className="gallery">
                            {pictures.map((picture,idx) => <ImageBox key={idx} {...picture}/>)}
                        </div>
                    </div>
                </main>
                
            </div>
        )
    }
}