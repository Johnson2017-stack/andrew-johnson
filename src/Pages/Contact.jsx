import React from "react";

const Contact = () => {
  return (
    <>
      <h1>Contact Me</h1>
      <div id="contact">
        <div className="contact-left">
          <p>
            <i className="fa-solid fa-paper-plane"></i>{" "}
            andrew.k.johnson228@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-mobile-screen"></i> 303-210-4112
          </p>
        </div>

        <a
          href="src/images/Tech-Resume-2.docx copy.zip"
          download
          class="btn btn2"
        >
          Download CV
        </a>

        <div className="contact-right">
          <form className="submit-to-google-sheet">
            <div className="input-group input-group-sm mb-3">
              <input
                name="Name"
                placeholder="Your Name"
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="input-group mb-3">
              <input
                name="Email"
                placeholder="Your Email"
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="input-group input-group-lg">
              <input
                name="Message"
                placeholder="Your Message"
                type="text"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn2">
              Submit
            </button>
          </form>
        </div>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/andrew-johnson-24aaa223a/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://johnson2017-stack.github.io/andrew-johnson-portfolio/">
            <i class="fa-brands fa-square-github"></i>
          </a>
          <a href="https://github.com/Johnson2017-stack/andrew-johnson-portfolio.git">
            <i class="fa-sharp fa-solid fa-code-branch"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
