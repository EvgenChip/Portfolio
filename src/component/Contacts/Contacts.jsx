import React from "react";
import { social } from "../../data/data.js";
import "./contacts.scss";

export const Contacts = () => {
  return (
    <div className="contacts">
      <h2 className="contacts__title">CONTACT ME</h2>

      <div className="contacts__icons">
        {social.map((icon) => (
          <a target="_blank" href={icon.url}>
            <img src={icon.img} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};
