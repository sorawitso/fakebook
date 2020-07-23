import React from 'react';
import 'antd/dist/antd.css';

//import { Avatar } from 'antd';
import { Row, Col, Avatar, Layout } from 'antd';
import { MessageFilled } from '@ant-design/icons';


class Post extends React.Component {
// //    constructor(props) {
// //        super(props);
// //         this.state = {
//            postItems:  [
//                 {
//                     pic: "/post.jpg",
//                     text: "รักนะเด็กโง่",
//                     isEditing: false
//                 },
//                 {
//                     pic: "/four.jpg",
//                     text: "สวัสดีดชาวโลก",
//                     isEditing: false
//                 }

//             ];

//         };

//    }

   

    render() {
        return (<div>
          {posttext.map(obj => <div>
            <Row>{obj.text}</Row> 
            <Row><img src={obj.pic} alt="ภาพ" /></Row>
            </div>
            )} 
             
        </div>
    )}
}


let posttext = [
    { pic: "/four.jpg", text: "ใครรู้เรื่องมดบ้าง?"},
];


function Createpost() {
    return (
        <div> 
            <Layout>
              
            <Row>
                  <Col span = {1}> </Col>
                  <Col span = {2}> <Avatar size ={50} src="/sorawit.png" /> </Col> 
                  <Col span = {3}><h4>Sorawit Sokumpa</h4> </Col>
             </Row>  
            </Layout>  
                  
             <Row justify="center" align="middle"><Post /> </Row>  
             <Row justify="center" align="middle"> <MessageFilled /> ความคิดเห็น</Row>
             {<hr></hr>}       
       </div>
    );
}


export default Createpost;