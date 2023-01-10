import React,{ useState } from "react";

const ChatHistory = () => {
    const [ msg,setMsg ] = useState('')
    const [ displayMsg,setdisplayMsg ] = useState([{
        text:'hello',
        time:'10:12 AM, Today'
    },
    {
        text:'welcome',
        time:'10:12 AM, Today'
    }
])
    function sendMsg() {
        alert("msg send it");
        
    }

    const inputHandler = (e) => {
        console.log(e.target.value,e.keyCode)
        if(e.keyCode === 13){
            sendMsg()
        }
    }

    return (
        <div className="chat">
            <div className="chat-header clearfix">
                <div className="row">
                    <div className="col-lg-6">
                        {/* <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                    </a> */}
                        <div className="chat-about">
                            <h6 className="m-b-0">Aiden Chavez</h6>
                            <small>Last seen: 2 hours ago</small>
                        </div>
                    </div>
                    <div className="col-lg-6 hidden-sm text-right">
                        {/* <a href="javascript:void(0);" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
                    <a href="javascript:void(0);" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
                    <a href="javascript:void(0);" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
                    <a href="javascript:void(0);" className="btn btn-outline-warning"><i className="fa fa-question"></i></a> */}
                    </div>
                </div>
            </div>
            <div className="chat-history">
                <ul className="m-b-0">
                    {/* <li className="clearfix">
                    <div className="message-data text-right">
                        <span className="message-data-time">10:10 AM, Today</span>
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                    </div>
                    <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                </li> */}
                {
                    displayMsg.map((text)=>{
                       return <li className="clearfix">
                        <div className="message-data">
                            <span className="message-data-time">{text.time}</span>
                        </div>
                        <div className="message my-message">{text.text}</div>
                    </li>
                    })
                }
                    
                </ul>
            </div>
            <div className="chat-message clearfix">
                {/* <div className="input-group mb-0"> */}
                <div className="send-btn" onClick={sendMsg}>
                    <span className="">
                        <i className="fa fa-send"></i>
                    </span>
                </div>
                <div className="text-msg">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter text here..."
                        onKeyDown={inputHandler}
                        onChange={(e)=>inputHandler(e)}
                    />
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default ChatHistory;
