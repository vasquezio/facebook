import React, { useState } from "react";

const SideBar = () => {
  const [state, setState] = useState([
    { id: 1, image: "/images/picture12.jpg", name: "Gabriel Vásquez" },
    { id: 2, image: "/images/corona.png", name: "COVID-19: Centro de Información" },
    { id: 3, image: "/images/page.png", name: "Páginas" },
    { id: 4, image: "/images/friends.png", name: "Amigos" },
    { id: 5, image: "/images/messenger.png", name: "Messenger" },
    { id: 6, image: "/images/market.png", name: "MarketPlace" },
    { id: 7, image: "/images/videos.png", name: "Videos" },
    { id: 8, image: "/images/group.png", name: "Grupos" },
    { id: 9, image: "/images/events.png", name: "eventos" },
    { id: 10, image: "/images/more.png", name: "Ver más" },
  ]);
  return (
    <div className="sidebar">
      {state.map((info) => (
        <div className="sidebar__list" key={info.id}>
          <div className="sidebar__list-img">
            <img src={info.image} alt="group image" />
          </div>
          <div className="sidebar__list-name">{info.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
