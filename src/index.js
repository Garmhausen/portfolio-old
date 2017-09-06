import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import './index.css';

// react-scroll: https://github.com/fisshy/react-scroll
var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin');

    Events.scrollEvent.register('end');

    scrollSpy.update();
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-internal-wrapper">
            <div className="nav-links-wrapper">
              <div className="nav">
                <a
                  className="navbar-brand nav-title"
                  href="http://www.robertgarmhausen.com"
                >
                  Robert Garmhausen
                </a>
                <Link
                  activeClass="active"
                  className="about navlink"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  className="projects navlink"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
                <Link
                  activeClass="active"
                  className="contact navlink"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
                <span className="nav-icons">
                  <a
                    href="https://www.linkedin.com/in/robertgarmhausen/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/Garmhausen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>

        <Element name="about" className="element about-section">
          <div className="about-wrapper">
            <div className="about-text">
              <div className="about-title">Hello</div>
              <p>
                Hi! I’m Robert Garmhausen, a full-stack web developer with a
                background in IT. I’m a passionate life-long learner and love to
                untangle problems and solve puzzles. Also, I’m a strong believer
                in open-source software and the amazing community it fosters.
                When I’m not at my keyboard, you can find me playing board games
                and reading comic books.
              </p>
              <p>
                Are you looking for a great web developer to do some freelance
                work for you? Check out my{' '}
                <a
                  href={process.env.PUBLIC_URL + 'Robert_Garmhausen.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  résumé
                </a>{' '}
                and <a href="mailto:robertgarmhausen@gmail.com">
                  get in touch
                </a>.
              </p>
            </div>
          </div>
          <div className="skills-grid">
            <i className="devicon-html5-plain-wordmark" />
            <i className="devicon-css3-plain-wordmark" />
            <i className="devicon-javascript-plain" />
            <i className="devicon-bootstrap-plain-wordmark" />
            <i className="devicon-sass-original" />
            <i className="devicon-react-original-wordmark" />
            <i className="devicon-nodejs-plain-wordmark" />
            <i className="devicon-express-original-wordmark" />
            <i className="devicon-mongodb-plain-wordmark" />
            <i className="devicon-postgresql-plain-wordmark" />
            <i className="devicon-sequelize-plain-wordmark" />
            <i className="devicon-mocha-plain" />
            <i className="devicon-git-plain-wordmark" />
            <i className="devicon-github-plain-wordmark" />
            <i className="devicon-heroku-original-wordmark" />
          </div>
        </Element>

        <Element name="projects" className="element projects-section">
          <div className="projects-wrapper">
            <div className="projects-card">
              <div className="projects-card-left-text">
                <h1>Mystery Word</h1>
                <p>
                  This is a hangman-like game, try and guess a word
                  letter-by-letter. It pulls from a text file to find words.
                  There are three difficulty settings that alter the length of
                  the word the game pulls at random when you begin. This project
                  was built with Node.js and Express for back end, using
                  Mustache templating.
                </p>
                <div className="project-links-wrapper">
                  <a
                    className="project-link"
                    href="https://mysteryword.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="project-link"
                    href="https://github.com/Garmhausen/MysteryWord"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="project-image-wrapper mw-image" />
            </div>
            <div className="projects-card">
              <div className="projects-card-left-text">
                <h1>Soundcloud Search</h1>
                <p>
                  Search Souncloud using their API. This was build using
                  JavaScript, HTML and CSS to give a fundamental example of
                  interacting with an API and displaying the results
                  dynamically.
                </p>
                <div className="project-links-wrapper">
                  <a
                    className="project-link"
                    href="https://garmhausen.github.io/Soundcloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="project-link"
                    href="https://github.com/Garmhausen/Soundcloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="project-image-wrapper sc-image" />
            </div>
            <div className="projects-card">
              <div className="projects-card-left-text">
                <h1>Chessboard</h1>
                <p>
                  This project animates through the first several moves of the
                  Catalan opening in a simple way using only Javascript, HTML
                  and CSS. The user can play/pause the animation and step
                  backward, forward and skip to the beginning or end.
                </p>
                <div className="project-links-wrapper">
                  <a
                    className="project-link"
                    href="https://garmhausen.github.io/Chessboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="project-link"
                    href="https://github.com/Garmhausen/Chessboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
              <div className="project-image-wrapper cb-image" />
            </div>
          </div>
        </Element>

        <Element name="contact" className="element contact-section">
          <div className="contact-wrapper">
            <div className="contact-text">
              <div className="contact-title">Contact</div>
              <i className="fa fa-envelope-square" aria-hidden="true" />
              <span>
                <a href="mailto:robertgarmhausen@gmail.com">
                  robertgarmhausen@gmail.com
                </a>
              </span>
              <i className="fa fa-linkedin-square" aria-hidden="true" />
              <span>
                <a
                  href="https://www.linkedin.com/in/robertgarmhausen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/robertgarmhausen
                </a>
              </span>
              <i className="fa fa-github-square" aria-hidden="true" />
              <span>
                <a
                  href="https://github.com/Garmhausen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Garmhausen
                </a>
              </span>
              <i className="fa fa-twitter-square" aria-hidden="true" />
              <span>
                <a
                  href="https://twitter.com/garminthehausen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @garminthehausen
                </a>
              </span>
              <i className="fa fa-square" aria-hidden="true" />
              <span>
                <a
                  href={process.env.PUBLIC_URL + '/Robert_Garmhausen.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  download résumé
                </a>
              </span>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById('root'));
