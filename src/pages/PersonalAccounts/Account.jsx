import React from "react";
import { useSelector } from "react-redux";
import Doctor from "./Doctor/Doctor";
import User from "./User/User";

function Account() {
  const token = useSelector((state) => state.user.token);

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

  if (parsedJwt.role === "doctor") {
    return <Doctor />;
  }
  if (parsedJwt.role === "user") {
    return <User />;
  }
}

export default Account;
