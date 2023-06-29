import React from "react";
import "../assets/Cards.css";

const Cards = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <div className="container">
            <div className="user-id-container">
              <p className="user_id">{user.id}</p>
            </div>
            <div className="img_container">
              <img
                className="avatar_img"
                src={user.avatar}
                alt={user.first_name}
              />
            </div>
          </div>
          <div className="User_name_container">
            <p>{user.first_name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
