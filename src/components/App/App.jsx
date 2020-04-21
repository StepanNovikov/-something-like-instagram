import React, {Component} from 'react';
import {pictures} from '../../pictures';
import {Gallery} from '../Gallery';
import { Profile } from '../Profile';

export class App extends Component {
    render(){
        return(
            <div>
                <header>
                    <div className="container">
                        <Profile/>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <Gallery pictures={pictures}/>
                    </div>
                </main>
                
            </div>
        )
    }
}



