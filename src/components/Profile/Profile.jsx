import React, {Component} from 'react';
import { ProfileStats } from '../ProfileStats';
import { ProfileBio } from '../ProfileBio/ProfileBio';

export class Profile extends Component {
    render(){
        return(
            <div className="profile">
                <div className="profile-image">
                    <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                        alt=""/>
                </div>
                <div className="profile-user-settings">
                    <h1 className="profile-user-name">janedoe_</h1>
                    <button className="btn profile-edit-btn">Edit Profile</button>
                    <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog"
                        aria-hidden="true"></i></button>
                </div>
                {
                    <ProfileStats/>
                }
                {
                    <ProfileBio/>
                }
            </div>
        )
    }
}