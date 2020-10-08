import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
const ShowPost = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      userImg: "/images/picture14.jpg",
      name: "Borges Virginia",
      time: "19min",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg: "/images/picture13.jpg",
    },
    {
      id: 2,
      userImg: "/images/picture15.jpg",
      name: "Melanie acosta",
      time: "23h",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg: "/images/picture16.jpg",
    },
    {
      id: 3,
      userImg: "/images/picture17.jpg",
      name: "Alejandra Belo",
      time: "ayer",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg: "/images/picture18.jpg",
    },
    {
      id: 4,
      userImg: "/images/picture19.jpg",
      name: "Stefany Ballesteros",
      time: "ayer",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi,\
        magnam quo illum expedita",
      postImg: "/images/picture20.jpg",
    },
  ]);
  return (
    <div className="show">
      {state.map((post) => (
        <div key={post.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {post.name} <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              <img src={post.postImg} alt="post" />
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text">Me gusta</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comenta</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Compartir</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;
