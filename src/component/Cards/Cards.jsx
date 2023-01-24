import React from "react";
import { useState } from "react";

import { PROJECTS } from "../../data/data";

import "./cards.scss";

export const Cards = () => {
  const [numberCardActive, setNumberCardActive] = useState(null);
  const [volCard, setVolCard] = useState(4);
  const project = PROJECTS.slice(0, volCard);
  const displayCard = (id) => {
    setNumberCardActive(id);
  };
  const displayVolCard = () => {
    return setVolCard(volCard + 4);
  };
  return (
    <div className="cards">
      <div className="container">
        <div className="cards__title">Case studies</div>
      </div>
      <div className="cards__inner">
        {project.map((i) => (
          <div
            key={i.id}
            onClick={() => displayCard(i.id)}
            onMouseLeave={() => {
              setNumberCardActive(null);
            }}
            className="card__wrap">
            {numberCardActive === i.id && (
              <div className="card__info">
                <div className="card__info_wrap">
                  <a target="_blank" href={i.toViewing}>
                    Preview
                  </a>
                  <a target="_blank" href={i.toCode}>
                    Git
                  </a>
                </div>
              </div>
            )}

            <div className={i.backgroundColor}>
              <div className="card">
                <div className="card__title"> {i.title} </div>
                <div className="card__description"> {i.technologies} </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cards__button-load">
        <button onClick={displayVolCard} className="button">
          See more
        </button>
      </div>
    </div>
  );
};
