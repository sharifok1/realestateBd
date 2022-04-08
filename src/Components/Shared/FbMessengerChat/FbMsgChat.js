import React from 'react';
import './FbMsgChat.css'
import MessengerCustomerChat from 'react-messenger-customer-chat';

const FbMsgChat = () => {
    return (
        <div>
            <div className='chat-wraper'>
             <MessengerCustomerChat
                    pageId="102559349099097"
                    appId="<370005818332342>"
                />
            </div>
        </div>
    );
};

export default FbMsgChat;