import React from "react";
import "../../Components/index.css";
import "./Komanda.css";

const Komanda = () => {
  return (
    <div className="komanda-cont">
      <div className="komanda-wrapper">
        <div className="komanda-title">
          <h2 className="text-title">Выделенная команда</h2>
        </div>
        <div className="komanda-l-r-wrapper">
          <div className="komanda-left">
            <div className="komanda-left-wrapper">
              <div className="komanda-left-text">
                <p>
                  Для каждого проекта мы формируем команду, в которую входят
                  проект менеджер, бизнес-аналитик, UI/UX дизайнер, DevOps,
                  QA-инженер, бэкенд и фронтенд разработчики
                </p>
              </div>
              <div className="komanda-left-counter">
                <h2>40+</h2>
                <p>Cотрудников</p>
              </div>
            </div>
          </div>
          <div className="komanda-right">
            <img
              src="https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Komanda;
