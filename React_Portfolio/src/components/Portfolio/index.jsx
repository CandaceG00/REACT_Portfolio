import React from "react";
import homeBrewImage from "../../assets/small/HomeBrew.png";
import summerPunchImage from "../../assets/small/Summer_Punch.png";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
import noteTakerImage from "../../assets/small/NoteTaker.png";
import twilightImage from "../../assets/small/Twilight_Ristorante.png";
import flowerImage from "../../assets/small/Sweet-Pea-Flowers.png";
import sphereImage from "../../assets/small/Sphere.png";

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
                  src={sphereImage}
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
                  src={flowerImage}
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
                  src={twilightImage}
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
                  src={noteTakerImage}
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
              <a href="https://lemming97.github.io/Weather_Dashboard/">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://lemming97.github.io/Project_1/">
                {" "}
                <img
                  src={summerPunchImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="SummerPunch"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Summer Punch</h4>
              <p>
                A website which offers users to input a drink name to have the
                ingredients, measurements, and images display. The user can also
                have a cocktail generated. If the user is too young, the user
                will be redirected to another page.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://floating-island-17357.herokuapp.com/">
                {" "}
                <img
                  src={homeBrewImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="HomeBrew"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>HomeBrew</h4>
              <p>
                A plant blog that allows the user to view seasonal gallery of
                plants after the user logs into their account. The user can also
                add comments to the blog once they are logged in as well as
                deleting their comments.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;