import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeid, generator } from "./helper";
import { addItem } from "../redux/chatSlice";

const ChatContainer = () => {
  const messages = useSelector((store) => store.chat);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  useEffect(() => {
    const int = setInterval(() => {
      dispatch(addItem(generator() + " :  " + makeid(20)));
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="font-bold text-2xl heading">Live Chat</div>
      <div className="chart p-4 overflow-y-scroll flex flex-col-reverse">
        {messages.map((message) => (
          <div className="shadow-md m-2" key={message}>
            {message}{" "}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addItem("Sharmila Narendra:[" + makeid(2) + "] " + comment));
          setComment("");
        }}
      >
        <input
          type="text"
          value={comment}
          className=" ml-2 mt-2 h-10 w-full bg-slate-200 rounded-3xl p-2"
          placeholder="Enter the comment here.."
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></input>
        <input type="Submit" hidden></input>
      </form>
    </div>
  );
};

export default ChatContainer;
