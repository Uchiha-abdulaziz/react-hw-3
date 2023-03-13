import React from "react";

export default function Friendlist({ friends }) {
  return (
    <div>
      <section className="name-section">
        <h1 className="name-h1">My friends</h1>
        <ul className="friend-list">
          {friends.map((item) => (
            <li class="name-item">
              <span className={item.isOnline ? "green" : "red"}></span>
              <img className="name-img"
                class="name-avatar"
                src={item.avatar}
                alt="User avatar"
                width="48"
              />
              <p class="name">{item.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
