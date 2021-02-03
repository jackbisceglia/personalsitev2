import React, { useState } from "react"
import IconBar from '../components/iconBar';
import Interest from '../components/interest';
import Project from '../components/project';
import webIcon from '../images/cms.svg';
import sweIcon from '../images/dashboard.svg';

import sortify from '../images/ProjectImgs/sortifymock.png';
// import trello from '';
// import poke from '';
import cp from '../images/ProjectImgs/cp.png';
import ss from '../images/ProjectImgs/SSMU.png';
import trello from '../images/ProjectImgs/tcmock.png';
import poke from '../images/ProjectImgs/pokemock.png';
import battls from '../images/ProjectImgs/battls.png';

import '../global.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* Home Section */}
    <div className="break"></div>
    <section id="home">
      <h1>Jack Bisceglia</h1>
      <p>
        A Computer Science and Math Student at UMass Amherst<br/>
        MLH Fellow • Spring 2021 • Explorer Path
      </p>
      <p></p>
      <IconBar />
    </section>

    {/* About Section */}
    <section id="about">
      <h1 className="welcome" style={{marginTop: '10px', marginBottom: '0'}}>Welcome!</h1>
      <div className="introduction">
        <div className="photo"></div>
        <p>Hi, my name is Jack! I'm a Sophomore at UMass Amherst majoring in Computer Science and Mathematics, and I'm currently seeking Software Engineering and Full Stack Internship positions. I'm very passionate about my school work and software, and in my free time I love watching basketball and making music.</p>
      </div>
      <div className="breakline"></div>

      <h3 className="area-of-interest">My Interests...</h3>
      <div className="interests">
        <Interest 
          title={'Web Development'}
          icon={webIcon}
          specs={[
          {
            name : 'Front-End',
            rest : 'React, Typescript, Javascript, Svelte'
          },
          {
            name : 'Back-End',
            rest : 'Express, Spring Boot, Flask'
          },
          {
            name : 'Databases',
            rest : 'PostgreSQL, AWS RDS'
          }

        ]}/>

        <Interest 
          title={'Software Engineering'} 
          icon={sweIcon}
          specs={[
          {
            name : 'Langauges',
            rest : 'Java, Python, Node.js'
          },
          {
            name : 'Tools',
            rest : 'Git, PostgreSQL'
          },
          {
            name : 'Concepts',
            rest : 'Data Structures, OOP'
          }
        ]}/>
      </div>
      
    </section>

    {/* Projects Section */}
    <section id="projects">
      <h1 className="title">My Projects</h1>
      <h4>Programming projects to work on my technical skills</h4>
      <div className="proj-wrapper">
        <Project
          title={'Battls'}
          icon={battls}
          description={'A full-stack social polling app built in Typescript React, Express, and PSQL'}
          url={"https://github.com/jackbisceglia/battls"}
          livesite={"#projects"}
          blank={true}
        />
        <Project 
          title={'Trello Clone'}
          icon={trello}
          description={'A full-stack clone of Trello in React, Express, Node, and PostgreSQL'}
          url={"https://github.com/jackbisceglia/trello-clone"}
          livesite={"https://trello-clone-jackb.netlify.app/"}
          blank={true}
        />
        <Project
          title={'Sneaker Swipe'}
          icon={ss}
          description={'A React & Spring Boot app built to allow users to vote on shoes'}
          url={"https://github.com/jackbisceglia/sneaker-swipe"}
          livesite={"#projects"}
          blank={false}
        />
        <Project 
          title={'Sort-ify'}
          icon={sortify}
          description={'A static site written in Javascript that visualizes various sorting algorithms'}
          url={"https://github.com/jackbisceglia/Sort-ify"}
          livesite={"https://jackbisceglia.github.io/Sort-ify/"}
          blank={true}
        />
        <Project
          title={'Chess Dashboard'}
          icon={cp}
          description={"A Profile dashboard for Chess.com built in Svelte and Chess.com's API"}
          url={"https://github.com/jackbisceglia/chess.comProfiler"}
          livesite={"https://chessdashboard.netlify.app/"}
          blank={true}
        />
        <Project
          title={'PokeQuick'}
          icon={poke}
          description={'A React App to display Pokemon data pulled from the PokeAPI'}
          url={"https://github.com/jackbisceglia/ReactPokemonApp"}
          livesite={"https://jackbisceglia.github.io/ReactPokemonApp/"}
          blank={true}
        />
      </div>
    </section>
    
    {/* Contact Section */}
    <section id="contact">
      <h1 className="title2">Let's Get in Touch!</h1>
      <div className="contact-links">
        <h4><a href="mailto:jackbisceglia2000@gmail.com" target="_blank">Send an Email</a><br/>jackbisceglia2000@gmail.com</h4>
        <h4><a href="https://www.linkedin.com/in/jackbisceglia/" target="_blank">Connect on LinkedIn</a><br/>in/jackbisceglia</h4>
        <h4><a href="https://github.com/jackbisceglia" target="_blank">Checkout my Github</a><br/>jackbisceglia</h4>
      </div>
    </section>
  </Layout>
)

export default IndexPage
