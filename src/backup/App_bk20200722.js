import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import { Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
//import { blue } from '@ant-design/colors';
//import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Login from './Fakebook/Login';
import Signup from './Fakebook/Signup';
import Myprofile from './Fakebook/Myprofile';
import Feedpage from './Fakebook/Feedpage';
//import Createpost from './Fakebook/Createpost';
import Changepwd from './Fakebook/Changepwd';
import Friendprofile from './Fakebook/Friendprofile';
//import Friendlist from './Fakebook/Friendlist';

// function Home() {
//   return (
//     <div>
//       <Button type="primary">Button</Button>;
//       <ul> {blue.map(color => <li style={{ backgroundColor: color, height: 20 }}></li>)}</ul>
//       <Row>
//         <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//           LOGO
//     </Col>
//         <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//           From
//     </Col>
//       </Row>
//       <Row>
//         <Col flex="100px">100px</Col>
//         <Col flex="auto">Fill Rest</Col>
//       </Row>

//     </div>
//   )
// }
// function About() { return <h2>Abount</h2>; }
// function Users() { return <h2>Users</h2>; }

function App() {
  return (
    <Router>
      {/* <Headers></Headers> */}
      <nav>
        <ul>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About </Link></li>
          <li><Link to="/users">Users</Link></li> */}
          <li><Link to="/fakebook/login">Login</Link></li>
          <li><Link to="/fakebook/signup">Signup</Link></li>
          <li><Link to="/fakebook/changepwd">Change Password</Link></li>
          <li><Link to="/fakebook/myprofile">Myprofile</Link></li>
          <li><Link to="/fakebook/feedpage">Feedpage</Link></li>
          <li><Link to="/fakebook/friendprofile">Friend Profile</Link></li>
          {/* <li><Link to="/fakebook/friendlist">Friend List</Link></li> */}
        </ul>
      </nav>
      <div style={{ width: 1000, margin: '10px auto' }}>
        <Switch>
          {/* <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/"><Home /></Route> */}
          <Route path="/fakebook/login"><Login /></Route>
          <Route path="/fakebook/signup"><Signup /></Route>
          <Route path="/fakebook/changepwd"><Changepwd /></Route>
          <Route path="/fakebook/myprofile"><Myprofile /></Route>
          <Route path="/fakebook/feedpage"><Feedpage /></Route>
          <Route path="/fakebook/friendprofile"><Friendprofile /></Route>
          {/* <Route path="/fakebook/friendlist"><Friendlist /></Route> */}
          


        </Switch>
      </div>
    </Router>

);
}


export default App;

