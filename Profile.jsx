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
   const {userCourse} =this.props.location.userDetails;

	  return (
	  
	  <div>
	  
		<h3 align="center"><u>Particular User Information</u></h3>
		UserID:&nbsp;&nbsp;&nbsp;{userID}
		<br /><br />

		UserName:&nbsp;&nbsp;&nbsp;{userName}
		<br />
		
		<h4><u>Enrolled Courses :</u></h4>
		<table>
		    <tbody>
			    <tr> 
				<th><u>CourseId</u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
				<th><u>CourseName</u> &nbsp;&nbsp;&nbsp;</th>
				<th><u>Description</u> &nbsp;&nbsp;&nbsp;</th>
				<th><u>Level</u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
				<th><u>Length</u></th>
				</tr>
		     {userCourse.map((usercourse,i) => <tr key={'usercourse_' + i}><td>{usercourse.id} &nbsp;&nbsp;&nbsp;&nbsp;</td>
			   <td>{usercourse.courseName} &nbsp;&nbsp;&nbsp;</td>
			   <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {usercourse.description} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
			   <td>{usercourse.level} &nbsp;&nbsp;&nbsp;&nbsp;</td>
			   <td>{usercourse.length}</td></tr>)}
		
		    </tbody>
				  
	    </table>
		<br /><br />
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
