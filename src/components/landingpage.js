import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.ibb.co/P4xfzwz/conita-perfil-1.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Constanza Castro López</h1>
              <h2>Front end Developer</h2>

          <p>HTML/CSS  | JavaScript | React.js | React Native | Firebase | Github | Figma</p>

        <div className="social-links">

          /* LinkedIn */
          <a href="https://www.linkedin.com/in/constanzacastrolopez/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>


          /* Github */
          <a href="https://github.com/ConstanzaCastro" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
