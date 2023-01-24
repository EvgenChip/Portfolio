import React from "react";
import { social } from "../../data/data.js";
import "./homepage.scss";

export const HomePage = () => {
  //   const social = [
  //     {
  //       id: 1,
  //       img: tlg,
  //       url: "https://t.me/CH_Evgeniy_CH",
  //     },
  //     {
  //       id: 2,
  //       img: git,
  //       url: "https://github.com/EvgenChip",
  //     },
  //     {
  //       id: 3,
  //       img: linkedin,
  //       url: "https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BD%D0%B5%D1%87%D0%B8%D0%BF%D0%BE%D1%80%D0%B5%D0%BA%D0%BD%D0%BE-55632b255/",
  //     },
  //   ];

  return (
    <div className="home-page">
      <div className="home-page__inner">
        <div className="home-page__title">
          <p className="home-page__title_name">EVGENIY</p>
          <p className="home-page__title_family">NECHIPORENKO</p>
        </div>
        <span className="home-page__position">
          Front-end Developers portfolio
        </span>
        <div className="home-page__icons">
          {social.map((icon) => (
            <a target="_blank" href={icon.url}>
              <img src={icon.img} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
