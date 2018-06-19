import React from 'react';
import App from './App.jsx';

class Profile extends React.Component {
  constructor(props) {
        super(props);
		
  }

   render() {
   const {userID} = this.props.location.userDetails;
   const {userName} = this.props.location.userDetails;
	  return (
	  
	  <div>
	  <h3 align="center">Particular User Information </h3>
      UserID: &nbsp;&nbsp;&nbsp;{userID}
	  <br /><br />
	  UserName:&nbsp;&nbsp;&nbsp;{userName}
	  
	  </div>
	  );
   }
}

export default Profile;
