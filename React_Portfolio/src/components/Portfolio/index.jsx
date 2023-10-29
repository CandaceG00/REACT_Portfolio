import React from "react";
import homeBrewImage from "../../assets/small/HomeBrew.png";
import globeTrotterImage from "../../assets/small/globe_trotter.png";
import weatherDashImage from "../../assets/small/weather_dashboard.png";
import noteTakerImage from "../../assets/small/notetaker.png";
import pGeneratorImage from "../../assets/small/password_generator.png";
import webQuizImage from "../../assets/small/webapi_1.png";
import cssImage from "../../assets/small/css_portfolio.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border portfolio">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://candaceg00.github.io/AdvancedCSS_Portfolio/">
                {" "}
                <img
                  src={cssImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="CSS-Portfolio"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>HTML & CSS Portfolio</h4>
              <p>
                This project demonstrates the capabilities of HTML and CSS in creating a website
                displaying my early work and layouts in the Bootcamp.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://candaceg00.github.io/WebAPIs_CodeQuiz/">
                {" "}
                <img
                  src={webQuizImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="web-code-quiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Web Coding Quiz</h4>
              <p>
                An HTML, CSS, and JavaScript application that allows the user to
                complete a timed coding quiz, as well as save their results and view
                their high scores.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://candaceg00.github.io/JavaScript_Password-Generator/">
                {" "}
                <img
                  src={pGeneratorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Password-Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>JavaScript Password Generator</h4>
              <p>
                An HTML, CSS and JavaScript webpage that can be used to generate random passwords between
                8 and 128 characters with letters, numbers, and special characters.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://candaceg00.github.io/SSAPIs_WeatherDashboard/">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="weather-app"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A web application that utilizes APIs to allow a user to view the weather of a particiular city
                by searching in the search bar. It also allows them to view the five-day forecast as well as temperature and humidity of each
                city. {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://note-taker5229-ecfbfdcd4843.herokuapp.com/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Notetaker-Application"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Notetaker</h4>
              <p>
                A front and back end application that allows the user to create and store notes, as well as log 
                the information such as date and time uploaded. This webpage can be viewed deployed via Heroku. {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://hans-doderlein.github.io/Globe-Trotter/">
                {" "}
                <img
                  src={globeTrotterImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="globe-trotter"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Globe-Trotter</h4>
              <p>
                A website that utilizes two APIs to connect the user with the weather and time
                in each city. It also features a search bar and links to flights, hotels, and Airbnbs 
                that the traveler can frequent.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;