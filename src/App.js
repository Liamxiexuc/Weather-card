import React from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faWind,
  faCloudSun,
  faCloudRain,
  faPooStorm,
  faSun
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTwitter,
  faBars,
  faWind,
  faCloudSun,
  faCloudRain,
  faPooStorm,
  faSun
);

function App() {
  return (
    <div className="container">
      <header>
        <FontAwesomeIcon icon={faBars} />
      </header>
      <main>
        <div className="card">
          <div className="card__main">
            <h1>HOBART</h1>
            <div className="card__main__left">
              <h1>12</h1>
              <div className="celsius"></div>
              <p>CLOUDY</p>
              <ul>
                <li>
                  <h1>wind</h1>
                  <p>12 k/m</p>
                </li>
                <li>
                  <h1>humidity</h1>
                  <p>64%</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="card__details">
            <div className="card__details__left">
              <h1>
                <FontAwesomeIcon icon={faTwitter} /> Twitter Feed{" "}
                <small>#Hobart</small>
              </h1>
              <ul>
                <li>
                  <div className="avatar"></div>
                  <p>Some text here</p>
                </li>
                <li>
                  <div className="avatar"></div>
                  <p>Some text here</p>
                </li>
              </ul>
            </div>
            <div className="card__details__right">
              <ul>
                <li>
                  <h1>MON</h1>
                  <p>
                    <FontAwesomeIcon icon={faWind} />
                  </p>
                  <p>9°</p>
                  <p>
                    <small>WIND</small>
                  </p>
                </li>
                <li>
                  <h1>TUE</h1>
                  <p>
                    <FontAwesomeIcon icon={faCloudSun} />
                  </p>
                  <p>15°</p>
                  <p>
                    <small>CLOUDY</small>
                  </p>
                </li>
                <li>
                  <h1>WED</h1>
                  <p>
                    <FontAwesomeIcon icon={faCloudRain} />
                  </p>
                  <p>11°</p>
                  <p>
                    <small>CLOUDY</small>
                  </p>
                </li>
                <li>
                  <h1>THU</h1>
                  <p>
                    <FontAwesomeIcon icon={faPooStorm} />
                  </p>
                  <p>6°</p>
                  <p>
                    <small>Storm</small>
                  </p>
                </li>
                <li>
                  <h1>FRI</h1>
                  <p>
                    <FontAwesomeIcon icon={faSun} />
                  </p>
                  <p>19°</p>
                  <p>
                    <small>SUNNY</small>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
