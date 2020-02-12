import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://i.ibb.co/P4xfzwz/conita-perfil-1.png"
                alt="avatar"
                style={{height: '250px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Constanza Castro</h2>
            <h4 style={{color: 'grey'}}>Front end developer</h4>
            <hr style={{borderTop: '3px solid #243545', width: '50%'}}/>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum .</p>
            <hr style={{borderTop: '3px solid #243545', width: '50%'}}/>
            <h5>Dirección</h5>
            <p>Portugal 48, torre 6, dpto 195, Santiago</p>
            <h5>Telefono</h5>
            <p>+569 8735 2924</p>
            <h5>Email</h5>
            <p>constanzapaz.castro.lopez@gmail.com</p>
            <h5>Web</h5>
            <p> </p>
            <hr style={{borderTop: '3px solid #243545', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Educación</h2>


            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Laboratoria"
              schoolDescription="Front end Developer"
               />

               <Education
                 startYear={2011}
                 endYear={2014}
                 schoolName="Universidad Diego Portales"
                 schoolDescription="Pedagogía en Educación General Básica"
                  />

                 <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="Universidad Andrés Bello"
                 schoolDescription="Kinesiología"
                  />
                <hr style={{borderTop: '3px solid #ffffff'}} />

              <h2>Experiencia</h2>

            <Experience
              startYear={2020}
              endYear={2018}
              jobName="La Casa de Masa"
              jobDescription="La Casa de Masa nace en una etapa de plena experimentación de habilidades, crecimiento y viaje personal. Las funciones principales yacen en administración, contabilidad, marketing digital, transporte y distibución 
              "
              />

              
              <hr style={{borderTop: '3px solid #ffffff'}} />
              <h2>Habilidades</h2>
              <h3>Javascript</h3>
              <h3>HTML/CSS</h3>
              <h3>Firebase</h3>
              <h3>React.js</h3>
              


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;