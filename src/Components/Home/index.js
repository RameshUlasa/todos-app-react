import React, { useState } from "react";
import "./index.css";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let nameError = "";
    let emailError = "";
    let numberError = "";

    if (!name) {
      nameError = "Name is required*";
    }

    if (!email) {
      emailError = "Email is required*";
    }

    if (!number) {
      numberError = "Mobile number is required*";
    } else if (number.length !== 10) {
      numberError = "Mobile number should be 10 digits*";
    }

    setNameError(nameError);
    setEmailError(emailError);
    setNumberError(numberError);

    if (!nameError && !emailError && !numberError) {
      localStorage.setItem("userData", JSON.stringify({ name, email, number }));
      console.log(name);
      setName("");
      setEmail("");
      setNumber("");
      setNameError("");
      setEmailError("");
      setNumberError("");
      alert("Your response successfully submited");
    }
  }

  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top custom-bg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png"
              className="rubixe-logo"
              alt="rubixe-logo"
            />
          </a>
          <button
            className="navbar-toggler menu-icon-border"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon menu-icon-bg"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto text-left">
              <a
                className="nav-link navbar-items"
                id="navItem1"
                href="#homeSec"
              >
                HOME
                <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link navbar-items" href="#" id="navItem2">
                SERVICES
              </a>
              <a className="nav-link navbar-items" href="#" id="navItem3">
                PRODUCTS
              </a>
              <a className="nav-link navbar-items" href="#" id="navItem4">
                AI INTERNSHIP
              </a>
              <a className="nav-link navbar-items" href="#" id="navItem4">
                CAREER
              </a>
              <a className="nav-link navbar-items" href="#" id="navItem4">
                BLOG
              </a>
              <a
                className="nav-link navbar-items"
                href="#aboutUsSec"
                id="navItem4"
              >
                ABOUT
              </a>
              <a
                className="nav-link navbar-items"
                href="#contactUsSec"
                id="navItem4"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div id="homeSec" className="home-sec pt-5 pb-5">
        <img
          src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png"
          className="home-sec-img"
          alt="home-sec-img"
        />
        <h1 className="home-sec-quote">
          Investing in the future technology professionals of today is investing
          in the future of the world
        </h1>
      </div>

      <div id="aboutUsSec" className="about-us-sec pt-5">
        <div className="content-container mt-5">
          <div className="descrition-card">
            <h1 className="sec-head">who we are</h1>
            <p className="about-des">
              Rubixe™ is a global technology company specializing in disruptive
              technologies – Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain and Internet of
              Things (IoT). Rubixe mission to enable businesses to leverage the
              full potential of disruptive technologies to stay competitive in
              the market.
            </p>
            {/* <p className="about-des">
              Started in 2008, providing technology solutions based in the
              Netherlands, founders of Rubixe™ have gained expertise in
              cutting-edge technology through delivering several smart city
              solutions for European Commission (EC) projects.
            </p> */}
            <p className="about-des">
              At Rubixe™, we make your business more efficient, more predictable
              and more effective, turning complex challenges into solutions by
              leveraging disruptive technologies, providing a strategic
              competitive advantage. We serve clients in most industries
              including Banking & Finance, Retail, e-commerce, healthcare,
              logistics et., We have the capability to deliver solutions to
              clients of all sizes across the globe.
            </p>
          </div>
          <img
            src="https://rubixe.com/assets/img/aboutus/about-us.jpg"
            className="about-us-sec-img"
            alt="about"
          />
        </div>
        <div className="where-we-started-sec">
          <div className="pink-card">
            <h1 className="sec-head pink-head">where we started</h1>
            <p className="about-des pink-head">
              Started in 2008, providing technology solutions based in the
              Netherlands, founders of Rubixe™ have gained expertise in
              cutting-edge technology through delivering several smart city
              solutions for European Commission (EC) projects.
            </p>
          </div>
        </div>
      </div>

      <div className="initiative-sec pt-5 pb-5">
        <div className="inner-card">
          <h1 className="sec-head">tect for teens - a rubixe ® initiative</h1>
          <ul className="tech-cards-list mt-5">
            <li className="each-card mt-4">
              <p className="position-item">01</p>
              <img
                className="tech-logo"
                alt="tect-logo-1"
                src="https://res.cloudinary.com/dgpzmegh5/image/upload/v1676623682/ai-logo_lkpiz3.jpg"
              />
              <p className="about-tech">
                Introducing AI to children in an age appropriate manner.
              </p>
            </li>
            <li className="each-card-1 card-2 mt-4">
              <p className="position-item-1 p-2">02</p>
              <p className="about-tech">
                Gain awareness on AI and build an interactive story around it
              </p>
              <img
                className="tech-logo"
                alt="tect-logo-2"
                src="https://res.cloudinary.com/dgpzmegh5/image/upload/v1676630868/ai-2_onlvu6.webp"
              />
            </li>
            <li className="each-card card-3 mt-4">
              <p className="position-item p-3">03</p>
              <img
                className="tech-logo"
                alt="tect-logo-3"
                src="https://res.cloudinary.com/dgpzmegh5/image/upload/v1676630985/ai-3_sgr8xw.jpg"
              />
              <p className="about-tech">
                Acquire programming skills in user-friendly format
              </p>
            </li>
            <li className="each-card-1 card-4 mt-4">
              <p className="position-item-1 p-4">04</p>
              <p className="about-tech">
                Exposure to mini projects on diverse topics
              </p>
              <img
                className="tech-logo"
                alt="tect-logo-4"
                src="https://res.cloudinary.com/dgpzmegh5/image/upload/v1676631289/ai-4_izj9gn.jpg"
              />
            </li>
            <li className="each-card card-5 mt-4">
              <p className="position-item p-5">05</p>
              <img
                className="tech-logo"
                src="https://res.cloudinary.com/dgpzmegh5/image/upload/v1676631295/ai-5_nkvl7c.webp"
                alt="tect-logo-5"
              />
              <p className="about-tech">Train the teachers programme</p>
            </li>
          </ul>
        </div>
      </div>

      <div id="contactUsSec" className="contact-us-sec pt-5 pb-5">
        <div className="form-container mt-5">
          <div className="form-des-card">
            <h1 className="form-head">get in touch</h1>
            <p className="form-des">
              Please complete the form and we will get back to you.
            </p>
          </div>

          <form id="formSend" className="form-send" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="label-ele">
                Name*
              </label>
              <input
                id="name"
                type="text"
                className="form-control input"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="error">{nameError}</p>
            </div>
            <div>
              <label htmlFor="email" className="label-ele">
                Email*
              </label>
              <input
                id="email"
                type="email"
                className="form-control input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="error">{emailError}</p>
            </div>
            <div>
              <label htmlFor="number" className="label-ele">
                Mobile Number*
              </label>
              <input
                id="number"
                type="number"
                className="form-control input"
                placeholder="Enter your number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <p className="error">{numberError}</p>
            </div>
            <div className="pb-3">
              <button className="send-btn w-100" type="submit">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>

      <div id="footerSec" className="footer-sec pt-5">
        <div className="footer-content">
          <div className="about-card">
            <h6 className="footer-head">about us</h6>
            <p className="address-and-about">
              Rubixe™ is a global technology company specializing in disruptive
              technologies – Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain and Internet of
              Things (IoT). Rubixe mission to enable businesses to leverage the
              full potential of disruptive technologies to stay competitive in
              the market.
            </p>
          </div>
          <div className="footer-anchor-items">
            <div className="pr-5 h">
              <h6 className="footer-head">menus</h6>
              <ul>
                <li>
                  <a className="about">Home</a>
                </li>
                <li>
                  <a className="about">Services</a>
                </li>
                <li>
                  <a className="about">Products</a>
                </li>
                <li>
                  <a className="about">Career</a>
                </li>
              </ul>
            </div>
            <div className="pr-5 h">
              <h6 className="footer-head">learn more</h6>
              <ul>
                <li>
                  <a className="about">About</a>
                </li>
                <li>
                  <a className="about">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="address-sec address-card">
            <h6 className="footer-head">address</h6>
            <p className="address-and-about">
              Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
              Karnataka 560068 <br />
              Phone: 0804-717-8999 <br />
              Email: hi@rubixe.com
            </p>
            <h6 className="footer-head">social media</h6>
            <div className="d-flex flex-row">
              <a>
                <i className="fa-brands fa-square-facebook icon"></i>
              </a>
              <a>
                <i className="fa-brands fa-linkedin icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyrights-sec">
        <div className="card-copy">
          <p className="copy-right">
            © Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD
            INNOVATIONS PVT. LTD. | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
