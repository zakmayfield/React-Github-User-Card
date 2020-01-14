import React from 'react';
import pin from './icons/pin.png'
import anon from './icons/anon.png';

const UserCard = props => {
  return (
    <>

    {/* Contains all info about user -- personal and friendslist */}
      <div className="userProfile">

      {/* User personal card with name, img, bio, and location */}
        <div className="singleUser">
          <div className="subSingleUser">
            <p>
              <a
                className="userName" 
                href={ props.person.html_url } 
                target="_blank" 
                rel="noopener noreferrer"
              >
                { props.person.name }
              </a>
            </p>
            <img className="userImg" src={props.person.avatar_url} alt="" />
            <div className="bioAndLocation">
              <p className="userBio">{ props.person.bio }</p>
              <p className="userLocation"> 
                <img className="locationPin" src={pin} alt="" />
                { props.person.location }
              </p>
            </div>
          </div>
        </div>

      {/* follower list */}
        <div className="followerList">
          <div className="subFollowerList">
            {
              props.followers.map(item => {
                return (
                  <p key={item.login}>
                    <a 
                      href={item.html_url} 
                      className="followerListItem" 
                    >
                      <img className="anon" src={anon} alt=""/>
                      {item.login}
                    </a>
                  </p>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard