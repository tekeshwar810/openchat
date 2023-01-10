import React from "react";
import '../Chat.css'

const UserList = () =>{
    return(
        <div id="plist" className="people-list">
        <div className="input-group">
            <div className="input-group-prepend">
                {/* <span className="input-group-text"><i className="fa fa-search"></i></span> */}
            </div>
            <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <ul className="list-unstyled chat-list mt-2 mb-0">
            <li className="clearfix">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                <div className="about">
                    <div className="name">Mohit</div>
                    <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                </div>
            </li>
            <li className="clearfix active">
                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                <div className="about">
                    <div className="name">Yash</div>
                    <div className="status"> <i className="fa fa-circle online"></i> online </div>
                </div>
            </li>
            <li className="clearfix">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                <div className="about">
                    <div className="name">Mohit</div>
                    <div className="status"> <i className="fa fa-circle online"></i> online </div>
                </div>
            </li>                                    
            <li className="clearfix">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                <div className="about">
                    <div className="name">Tekeshwar</div>
                    <div className="status"> <i className="fa fa-circle offline"></i> left 10 hours ago </div>
                </div>
            </li>
            <li className="clearfix">
                <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
                <div className="about">
                    <div className="name">Pooja</div>
                    <div className="status"> <i className="fa fa-circle online"></i> online </div>
                </div>
            </li>
       </ul>
    </div>
    )
}

export default UserList;