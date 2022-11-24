import React, { useEffect, useRef, useState } from "react";
import s from "./chat.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";

import {
  addMessage,
  getMessages,
} from "./../../features/messages/messagesSlice";

const Chat = () => {
  const [messageText, setMessageText] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const [focus, setFocus] = useState(false);
  const messages = useSelector((state) => state.messages.messages);

  const dispatch = useDispatch();
  const socket = useRef();

  const token = useSelector((state) => state.user.token);

  const parseJwt = (token) => {
    let base64Url = token?.split(".")[1];
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
  console.log(parsedJwt);

  useEffect(() => {
    dispatch(
      getMessages({
        currentId: parsedJwt.id,
        recieverId: "637dd061cfaf072fba3931c2",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    socket.current = io("http://localhost:3001");
    socket.current.emit("addUser", "637dd061cfaf072fba3931c2");
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.length > 0) {
      setMessageText("");
    }
    socket.current.emit("send-msg", {
      to: "637dd061cfaf072fba3931c2",
      from: parsedJwt.id,
      message: messageText,
    });
    dispatch(
      addMessage({
        from: parsedJwt.id,
        to: "637dd061cfaf072fba3931c2",
        message: messageText,
      })
    );
    console.log(parsedJwt);
  };

  const handleTypeMessage = (e) => {
    setMessageText(
      e.target.value.charAt(0).toUpperCase() + e.target.value.substr(1)
    );
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        console.log(msg);
        setArrivalMessage({ myself: false, message: msg });
      });
    }
  });
  console.log(socket.current)

  return (
    <div className={s.chatWrapper}>
      <div className={s.chatInner}>
        {messages.map((item) => {
          return item.myself ? (
            <span>{item.message}</span>
          ) : (
            <p>{item.message}</p>
          );
        })}
        {/* <span>срочно связь йе</span>
        <span>лаьш ву</span>
        <span>корт лозит молх дуй вайгахь?</span>
        <span>корт лозит молх дуй вайгахь корт лозит молх дуй вайгахь корт лозит молх дуй вайгахь корт лозит молх дуй вайгахь?</span>
        <span>helloworldhelloworldhelloworldhelloworld!1111</span> */}
      </div>
      <div className={s.chatInputs}>
        <form
          action=""
          onSubmit={handleSendMessage}
          className={`${focus ? s.focusFormm : ""}`}
        >
          <span style={{ width: `${focus ? "100%" : 0}` }}></span>
          <input
            type="text"
            value={messageText}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={handleTypeMessage}
          />
          <button>➦</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
