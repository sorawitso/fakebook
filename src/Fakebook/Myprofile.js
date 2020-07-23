import React from 'react';
import { Button, Avatar } from 'antd';
import { Comment, Form, List, Input } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import Header from './Header';
import Profilehead from './Profilehead';



//*******/
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'รายการ' : 'รายการ'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
    
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        บันทึก
      </Button>
    </Form.Item>
  </>
);

class Appcomment extends React.Component {
  state = {
    comments: [{
      author: 'Sorawit',
      avatar: '/sorawit.png',
      content: <p>สร้างข้อมูลตั้งแต่เดือน กรกฎาคม 2563</p>,
      datetime: moment().fromNow()
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



function Myprofile() {
    return (
        <div>
          <Header />  
            <Profilehead />   
            <span>บันทึกช่วยจำ</span>
            <Appcomment />

        </div>

    );
}
export default Myprofile;
