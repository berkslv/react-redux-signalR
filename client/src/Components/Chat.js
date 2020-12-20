import React, { useEffect } from "react";
import "../../Styles/chat.css";
import img_send from "../../Images/send-white.svg";
import { connect } from "react-redux";
import { sendMessage } from "../Redux";


const Chat = ({ toggleClose, chats, sendMessage }) => {
  
  useEffect(() => {
    toggleClose();
  });

  const fooSendMessage = () => {
    sendMessage("hello world!");
  }

  return (
    <div>
      <div className="container">{/* chat */}</div>
      <div className="card text-light mx-2 my-1 p-1 fixed-bottom" id="chat-nav">
        <div className="row">
          <div className="col-11">
            <input
              id="foo-input"
              type="text"
              className="form-control"
              placeholder="Say something..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              onClick={()=>{fooSendMessage()}}
            />
          </div>
          <div className="col-1 text-center" id="send-icon">
            <img src={img_send} alt="send" className="pt-1 pr-3"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chats: state.chat.chats,
  };
};

// NOTE called sendMessage method in redux
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => dispatch(sendMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
