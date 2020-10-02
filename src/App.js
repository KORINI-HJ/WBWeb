import React, { useState } from "react";
import TextAddition from "./TextAddition";
import Fortune from "./Fortune";
import Input from '@material-ui/core/Input';
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles({
  root: {
    display: "flex", //js이기 때문에 문자열로 처리, css는 없어도 됨
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",

  }
})

const Bubble = ({children}) => {
  return <div className="bubble">{children}</div>
}

const App = () => {
  const classes = useStyles()

  const [messages, setMessages] = useState(["안녀아셍 버보릅러보릅럽ㄹ을 오늘도 행복해세요", "b"]);
  const [selectedMessage, setSelectedMessage] = useState("유니콘을 눌러주세요");

  const handleMessageAdd = (text) => {
    setMessages([...messages, text]);
  }

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * messages.length)
    console.log(messages[randomIndex])
    setSelectedMessage(messages[randomIndex])
    setTimeout(() => {
      setSelectedMessage("유니콘을 눌러주세요")
    }, 8000);  
  }

  return ( 
    <div className={classes.root}>
      {/* <TextAddition messages={messages} onMessageAdd={handleMessageAdd} /> */}
      <Fortune onClick={handleClick} />
      <Bubble>{selectedMessage}</Bubble>
    <div></div>
    </div>
  );
};

export default App;
