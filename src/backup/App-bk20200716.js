import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentNameTb: props.commentNameTb,
      commentTextTb: props.commentTextTb,
      isUpdate : false
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if(prevProps.commentNameTb != this.props.commentNameTb){
      this.setState({
        commentNameTb: this.props.commentNameTb,
      commentTextTb: this.props.commentTextTb,
      isUpdate : true
      });
    }
  }

 
  updateComment = () => {
    this.props.doUpdateCommentItem (this.state.commentNameTb, this.state.commentTextTb);
  }

  addComment = () => {
    this.props.addCommentItem (this.state.commentNameTb, this.state.commentTextTb);
  }

  render() {
    return <div>
      <div>
        Comment Name
      </div>
      <div>
        <input value={this.state.commentNameTb} onChange={(e) => {
          this.setState({
            commentNameTb: e.target.value
          });
        }}></input>
      </div>
      <div>Comment Text </div>
      <div>
          <textarea value={this.state.commentTextTb} onChange={(e) => {
          this.setState({
            commentTextTb: e.target.value
          })
        }}></textarea>
      </div>
      <div>
      <button onClick={this.state.isUpdate ? this.updateComment : this.addComment} > {this.state.isUpdate ? "Update" : "Post"}</button>
      </div>
    </div>
  }
}

class CommentTable extends React.Component {
  constructor(props) {
    super(props); // commentItems
  }
  render() {
    return <div>
      {this.props.commentItems.map((commentItem) =>
        <div>
          <span style={{ marginRight: 20 }}>{commentItem.commentName}</span>
          <span>{commentItem.commentText}</span>
          <button onClick={() => {
            if (commentItem.isEditing) {
            } else {
              this.props.startEditCommentItem(commentItem.commentName);
            }
          }}>{commentItem.isEditing ? "Process" : "Edit"} </button>
          <button onClick={() => {
            this.props.deleteCommentItem(commentItem.commentName)
          }}>Delete</button>
        </div>)}
    </div>
  }
}

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentItems: [
        {
          commentName: "สมฤทัย",
          commentText: "สวัสดีชาวโลก สบายดีหรือเปล่า",
          isEditing: false,
        },
        {
          commentName: "Panya",
          commentText: "ดูแล้วไม่ค่อยสร้างสรรรเท่าไหร่เลยอ่ะ",
          isEditing: false
        }
      ],
      commentNameTb: "",
      commentTextTb: "",
    };
  }

  deleteCommentItem = (commentName) => {
    var newCommentItems = this.state.commentItems.filter((commentItem) => commentItem.commentName !== commentName);
    this.setState({
      commentItems: newCommentItems
    });
  }

  addCommentItem = (commentName, commentText) => {
    this.state.commentItems.push({
      commentName: commentName,
      commentText: commentText
    });
    this.setState({
      commentItems: this.state.commentItems
      
    });
  }

  doUpdateCommentItem = (commentName, commentText) => {
    var newCommentItems = this.state.commentItems.map((commentItem) => {
      if (commentItem.commentName === commentName) {
        commentItem.isEditing = false;
        commentItem.commentText = commentText;
        return commentItem;
      } else {
        return commentItem;
      }
    });
    this.setState({
      commentItems : newCommentItems
    });
  }
  startEditCommentItem = (commentName) => {
    var updatedCommentItem = null;
    var newCommentItems = this.state.commentItems.map((commentItem) => {
      if (commentItem.commentName === commentName) {
        commentItem.isEditing = true;
        updatedCommentItem = commentItem;
        return commentItem;
      } else {
        return commentItem;
      }
    });
    this.setState({
      commentItems: newCommentItems,
      commentNameTb: updatedCommentItem.commentName,
      commentTextTb: updatedCommentItem.commentText
    });
  }
 

  render() {
    return (
      <div style={{ marginLeft: 50 }}>
        <CommentInput doUpdateCommentItem={this.doUpdateCommentItem} commentNameTb={this.state.commentNameTb} commentTextTb={this.state.commentTextTb} 
        addCommentItem={this.addCommentItem}></CommentInput>
        <CommentTable startEditCommentItem={this.startEditCommentItem} deleteCommentItem={this.deleteCommentItem} commentItems={this.state.commentItems}></CommentTable>

      </div>
    )
  }
}


function Home() { return <h2>Home</h2>;}
function About() { return <h2>About</h2>;}
function Users() { return <h2>Users</h2>;}
function App() {
  return (
    <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About </Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>
    <div>
      <Switch>
        <Route path="/about"><About /></Route>
        <Route path="/users"><Users /></Route>
        <Route path="/"><Comment /></Route>
      </Switch>
    </div>
  </Router>
  
);
}


export default App;
