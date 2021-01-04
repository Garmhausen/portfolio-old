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
                  href="https://garmhausen.github.io"
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
                  <a
                    href="https://twitter.com/garminthehausen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter-square" aria-hidden="true" />
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
                and <a href="https://open.spotify.com/artist/6rabW8GTeJd5qhXXddQypT">making music</a>.
              </p>
            </div>
          </div>
          <div className="skills-grid">
            <i className="devicon-html5-plain-wordmark" />
            <i className="devicon-css3-plain-wordmark" />
            <i className="devicon-javascript-plain" />
            <i className="devicon-typescript-plain" />
            <i className="devicon-csharp-plain" />
            <i className="devicon-sass-original" />
            <i className="devicon-less-plain-wordmark" />
            <i className="devicon-vuejs-line-wordmark" />
            <i className="devicon-angularjs-plain" />
            <i className="devicon-react-original-wordmark" />
            <i className="devicon-nodejs-plain-wordmark" />
            <i className="devicon-express-original-wordmark" />
            <i className="devicon-mongodb-plain-wordmark" />
            <i className="devicon-postgresql-plain-wordmark" />
            <i className="devicon-mysql-plain-wordmark" />
            <i className="devicon-jasmine-plain-wordmark" />
            <i className="devicon-docker-plain-wordmark" />
            <i className="devicon-git-plain-wordmark" />
            <i className="devicon-github-plain-wordmark" />
            <i className="devicon-dot-net-plain-wordmark" />
            <i className="devicon-gulp-plain" />
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
                  was built with Angular and ngrx/store, using a back-end built
                  with Node.js using Express.
                </p>
                <div className="project-links-wrapper">
                  <a
                    className="project-link"
                    href = "https://mystery-word-ng5.firebaseapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="project-link"
                    href = "https://github.com/Garmhausen/mystery-word"
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
                <h1>CA-API</h1>
                <p>
                  This was an excercise in handrolling authentication using
                  node, express, and prisma with graphql, but has grown into the beginning
                  of a larger app. It serves here as useful example of
                  file structure organization, backend architecture, and code cleanliness.
                  It is not currently deployed.
                </p>
                <div className="project-links-wrapper">
                  <a
                    className="project-link"
                    href="https://github.com/Garmhausen/ca-api"
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
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <span>robertgarmhausen@gmail.com</span>
              <i className="fa fa-linkedin" aria-hidden="true" />
              <span>
                <a
                  href="https://www.linkedin.com/in/robertgarmhausen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/robertgarmhausen
                </a>
              </span>
              <i className="fa fa-github" aria-hidden="true" />
              <span>
                <a
                  href="https://github.com/Garmhausen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Garmhausen
                </a>
              </span>
              <i className="fa fa-twitter" aria-hidden="true" />
              <span>
                <a
                  href="https://twitter.com/garminthehausen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @garminthehausen
                </a>
              </span>
              <i className="fa fa-file-pdf-o" aria-hidden="true" />
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
