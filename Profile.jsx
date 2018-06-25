import React from 'react';
import App from './App.jsx';
import axios from 'axios';

class Profile extends React.Component {

  constructor(props) {
        super(props);
		this.state = {
			courseid: 0
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleCourseSubmit=this.handleCourseSubmit.bind(this);
		
  }
  handleChange(e) {
		this.setState({ courseid: e.target.value });
  }
  
  handleCourseSubmit(e) {
		//to prevent default action happen
		const {userID} = this.props.location.userDetails;
         e.preventDefault();
	    axios.post("http://localhost:8086/usercourses", {userid: userID, courseid:parseInt(this.state.courseid)})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
	  alert('You selected '+this.state.courseid);
    }

   render() {
	   
   const {userID} = this.props.location.userDetails;
   const {userName} = this.props.location.userDetails;
   const {userCourse} =this.props.location.userDetails;
   const {allCourses} = this.props.location.courseDetails;

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
	    <hr/>

		Add Courses:&nbsp;&nbsp;&nbsp;
		<select value={this.state.courseid} onChange={this.handleChange} >
		{allCourses.map((allcourse,i) => <option key={'allcourse_' + i} value={allcourse.id}>{allcourse.courseName}</option>)}
		</select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button type="submit" onClick={this.handleCourseSubmit}>AddCourse</button>

	  </div>
	  );
   }
}

export default Profile;
