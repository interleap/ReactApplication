import React from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  'react-tabs/style/react-tabs.css';
import Profile from './Profile.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


//App component
class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            title: "Users",
            users: [],
			name:'',
			tabIndex : 0,
			courses: [],
			coursename: '',
			description: '',
			level: 0,
			length: ''
        };
		this.getUser = this.getUser.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.getCourse = this.getCourse.bind(this);
		this.handleChangeCourseName=this.handleChangeCourseName.bind(this);
		this.handleChangeCourseDescription=this.handleChangeCourseDescription.bind(this);
		this.handleChangeLevel=this.handleChangeLevel.bind(this);
		this.handleChangeLength=this.handleChangeLength.bind(this);
		this.handleSubmitCourse=this.handleSubmitCourse.bind(this);
    }
	//To Retrieve all the user from spring boot api through axios
	getUser(){
		
		axios.get("http://localhost:8086/users")
		  .then(res => {
			const users= res.data;
			this.setState({ users });
		  })
	}
	//set the updated(value on the form) name
	handleChange(e) {
		this.setState({ name: e.target.value });
		//alert(e.target.value);
		
 
    }
	//submit the data to spring boot api through axios
    handleSubmit(e) {
		//to prevent default action happen
         e.preventDefault();
	axios.post("http://localhost:8086/users", {userName:this.state.name})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
	//To Retrieve all the course from spring boot api through axios
	getCourse(){
		
		axios.get("http://localhost:8086/courses")
		  .then(res => {
			const courses= res.data;
			this.setState({ courses });
		  })
	}
	//set the updated(value on the form) coursename
	handleChangeCourseName(e) {
		this.setState({ coursename: e.target.value});
		//alert(e.target.value);
    }
	handleChangeCourseDescription(e) {
		this.setState({ description: e.target.value});
		//alert(e.target.value);
    }
	handleChangeLevel(e) {
		this.setState({ level: e.target.value});
		//alert(e.target.value);
    }
	handleChangeLength(e) {
		this.setState({ length: e.target.value});
		//alert(e.target.value);
    }
	//submit the data to spring boot api through axios
    handleSubmitCourse(e) {
		//to prevent default action happen
         e.preventDefault();
	axios.post("http://localhost:8086/courses", {courseName:this.state.coursename,description:this.state.description,level:this.state.level,length:this.state.length})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
	
    render() {
		
	  return (
        <div>
        
			<Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
			
			   <TabList>
				  <Tab>Add User</Tab>
				  <Tab onClick={this.getUser}>All Users</Tab>
				  <Tab>Add Course</Tab>
				  <Tab onClick={this.getCourse}>All Courses</Tab>
			   </TabList>
               
			   <TabPanel>
			   
			      <br /><br />
				<form onSubmit={this.handleSubmit}>
				 <label>
				 UserName:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 <input type="text" name="username" onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 </label>
				<button type="submit">UpdateUser</button>
				</form>
			
			   </TabPanel>
			  
			   <TabPanel>
			      
			      <br />
			 
				<table>
				  <tbody>
					<tr> 
					<th>UserId &nbsp;&nbsp;&nbsp;</th>
					<th>UserName</th>
					</tr>
					{ this.state.users.map((user,i) => <tr key={'user_' + i}><td>{user.id} &nbsp;&nbsp;&nbsp;&nbsp;</td><td><Link to={{ pathname: '/profile', userDetails: { userID: user.id, userName: user.userName} }}>{user.userName}</Link></td></tr>)}
				  </tbody>
				  
				</table>
				
				  
			   </TabPanel>
			   
			   <TabPanel>
				   
				   <br /><br />
				<form onSubmit={this.handleSubmitCourse}>
				 <label>
				 CourseName:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 <input type="text" name="coursename" onChange={this.handleChangeCourseName} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 </label><br /><br />
				 <label>
				 CourseDescription:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 <input type="text" name="descriptionname" onChange={this.handleChangeCourseDescription} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 </label><br /><br />
				 <label>
				 Level:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 <input type="text" name="levelname" onChange={this.handleChangeLevel} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 </label><br /><br />
				 <label>
				 Length:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 <input type="text" name="lengthname" onChange={this.handleChangeLength} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 </label><br /><br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<button type="submit">UpdateCourse</button>
				</form>
					   
			   </TabPanel>
					   
			   <TabPanel>
				
				<br />
			 
				<table>
				  <tbody>
					<tr> 
					<th>CourseId &nbsp;&nbsp;&nbsp;</th>
					<th>CourseName &nbsp;&nbsp;&nbsp;</th>
					<th>CourseDescription &nbsp;&nbsp;&nbsp;</th>
					<th>Level &nbsp;&nbsp;&nbsp;</th>
					<th>Length</th>
					</tr>
					{ this.state.courses.map((course,i) => <tr key={'course_' + i}><td>{course.id} &nbsp;&nbsp;&nbsp;&nbsp;</td><td>{course.courseName} &nbsp;&nbsp;&nbsp;&nbsp;</td><td>{course.description} &nbsp;&nbsp;&nbsp;&nbsp;</td><td>{course.level} &nbsp;&nbsp;&nbsp;&nbsp;</td><td>{course.length}</td></tr>)}
				  </tbody>
				</table>
				
			   </TabPanel>
			   
			</Tabs>
        </div>
      );
   }
}
// exporting the App component to render it from main.js
export default App;