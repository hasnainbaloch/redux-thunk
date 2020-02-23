import React from 'react';

import './gitUserDetails.css';

export default function GitUserDetails(props) {
  return (
    //   onClick={props.removePerson}
    <div className="card" >
        <h2>GIT USER INFO</h2>
        <h2>{props.name}</h2>
        <img src={props.photo}/>
        <hr/>
        <b>Publich Repo: {props.repo}</b>
        <br/>
        <b>Following: {props.following}</b>
        <br/>
        <b>Followers: {props.follower}</b>
    </div>
  );
}
