import React from 'react';
import { Input, Form, Button,List,Comment, Row, Col, Avatar } from 'antd';
import moment from 'moment';
import Header from './Header';

//*******/
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    // header={`${comments.length} ${comments.length > 1 ? 'รายการ' : 'รายการ'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
    
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={1} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        เขียนความคิดเห็น
      </Button>
    </Form.Item>
  </>
);

class Appcomment extends React.Component {
  state = {
    comments: [{
      author: 'Wattana Thaweesin',
      avatar: '/post.jpg',
      content: <p>รับผมเป็นเพื่อนด้วยนะครับ...</p>,
      datetime: moment().startOf('hour').fromNow()
     }
     ],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Sorawit',
            avatar: '/sorawit.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
           },
          ...this.state.comments,
        ],
      });
    }, 100);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="/sorawit.png"
              alt="sorawit"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
  }
}

//******/

class Friendhead extends React.Component {
    render () {
            return (<> 
            <Row justify="cent" align="middle"style={{ height: "35vh"}}>
                    <Col span = {2}> </Col>
                    <Col span = {4}> <Avatar size ={150} src="/post.jpg" /> </Col> 
                    <Col span = {4}><h1>Wattana Thaweesin</h1> </Col>
                    <Col span = {10}><Button shape="round">
                        เป็นเพื่อนแล้ว </Button></Col>         
            </Row>
              {<hr></hr>}
            </>
            )}
  }
  
  function Friendprofile() {
    return (
        <div>
          <Header />
          <Friendhead />
          <Appcomment />   
        </div>

    );
}
export default Friendprofile;