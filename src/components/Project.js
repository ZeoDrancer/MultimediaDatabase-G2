import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
//import from movies
import movieforest from "../Assets/img/movies/forestgump.jpg"
import movieHarry from "../Assets/img/movies/HarryPotter.jpg"
import moviesaw from "../Assets/img/movies/sawsage.jpeg"
import movienigthmare from "../Assets/img/movies/nithmare.png"
import moviepursuit from "../Assets/img/movies/pursuithappyness.jpg"
import moviesherk from "../Assets/img/movies/Sherk.jpg"
//import from music
import musicbruno from "../Assets/img/music/brunomars.jpg";
import musicedsheran from "../Assets/img/music/edsheeran.jpg";
import musicqueen from "../Assets/img/music/queen.jpg";
import musicscorpion from "../Assets/img/music/Scorpion.jpg";
import musicimaginedragon from "../Assets/img/music/imaginedragons.jpg";
import musicfugges from "../Assets/img/music/fugges.jpg";
//import from series
import seriethebigbangteory from "../Assets/img/series/thebigbang.jpg";
import seriethesimpsons from "../Assets/img/series/thesimpsons.jpg";
import serieswat from "../Assets/img/series/swat.jpg";
import serieamerican from "../Assets/img/series/american.jpg";
import seriegenius from "../Assets/img/series/Genius.jpg";
import serieanatomy from "../Assets/img/series/anatomy.jpeg";

import colorSharp2 from "../Assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Movies = [
    {
      title: "Saw",
      genero: "Terror ",
      artist:"Director: James Wan",
      imgUrl: moviesaw,
    },
    {
      title: "Harry potter",
      genero: "Fantasy",
      artist:"Director: Chris Columbus and Alfonso Cuarón ",
      imgUrl: movieHarry,
    },
    {
      title: "Shrek",
      genero: "Animated",
      artist:"Director: Andrew Adamson and Vicky Jenson",
      imgUrl: moviesherk,
    },
    {
      title: "Forrest Gump",
      genero: "Romance and drama",
      artist:"Director: Robert Zemeckis",
      imgUrl: movieforest,
    },
    {
      title: "The Pursuit of Happyness",
      genero: "Drama",
      artist:"Director: 	Gabriele Muccino",
      imgUrl: moviepursuit,
    },
    {
      title: "The Nightmare Before Christmas",
      genero: "Animated",
      artist:"Director: Tim Burton",
      imgUrl: movienigthmare,
    },
   
  ];

  const Music = [
    {
      title: "24K Magic",
      genero: "Pop, R&B",
      artist:"Bruno Mars",
      imgUrl: musicbruno,
    },
    {
      title: "(Equals)",
      genero: "Pop, R&B, New Wave.",
      artist:"Ed Sheeran",
      imgUrl: musicedsheran,
    },
    {
      title: "At night of the opera ",
      genero: "Hard rock, ópera rock",
      artist:"Queen",
      imgUrl: musicqueen,
    },
    {
      title: "Scorpion",
      genero: "Hip Hop, Trap, Pop-rap",
      artist:"Drake ",
      imgUrl: musicscorpion,
    },
    {
      title: "The score",
      genero: "Rap alternativo, Hip Hop ",
      artist:"Fugges",
      imgUrl: musicfugges,
    },
    {
      title: "Origins",
      genero: "Pop Rock",
      artist:"Imagine Dragons",
      imgUrl: musicimaginedragon,
    },
  ];

  const Series = [
    {
      title: "Grey's Anatomy ",
      genero: "Dramatic",
      artist:" Created: Shonda Rhimes",
      imgUrl: serieanatomy,
    },
    {
      title: "American Horror stories ",
      genero: "Horror",
      artist:" Created: Ryan Murphy",
      imgUrl: serieamerican,
    },
    {
      title: "Genius",
      genero: "Bibliography",
      artist:" Created: Noah Pink and Ken Biller",
      imgUrl: seriegenius,
    },
    {
      title: "The big Bang Theory",
      genero: "Comedy",
      artist:" Created: Steven Molaro and Mike Collier ",
      imgUrl: seriethebigbangteory,
    },
    {
      title: "S.W.A.T ",
      genero: "Action",
      artist:" Created: Aaron Rahsaan",
      imgUrl: serieswat,
    },
    {
      title: "Los Simpsons",
      genero: "Animated",
      artist:" Created: Matt Groening",
      imgUrl: seriethesimpsons,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="front-weight-bold" >Recommendations</h2>
                <h2 className="front-weight-bold" >from the most watched</h2>
                <p className="front-weight-bold">In this panel you can observe our personal recommendations, so that you can nurture your skills is a second language like English</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="front-weight-bold" >Movies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="front-weight-bold" >Music</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="front-weight-bold" >Series</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Movies.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                            Music.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          Series.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}