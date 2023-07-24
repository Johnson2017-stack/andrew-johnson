import React from "react";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Portfolio</h1>

          <div className="work-list">
            <div className="work">
              <img
                src="src/images/work-1.jpg"
                al="by Markus Spiske on unsplash"
              />
              <div className="layer">
                <h3>Tik-Tak-Toe </h3>
                <p>
                  I followed the tutorial on react and built this Tik-Tac-Toe
                  Game
                </p>
                <a href="https://github.com/Johnson2017-stack/tik-tac-toe.git">
                  <i class="fa-sharp fa-solid fa-code-branch"></i>
                </a>
                <a href="andys-tik-tac-toe.netlify.app">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img
                src="src/images/work-2.jpg"
                alt="by Marvin Meyer on unsplash"
              />
              <div className="layer">
                <h3>First Portfolio </h3>
                <p>This is my first Portfolio I built with HTML</p>
                <a href="https://github.com/Johnson2017-stack/andrew-johnson-portfolio.git">
                  <i class="fa-sharp fa-solid fa-code-branch"></i>
                </a>
                <a href="https://johnson2017-stack.github.io/andrew-johnson-portfolio/">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img
                src="src/images/work-3.jpg"
                alt="by Gabriel Beaudry on unsplash"
              />
              <div className="layer">
                <h3>MERN Front End</h3>
                <p>This was a Front end Exercise I did in class for MongoDB</p>
                <a href="https://github.com/Johnson2017-stack/mern-frontend-deployment.git">
                  <i class="fa-sharp fa-solid fa-code-branch"></i>
                </a>
                <a href="mern-frontend-deployment.netlify.app">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img
                src="src/images/work-4.jpg"
                alt="By Nate Grant on unsplash"
              />
              <div className="layer">
                <h3>MERN Back End</h3>
                <p>This was a Backend Exercise I did in class for MongoDB</p>
                <a href="https://github.com/Johnson2017-stack/mern-backend-deployment.git">
                  <i class="fa-sharp fa-solid fa-code-branch"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img
                src="src/images/work-5.jpg"
                alt="By Rami Al-Zayat on unsplash"
              />
              <div className="layer">
                <h3>Contact App</h3>
                <p>I built this App with vite and react</p>
                <a href="https://github.com/Johnson2017-stack/contact-app.git">
                  <i class="fa-sharp fa-solid fa-code-branch"></i>
                </a>
                <a href="https://react-router-contact-app2.netlify.app/">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img
                src="src/images/work-6.jpg"
                alt="By Samuel Regan-Asante on unsplash"
              />
              <div className="layer">
                <h3>Movie Search App</h3>
                <p>Fun movie search App with not much css</p>
                <a href="https://github.com/Johnson2017-stack/search-movie.git">
                  <i class="fa-sharp fa-solid fa-code-branch"></i>
                </a>
                <a href="https://celadon-melba-67a730.netlify.app/">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img src="src/images/work-7.jpg" alt="By NASA on unsplash" />
              <div className="layer">
                <h3>Weather App</h3>
                <p>A Fun weather app I built referencing a Api</p>
                <a href="https://github.com/Johnson2017-stack/weather-app-react.git">
                  <i class="fa-sharp fa-solid fa-code-branch"></i>
                </a>
                <a href="https://ornate-selkie-5e0b99.netlify.app/">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img
                src="src/images/work-8.jpg"
                alt="By History in HD on unsplash"
              />
              <div className="layer">
                <h3>NASA APOD</h3>
                <p>A App I built referencing the APOD API on nasa</p>
                <a href="https://github.com/Johnson2017-stack/NASA-Apod.git">
                  <i class="fa-sharp fa-solid fa-code-branch"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
