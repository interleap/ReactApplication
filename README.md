# React application
This is an example application, where users can be assigned courses they want to learn.

### Requirements
For development, you will only need Node.js installed on your environement. 
Node.js is an environment for developing server-side applications.
React development happens on top of node.js.<br /><br />

#### How to install Node.js :<br />
###### Windows: 
1. Download the windows installer from following link:
https://nodejs.org/en/download/ <br />
The .msi file will be downloaded in your download directory. 
2. Run the installer and follow the command prompt. Accept the default installation setting.
3. Restart your computer because you won't able to run without this step.
4. Test: To make sure you have node and npm type the simple command<br />
node -v: it will show your installed node version.<br />
npm -v: it will show your installed npm version.

### NPM
Getting react application running first thing to install is a good package manager. We'll be using a popular package manager named npm. npm is a great way to download, install, and keep track of JavaScript software.
When you install Node.js, npm will install automatically.<br />
An alternative package manager is yarn, which is faster than npm.

### How to start the project?
Create a root folder to the project directries and give name as your project name(in my case it's reactApp).Browse to the created directory and open it.<br /> Type the following command to the terminal :<br />
npm init: By running this command from the command prompt create package.json file. package.json contains metadata about your new project. package.json keeps track of the modules that you install. Other developers can look at your package.json file, easily install the same modules that you've installed, and run their own local versions of your project.

### INSTALL REACT
To install the react module, type this command in the terminal: <br />
npm install --save react <br /><br />
install can be abbreviated as i, and --save can be abbreviated as -S, if you like to abbreviate.<br />
This will install react, and save the dependency in package.json.
It will put the react package within a folder called node_modules. node_modules needs to be in your .gitignore file, because we don't want to commit the entire dependency. We just commit package.json, and by looking at the dependency list, package.json will pull the dependencies on anyone else's computer.
 
### INSTALL REACTDOM
To install the react DOM module, type this command in the terminal:<br />
npm install --save react-dom <br />

#### React vs ReactDOM
React is a javaScript library for building user interfaces and it deals with react specific things. It has different elements like React.createElement, React.component etc.<br />
ReactDOM package provides Document Object Model(DOM) specific methods. We will use one of it's method render() which will render the components in DOM.

### INSTALL BABEL
Babel is a JavaScript compiler that includes the ability to compile JSX into regular JavaScript. To installl type the following code to the terminal: <br /><br />
npm install --save-dev babel-core babel-loader babel-preset-react <br /><br />
You will notice that we are saving it as a dev dependency instead of dependency by using --save-dev. This is different from other installation because you will only be using Babel in development mode.

### JSX
JSX is a syntactical sugar on top of Javascript. It was a file type invented by the React team. It was written to used with react. React can also be written in plain JS. We use JSX because it is more powerful. JSX is not a valid javaScript web browser can't read it because of this we installed Babel that translates this JSX to regular JavaScript.

### INSTALL WEBPACK
npm install webpack --save <br />
npm install webpack-dev-server --save <br /><br />
Webpack's job is to run your React code through various transformations. The dev server uses webpack's watch mode. Webpack needs to know exactly what transformations it should use. You can set that information by making a special webpack configuration file. This file must be located in the outermost layer of your root directory, and must be named webpack.config.js. 

### CONFIGURE WEBPACK
Webpack is going to take your JavaScript, run it through some transformations, and create a new, transformed JavaScript file. This file will be the ones that the browser actually reads. Everything that is in webpack it will inside to the module.exports{} object. 
In order to do this, Webpack needs to know three things: <br />

1. What JavaScript file it should transform.<br />
   The first thing that webpack needs to know is an entry point. The entry point is the file that Webpack will transform.
   To specify an entry point, give module.exports a property named entry. entry's value can be a filepath, or an array of   filepaths if    you would like to have more than one entry point.
2. Which transformations it should use on that file.<br />
   Webpack can now successfully grab your outermost component class file, and therefore grab your entire React app. The test property      will say which type of file I have to grab there is an regular expression for select the js file. The exclude property will tell        which file should not include when I compile because it is not necessary to deal with node modules file.
   you can tell webpack what to do with the code that it's grabbed by adding a second property to module.exports. This property should      have a name of module and a value of an object literal containing a loaders array. Each "loader" that you add to the loaders array      will represent a transformation that your code will go through before reaching the browser.
3. Where the new, transformed file should go.<br />
   Now you have told webpack which files to grab, and how to transform those files. Webpack will grab your React app and run it through    babel-loader, translating all of your JSX into JavaScript. The output object should have two properties: filename and path. filename    will be the name of the new, transformed JavaScript file. path will be the filepath to where that transformed JavaScript file ends      up. This transformed file reads the html(we have defined the "src:index.js" in script folder) and show to the browser. 

### Running the Server:
command: npm run start <br /><br />
It will show the configured port we need to open in the browser. In my case, it is http://localhost:8080/.

### React Components:

React is made out of components. A component is small, reusable chunk of code that is responsible for render some HTML. For creating my own components we use a base class React.Component from the react library.<br />
React components implements a render() method that takes input data and returns what to display. Input data that is passed into the component can be accessed by render() via this.props. Render() method should be only one outermost element. <br />
One component can render  another component will do so we will have to import and export the components. Only import will not sufficient to use the other component you have to also export from other components.<br />

### Props vs State
Props: It holds the information about components. This is used to send the information from one component to another component.<br />
States: This also holds the information about components but it belongs to single components. You can set the state to the component's attributes by calling the setState() methods. <br /><br />
After calling both props and state render() method call. The setState() method can not be in a render() method because after setState() it will automatically call the render function otherwise it will fall in an infinite loop. <br />
The big difference between state and props is props is immutable but stat is mutable means it will change the contents dynamically.

### How to render the JSX Elements?
ReactDOM has a method render() discussed earlier, it will take two arguments first arguments should be JSX expression that will appear ont he screen and second argument tell where to show on the screen thats why we use document.getElementByID() method. The method take an id from index.html file. The first argument should not literally JSX elements it could also be a variable, component instance so long as that variable evaluates to a JSX expression.

### React component LifeCycle:

1. ##### Mounting Phase
The first phase of react life cycle is the mounting phase. It is called when an instance of a component is being created and inserted into the DOM. This phase has following methods and called in the following order.
componentWillMount(): It is executed before  rendring on both server and client side.
Constructor(): The constructor of react component is called just before rendering.
render(): The render method is used to render the JSX element. This method is only required method in component class.
component DidMount(): It will invoked immediately after component mounted. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

2. ##### Updating Phase
The second phase updating phase is called when change to the props and state. The phase has following important methods and called in following order when a component is being re-rendered.
render(): It will re-render the elements.
componentDidUpdate(): It is invoked immediately after updating occurs to the component. It is called just after rendering.

3. ##### Unmounting Phase:
This last phase is called when a component is being removed from DOM. This phase has one method:
componentWillUnmount(): It is invoked immediately before a component is unmounted and destroyed. Here we can  do invalidating timers, Cancelling network request, or cleaning up subscription that were created in componentDidMount().

### React  Router:
It is a standard routing library for React that will keep the User Interface sync with the URL. It will match to the given path in URL to the route and render the component accordingly. Like JSX it should also only one outermost element to the Router element.

#### What does happen after "npm run start command" ?

When you issue the command npm run start from the root directory of your nodejs project, node will look for a scripts object in your package.json file. If found, it will look for a script with the key start and run the command specified as its value.<br />

If your package.json does not have any scripts object or if the scripts object does not have a start key, it will run the command node server.js instead. It also adds the node module's bin to its path.<br />
The webpack dev server is started now.

### Project Functionalities:

After started the server the first file running of my reactApp is main.js because it is entry point to my application defined to the webpack config file. "main.js" file has to render Main component because the Main instance is in the render method. The Main component has two route element.<br />
After started the server type the url https://localhost:8080/ to the browser it will take to the App component. App component load the data from spring boot api through  axios. <br />
axios is a lightweight HTTP client based library it provides method to call REST Api like springboot ,angular. Axios has axios.get(url) and axios.post(url) method which is used to get and post the data from and to to api end point.
The other method is used to call api is through AJAX request.
 
#### Install Axios:
npm install axios --save <br />

*  The frontend has a navigation bar which is used to navigate the different tabs on click. For navigation bar we have used the 'react-    tabs' library, you can install it from following commands: <br />
   npm install react-tabs --save <br />
   To beautify them we have used css from react tabs library. <br />

*  App component has functionalities like you can add users, add courses, fetch all users and fetch all courses from tabs AddUser,          AddCourse, AllUsers and AllCourses respectively.<br />

*  In the App component you will see a <Link> tag to the users maping where we are passing users information to Profile component. In      profile component we receive the information through props that we have passed in <Link> tag. 
   The profile component will show the particular user information like id , name , course enrolled and also you can add the course from    select dropdown.
 
 **Thank you :+1: for reading this document. I hope you will get everything about my project.**
