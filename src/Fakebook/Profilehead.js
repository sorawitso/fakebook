import React from 'react';
import { Row, Col, Avatar } from 'antd';

class Profile extends React.Component {

    render () {
            return (<> 
            <Row justify="cent" align="middle" style={{ height: "35vh"}}>
                    <Col span = {2}> </Col>
                    <Col span = {4}> <Avatar size ={150} src="/sorawit.png" /> </Col> 
                    <Col span = {4}><h1>Sorawit</h1>
                  <Row>
                     <Col><h1>Sokumpa</h1> </Col>
                  </Row>
                     </Col>
                 </Row>
              {<hr></hr>}
            </>
            )}
  }
  
  function Profilehead() {
    return (
        <div>
          <Profile />   
        </div>

    );
}
export default Profilehead;