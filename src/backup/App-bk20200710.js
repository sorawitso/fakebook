import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import './layout.css';
/*
function Hello(props) {
  return <div> {props.children} {props.firstNmae} </div>
}

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

const Myobj = {
  one: function one() {
    return <div>แสดงค่า one</div>
  },
  two: function two(props) {
    return <div>แสดงค่า two {props.color}</div>
  },
  three: () => <div>แสดงค่า three</div>
}

function MyComponent2(props) {
  return (
    <ul>
      <li>name : {props.name}  </li>
      <li>arg : {props.arg}  </li>
      <li>isMan : {props.isMan} </li>
      <li>location : {props.location}</li>
      <li>education : {props.education}</li>
    </ul>
  )
}

function Employee(props) {
  return <div>
    <div>firstname : {props.firstName}</div>
    <div>lastName : {props.lastName}</div>
    <div>age : {props.age}</div>
  </div>;
}

function Leader(props) {
  var firstName = props.xx;
  var lastName = props.aa;
  var age = props.bb;
  return <Employee firstName={firstName} lastName={lastName} age={age}></Employee>
}

function Head(props) {
  var p = { ...props }
  return <Employee firstName={p.cc} lastName={p.dd} age={p.ee}></Employee>
}


function Person(props) {
  return <div>
    <div>disPlayname : {props.disPlayname}</div>
    <div>workPlace : {props.workPlace}</div>
    <div>imgUrl : {props.imgUrl}</div>
    <div>img src = {props.imgUrl} </div>
  </div>;
}

function App() {
  return (
    <div>
      
      <Hello firstName="Sorawit"> Hello World-A</Hello>
      {React.createElement("Hello", { firstName: "Sorawit" }, "Hello World")}
      <BlueDatePicker>ddd</BlueDatePicker>

      <Myobj.one>111</Myobj.one>
      <Myobj.two>2222</Myobj.two>
      <Myobj.three>3333</Myobj.three>

      <MyComponent2 name={'sorawit'} arg="40" isMan={true} location={'Thai'} education={""}> </MyComponent2>

      <Employee firstName="SSSS " lastName="aaaa" age={25}></Employee>
      <Leader xx="sss " aa="Caaa" bb={30}></Leader>
      <Head cc="ddd" dd="sssCxxx" ee={40} ></Head>

      <Person disPlayname="Sorawit Sokumpa" workPlace="BAAC" imgUrl={'sorawit.jpg'} >
      </Person>

    </div>

  )
}
*/
// const picture = 'ptest.jpg'
// const profile = [
//   {name: "A", pic:picture},
//   {name: "B", pic:picture},
//   {name: "C", pic:picture}
// ]

// const tags = [
//   {data: 1},
//   {data: 2},
//   {data: 3}
// ]
function Home(props) {
  return props.showHome ? <span>Home</span> : null;
}

function Contact(props) {
  return props.showContact ? <span>Contact</span> : null;
}

function About(props) {
  return props.showAbout ? <span>About</span> : null;
}

// function Menu(props){
//   console.log(props);
// return <div><Home showHome={props.showHome}></Home>{props.showContact && <Contact></Contact>}{props.showAbout && <About></About>}</div>
// }

class Menu extends React.Component {
  render() {
    console.log(this.props);
    return <div><Home showHome={this.props.showHome}/>{this.props.showContact && <Contact></Contact>}{this.props.showAbout && <About></About>}</div>
  }
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class CommentDate extends React.Component{
  render(){
    return <div className="Comment-date">
    {this.props.date}
  </div>
  }
}

class CommentText extends React.Component{
  render(){
    return <div className="Comment-text">
    {this.props.text}
     </div>
  }
}

class UserInfoname extends React.Component{
  render(){
    return <div className="UserInfo-name">
    {this.props.author.name}
    </div>
  }
}



function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        </div>
      <UserInfoname author={props.author} />
      <CommentText text={props.text} />
      <CommentDate date={props.date} />
    </div>
  );
}

function App() {
  return (
    <div>
     {/* {profile.map(obj => <div>
      <p>{obj.name}</p>
        <img src={obj.pic}/>
      </div> )} */}
     {/*     
     <ul>
     {tags.map(obj => <li>{obj.data}</li>)}
    </ul> */}

<div><Menu showHome={true} showAbout={false} showContact={true} /></div>
<Welcome name = "daa" />
<Comment author={{ avatarUrl: "", name: "Pae" }} text="Test" date="19/6/2563" />
    
<p id="content" style={{fontSize: "24px"}} >content </p>
<p id="content" style={{background: "powderblue"}} >content </p>
<p id="content" style={{textalign: "center"}} >content </p>



    </div>
  )
}

export default App;
