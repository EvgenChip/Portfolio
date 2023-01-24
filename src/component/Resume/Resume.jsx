import React from "react";

import "./resume.scss";
const skillsData = [
  "React : hooks, redux, mobX, material- UI",
  "JavaScript",
  "TypeScript",
  "CSS, SCSS",
  "React Native",
  "GIT",
  "Gulp, Webpack",
  "Адаптивная верстка",
  "Методология БЭМ",
  "Верстаю по макету (Pixel Perfect)",
  "Adobe Photoshop, Figmа",
];
export const Resume = () => {
  return (
    <div className="resume">
      <div className="container">
        <div className="resume__inner">
          <div className="resume__description">
            <h2 className="resume__title">Resume</h2>
            <p className="resume__text">Fronted Developer on React.</p>
            <h3 className="resume__title">Skills</h3>
            <div className="resume__skills">
              {skillsData.map((i) => (
                <p className="resume__skill">{i}</p>
              ))}
            </div>
          </div>
          <div className="resume__experience">
            <div className="resume__title_experience">
              October 2021 - February 2022
            </div>
            <ul>
              Фриланс, верстка сайтов для бизнеса под ключ.
              <br />
              Частная практика.
              <br /> Разработка сайтов для game sector
              <li>HTML, Flex, Grid, SVG-Animation, БЭМ, Pixel Perfect </li>
              <li>CSS, SCSS, Bootstrap </li>
              <li>Gulp, Git</li>
            </ul>
            <div className="resume__title_experience">
              February 2022 - July 2022
            </div>
            <ul>
              Участие в разработке конструктора сайтов аналог word press.
              Поддержка существующего функционала, внедрение новых фич ,фикc
              багов.
              <li>HTML, БЭМ, Pixel, Perfect</li>
              <li>CSS, SCSS, StyledComponents</li>
              <li>JS, React, Redux, Hooks, Axios</li>
            </ul>
            <div className="resume__title_experience">June 2022 - Current</div>
            <ul>
              Участие в разработке площадки-стартапа для торговли crypto
              products
              <li>HTML </li>
              <li>CSS, SCSS, ModuleCss</li>
              <li>TypeScript, React, Redux, Hooks, Axios, ReactRouter </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
