import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/0qXCDZV/Captura-Tictactoe.png) center / cover'}} ></CardTitle>
            <CardText>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </CardText>
            <CardActions border>
              
            </CardActions>
            
          </Card>

         
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
            <CardText>
             Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </CardText>
            <CardActions border>
              
            </CardActions>
            
          </Card>
          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
            <CardText>
             Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </CardText>
            <CardActions border>
              
            </CardActions>
            
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '900', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://i.ibb.co/vX7S8n3/Captura-Charmander.png) center / cover'}} ></CardTitle>
            <CardText>
             Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </CardText>
            <CardActions border>
              
            </CardActions>
            
          </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Tic Tac Toe</Tab>
          <Tab>Burger Queen</Tab>
          <Tab>Cultívate</Tab>
          <Tab>Pokemón Go + </Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
