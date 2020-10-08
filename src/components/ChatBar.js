import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/picture1.jpg", name: "Annette Mariana" },
    { id: 2, image: "/images/picture2.jpg", name: "Aranguren Diannys" },
    { id: 3, image: "/images/picture3.jpg", name: "Michelle Kat" },
    { id: 4, image: "/images/picture4.jpg", name: "Valen Mascareño" },
    { id: 5, image: "/images/picture5.jpg", name: "Alanis querales" },
    { id: 6, image: "/images/picture6.jpg", name: "Nicoll Vargas" },
    { id: 6, image: "/images/picture7.jpg", name: "Yeni Peraza" },
    { id: 7, image: "/images/picture8.jpg", name: "Maria Velazquez" },
    { id: 8, image: "/images/picture9.jpg", name: "Jesus Manzanarez" },
    { id: 9, image: "/images/picture10.jpg", name: "Luisanyelis Camacaro" },
    { id: 10, image: "/images/picture11.jpg", name: "Olianny Yépez" },
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
