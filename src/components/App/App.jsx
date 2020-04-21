import React, {Component} from 'react';
import {pictures} from '../../pictures';
import {Gallery} from '../Gallery';

export class App extends Component {
    render(){
        return(
            <div>
                <main>
                    <div className="container">
                        <Gallery pictures={pictures}/>
                    </div>
                </main>
                
            </div>
        )
    }
}



