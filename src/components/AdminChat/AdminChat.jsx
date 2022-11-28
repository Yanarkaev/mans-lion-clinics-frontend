import React, { useEffect, useRef, useState } from "react";
import s from "./adminChat.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getChatUsers } from "../../features/userSlice";
import { io } from "socket.io-client";
import {
  addMessage,
  getMessages,
} from "./../../features/messages/messagesSlice";

const AdminChat = () => {
  const chatUsers = useSelector((state) => state.user.users);
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  const socket = useRef();

  const [selectedUser, setSelectedUser] = useState("");
  const [messageText, setMessageText] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const token = useSelector((state) => state.user?.token);

  const parseJwt = (token) => {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  };

  const parsedJwt = parseJwt(token);

  useEffect(() => {
    if (selectedUser) {
      socket.current = io("http://localhost:3001");
      socket.current.emit("addUser", selectedUser._id);
    }
  });

  useEffect(() => {
    dispatch(getChatUsers());
  }, [dispatch]);

  useEffect(() => {
    setSelectedUser(chatUsers[0]);
    dispatch(
      getMessages({
        currentId: "637dd061cfaf072fba3931c2",
        recieverId: chatUsers[0]?._id,
      })
    );
  }, [chatUsers]);

  const handleSelectUser = (user) => {
    dispatch(
      getMessages({
        currentId: "637dd061cfaf072fba3931c2",
        recieverId: user._id,
      })
    );
    setSelectedUser(user);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    socket.current.emit("send-msg", {
      to: selectedUser._id,
      from: parsedJwt.id,
      message: messageText,
    });
    dispatch(
      addMessage({
        from: parsedJwt.id,
        to: selectedUser._id,
        message: messageText,
      })
    );
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ myself: false, message: msg });
      });
    }
  }, [arrivalMessage]);

  return (
    <div className={s.chatWrapper}>
      <div className={s.usersWrapper}>
        {chatUsers.map((item) => {
          return (
            <div
              key={item._id}
              className={s.user}
              onClick={() => handleSelectUser(item)}
            >
              <span className={s.avatar}>{item.fullName[0]}</span>
              <span className={s.username}>{item.fullName}</span>
            </div>
          );
        })}
      </div>

      <div className={s.chatInner}>
        <div className={s.chatHeader}>
          <span className={s.username}>{selectedUser?.fullName}</span>
        </div>

        <div className={s.messages}>
          {messages.map((item) => {
            return item.myself ? (
              <p className={s.myself}>{item.message}</p>
            ) : (
              <p className={s.reciever}>{item.message}</p>
            );
          })}
        </div>

        <div className={s.inputs}>
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <button>
              <span>➜</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminChat;
