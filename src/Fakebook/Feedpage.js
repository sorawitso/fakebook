import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import Header from './Header';
import Createpost from './Createpost';

//import { Alert } from 'antd';
import { Row, Col, Avatar, Layout} from 'antd';

import TextArea from 'antd/lib/input/TextArea';




class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentPicTb: props.commentPicTb,
            commentNameTb: props.commentNameTb,
            commentTextTb: props.commentTextTb,
            isUpdate: false

        }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (prevProps.commentNameTb !== this.props.commentNameTb) {
            this.setState({
                commentPicTb: this.props.commentPicTb,
                commentNameTb: this.props.commentNameTb,
                commentTextTb: this.props.commentTextTb,
                isUpdate: true
            });

        }

    }

    addComment = () => {
        if (this.state.commentTextTb !== "" && this.state.commentNameTb !== "") {
            this.props.addCommentItem(this.state.commentPicTb, this.state.commentNameTb, this.state.commentTextTb);
            this.setState({ commentTextTb: "" });
        } else {
            alert('ใส่ข้อมูลไม่ครบ');
        }
    };


    updateComment = () => {
        this.props.doUpdateCommentItem(this.state.commentPicTb, this.state.commentNameTb, this.state.commentTextTb);
        this.setState({
            isUpdate: false
        });
    }



    render() {
        return <div justify="center" style={{ justifyContent: "center", alignItems: "center" }}>

            <Row justify="center" align="middle">
                <Col span={2}>
                    {/* <Avatar src="sorawit.png"/> */}
                    <Avatar src={this.state.commentPicTb} />
                </Col>
                <Col span={0}>
                    <text readOnly value={this.state.commentPicTb} onChange={(e) => {
                        this.setState({
                            commentPicTb: e.target.value
                        });
                    }}></text>
                </Col>
                <Col span={0}>
                    <text readOnly value={this.state.commentNameTb} onChange={(e) => {
                        this.setState({
                            commentNameTb: e.target.value
                        });
                    }}></text>
                </Col>
                        <Col span={8}>
                    <TextArea rows={2} value={this.state.commentTextTb} onChange={(e) => {
                        this.setState({
                            commentTextTb: e.target.value
                        })
                    }}></TextArea>
                </Col>
                <Col span={1}> </Col>          
                <Col span={8}>

                    <button onClick={this.state.isUpdate ? this.updateComment : this.addComment} >
                        {this.state.isUpdate ? "บันทึกแก้ไข" : "แสดงความคิดเห็น"}
                    </button>
                </Col>
            </Row>


        </div>
    }
}

class CommentTable extends React.Component {
    // constructor(props) {
    //   super(props); // commentItems
    // }
    render() {
        return <div>

            {this.props.commentItems.map((commentItem) =>

                <Row justify="cent" align="middle" style={{ height: "6vh" }}>
                    <Col span={2}>
                        <Avatar
                            src={commentItem.commentPic}
                            alt={commentItem.commentPic}
                        />
                    </Col>
                    <Col span={2}>
                        {commentItem.commentName}
                    </Col>
                    <Col span={8}>
                        {commentItem.commentText}
                    </Col>
                    <Col span={3}>
                        <button onClick={() => {
                            if (commentItem.isEditing) {
                            } else {
                                this.props.startEditCommentItem(commentItem.commentName);
                            }
                        }}>{commentItem.isEditing ? "ประมวลผล" : "แก้ไขคอมเม้น"} </button>
                    </Col>
                    <Col span={3}>
                        <button onClick={() => {
                            this.props.deleteCommentItem(commentItem.commentName, commentItem.commentText)
                        }}>ลบคอมเม้น</button>
                    </Col>

                </Row>


            )}


        </div>
    }
}

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentItems: [
                {
                    commentPic: "/one.jpg",
                    commentName: "สมฤทัย",
                    commentText: "มดมีลักษณะเหมือนกับแมงกลุ่มอื่นๆ แบ่งลำตัวออกได้เป็น 3 ส่วน",
                    isEditing: false
                },
                {
                    commentPic: "/two.jpg",
                    commentName: "Panya",
                    commentText: "มดเป็นสัตว์สังคมที่อยู่ร่วมกันโดยแบ่งหน้าที่กันรับผิดชอบ",
                    isEditing: false
                },
                {
                    commentPic: "/three.jpg",
                    commentName: "Ratana",
                    commentText: "พวกมันสามารถแบกน้ำหนักอาหารได้มากกว่าตัวมันหลายเท่า",
                    isEditing: false
                }
            ],
            commentPicTb: "/sorawit.png",
            commentNameTb: "Sorawit",
            commentTextTb: "",
            isUpdate: false
        };
    }

    deleteCommentItem = (commentName, commentText) => {
        var newCommentItems =
            this.state.commentItems.filter((commentItem) =>
                commentItem.commentName !== commentName || commentItem.commentText !== commentText);
        this.setState({
            commentItems: newCommentItems
        });
    }

    addCommentItem = (commentPic, commentName, commentText) => {
        this.state.commentItems.push({
            commentPic: commentPic,
            commentName: commentName,
            commentText: commentText

        });
        this.setState({
            commentItems: this.state.commentItems,
            commentPicTb: "/sorawit.png",
            commentNameTb: "Sorawit",
            commentTextTb: "",
            isUpdate: false
        });
    }

    doUpdateCommentItem = (commentPic, commentName, commentText) => {
        var newCommentItems = this.state.commentItems.map((commentItem) => {
            if (commentItem.commentName === commentName) {
                commentItem.isEditing = false;
                commentItem.commentPic = commentPic;
                commentItem.commentText = commentText;
                return commentItem;
            } else {
                return commentItem;
            }
        });
        this.setState({
            isUpdate: false,
            commentItems: newCommentItems,
            commentPicTb: "/sorawit.png",
            commentNameTb: "Sorawit",
            commentTextTb: ""

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
            commentPicTb: updatedCommentItem.commentPic,
            commentNameTb: updatedCommentItem.commentName,
            commentTextTb: updatedCommentItem.commentText

        });
    }


    render() {
        return (
            <div style={{ marginLeft: 50 }}>
   
                <CommentTable startEditCommentItem={this.startEditCommentItem}
                    deleteCommentItem={this.deleteCommentItem}
                    commentItems={this.state.commentItems}>
                </CommentTable>

                <CommentInput doUpdateCommentItem={this.doUpdateCommentItem}
                    commentPicTb={this.state.commentPicTb}
                    commentNameTb={this.state.commentNameTb}
                    commentTextTb={this.state.commentTextTb}
                    addCommentItem={this.addCommentItem}>
                </CommentInput>



            </div>
        )
    }
}

function Feedpage() {
    return (<div>

        <Header Header />
       
        <Createpost Createpost />
        <Layout>
        <Comment />
        </Layout>

    </div>
    );
}
export default Feedpage;