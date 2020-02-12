import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Constanza Castro</h2>
            <img
              src="https://i.ibb.co/P4xfzwz/conita-perfil-1.png"
              alt="avatar"
              style={{height: '250px'}}
               />
            
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Roboto'}}>
                    <i className="fa fa-phone" aria-hidden="true"/>
                         +569 8735 2924
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Roboto'}}>
                    <i className="fa fa-paper-plane" aria-hidden="true"/> 
                        
                    <a href="https://i.ibb.co/NSwzYXV/resume.jpg">curriculum vitae</a>
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Roboto'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                        constanzapaz.castro.lopez@gmail.com
                  </ListItemContent>
                </ListItem>

          
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
