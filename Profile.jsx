import React from 'react';
import App from './App.jsx';

class Profile extends React.Component {
  constructor(props) {
        super(props);
		this.state = {
			selectValue:'Android'
		};
		this.handleChange=this.handleChange.bind(this);
		
  }
  handleChange(e) {
		this.setState({ selectValue: e.target.value });
  }

   render() {
   var message='You selected '+this.state.selectValue;
   const {userID} = this.props.location.userDetails;
   const {userName} = this.props.location.userDetails;
	  return (
	  
	  <div>
	  
		<h3 align="center">Particular User Information </h3>
		UserID:&nbsp;&nbsp;&nbsp;{userID}
		<br /><br />

		UserName:&nbsp;&nbsp;&nbsp;{userName}
		<br /><br />
		
		<h4>Enrolled Courses :</h4>
		<p>{message}</p>
	    <hr/>

		Add Courses:&nbsp;&nbsp;&nbsp;<select value={this.state.selectValue} onChange={this.handleChange} >
		<option value="Android">Android</option>
		<option value="Python">Python</option>
		<option value="React">React</option>
		<option value="DigitalMarketing">Digital Marketing</option>
		<option value="WebSecurity">Web Security</option>
		</select>
	  
	  </div>
	  );
   }
}

export default Profile;
