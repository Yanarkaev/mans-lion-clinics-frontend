import React, { useState } from "react";
import s from "./chat.module.scss"

const Chat = () => {
  const [messageText, setMessageText] = useState("");
  const [focus, setFocus] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.length > 0) {
      setMessageText("");
    }
  };

  const handleTypeMessage = (e) => {
    setMessageText(
      e.target.value.charAt(0).toUpperCase() + e.target.value.substr(1)
    );
  };

  return (
    <div className={s.chatWrapper}>
      <div className={s.chatInner}>
        <span>срочно связь йе</span>
        <span>лаьш ву</span>
        <span>корт лозит молх дуй вайгахь?</span>
        <span>корт лозит молх дуй вайгахь корт лозит молх дуй вайгахь корт лозит молх дуй вайгахь корт лозит молх дуй вайгахь?</span>
        <span>helloworldhelloworldhelloworldhelloworld!1111</span>
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
