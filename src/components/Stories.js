import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/picture12.jpg", name: "Públicar una historia" },
    { id: 2, image: "/images/picture21.jpg", name: "Melanie Acostaa" },
    { id: 3, image: "/images/picture22.jpg", name: "Ritzabeth Castillo" },
    { id: 4, image: "/images/picture23.jpg", name: "Valentina Azuaje" },
    { id: 5, image: "/images/picture24.jpg", name: "Yonderlis Alvarado" },
  ]);
  return (
    <div className="stories">
      {state.map((story) => (
        <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.image} alt="stories" />
            <div className="stories__body-overlay">
              <div className="stories__body-overlay-img">
                <img src={story.image} alt="" />
              </div>
              <div className="stories__body-name">{story.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
