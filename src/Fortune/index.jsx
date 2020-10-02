import React from "react";
import UnicornImage from "./unicorn.svg";
import "./unicorn.css";

const Fortune = ({ onClick }) => {
  const fortuneRef = React.useRef(); //import 안 해서 React 붙임

  const handleClick = () => {
    const cookie = fortuneRef.current;
    if (!cookie.classList.contains("fortune--jumping")) {
      onClick();
      cookie.classList.add("fortune--jumping");
      setTimeout(() => {
        cookie.classList.remove("fortune--jumping");
      }, 4000);
    }
  };

  return (
    <img
      src={UnicornImage}
      alt="오도원"
      className="fortune"
      onClick={handleClick}
      ref={fortuneRef} //이러면 이미지를 레프로 쓸 수 있다
    />
  );
};

export default Fortune;
