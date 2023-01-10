import "../Chat.css";
import UserList from "./UserList";
import ChatHistory from "./ChatHistory";

const Chat = () => {
    return (
        <>
            <>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="card chat-app">
                                <UserList />
                                <ChatHistory />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Chat;