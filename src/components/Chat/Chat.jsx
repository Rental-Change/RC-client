import React, { useEffect, useState } from 'react';
import { IoArrowBackOutline, IoPersonCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import ChatDetail from './ChatDetail';

const Chat = ({ showChat, setShowChat, chatData }) => {
  const [chatUsers, setChatUsers] = useState([]);
  const [showChatDetail, setShowChatDetail] = useState(false)

  useEffect(() => {
    const users = chatData.map(v => ({
      chatID: v._id,
      userID: v.postUser_ID.user_ID,
      name: v.postUser_ID.user_Name,
      item: v.roomName,
    }));
    setChatUsers(users);

  }, [chatData]);

  useEffect(() => {
  }, [chatUsers])
  

  return (
    <>
      {showChat && (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='fixed inset-0 bg-black opacity-50'></div> {/* 배경을 어둡게 하는 오버레이 */}
          <div className='relative w-full h-full flex items-center justify-center'>
            <div className='bg-white rounded-lg shadow-lg pb-10 h-2/3 overflow-auto scrollbar-hide min-w-1/3 max-w-2xl'>
              <button className="p-5" onClick={() => {!showChatDetail ?
              setShowChat(false) : setShowChatDetail(false)}}>
                <IoArrowBackOutline className='h-8 w-8' />
              </button>
              <div className='flex items-center mx-8'>
                <p className='font-[Pretendard] text-[28px] font-bold'>{
                  !showChatDetail ? "채팅하기" : `${chatUsers.name}`}</p>
              </div>
              <div>
                {!showChatDetail ? (
                  chatUsers.map((user, index) => (
                    <div 
                      onClick={(() => setShowChatDetail(true))}
                      key={index}>
                      <div className='font-[Pretendard] font-bold p-1'>
                        <div className='cursor-pointer bg-slate-400 mx-2 flex items-center justify-between p-2 rounded-md mb-2'>
                          <div className='flex items-center gap-5'>
                            <IoPersonCircleOutline className='w-12 h-12' />
                            <div className='flex flex-col'>
                              <p className='text-[20px]'>{user.name}</p>
                              <p className='text-[15px]'>{user.item}</p>
                            </div>
                          </div>
                          <div className='text-right'>
                            {/* <p>안녕하세여</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  ChatDetail
                ) }
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
