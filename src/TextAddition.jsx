import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    marginLeft: "25px",
  },
});

const TextAddition = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const messageList = props.messages.map((e) => <li>{e}</li>);

  const handleClick = () => {
    props.onMessageAdd(text);
    // setMessages([...messages, text]);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <ul>{messageList}</ul>
      <input onChange={handleChange} />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={handleClick}
      >
        추가하기
      </Button>
    </div>
  );
};

export default TextAddition;
