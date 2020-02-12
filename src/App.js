import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="big-div">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Mi Portafolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resumen</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/contact">Contacto</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Mi Portafolio</Link>}>
            <Navigation>
              <Link to="/resume">Resumen</Link>
              <Link to="/projects">Proyectos</Link>
              <Link to="/contact">Contacto</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
