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
              January 2021 - June 2021
            </div>
            <ul>
              Участие в разработке конструктора сайтов - аналога wordPress.
              Разработка виджетов для no-codding. Поддержание существующего
              функционала, создание, доработка и внедрение новых компонентов для
              готовых модулей.
              <li>HTML, Flex, Grid, SVG-Animation, БЭМ, Pixel Perfect </li>
              <li>CSS, SCSS, Bootstrap </li>
              <li>Gulp, Git</li>
            </ul>
            <div className="resume__title_experience">
              June 2021 - July 2022
            </div>
            <ul>
              Разработка личного кабинета для пользователей "мастер - данные"
              разработка и внедрение новых компонентов интерфейса
              <li>HTML, БЭМ, Pixel, Perfect</li>
              <li>CSS, SCSS, StyledComponents</li>
              <li>JS, React, Redux, Hooks, Axios</li>
            </ul>
            <div className="resume__title_experience">
              June 2022 - January 2023
            </div>
            <ul>
              Участие в разработке площадки-стартапа для торговли crypto
              products
              <li>HTML </li>
              <li>CSS, SCSS, ModuleCss</li>
              <li>TypeScript, React, Redux, Hooks, Axios, ReactRouter </li>
            </ul>
            <div className="resume__title_experience">
              January 2023 - Current.
            </div>
            <ul>
              Доработка создание кастомных модулей, рефакторинг кодовой базы.
              Кроссбраузерная верстка.
              <li>Shopify </li>
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
