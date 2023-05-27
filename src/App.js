import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Button } from 'react-bootstrap'
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header'
import Home from './pages/Home';
import Academics from './pages/Academics';
import Examination from './pages/Examination';
import Committee from './pages/Committee';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Feedback from './pages/Feedback';
import Achievements from './pages/Achievements';
import ScrollToTop from './ScrollToTop';
import OnlineAdmission from './pages/OnlineAdmission';
import Placements from './pages/Placements';
import Alumni from './pages/Alumni';
import Research from './pages/Research';
import Iqac from './pages/Iqac';
import Technofest from './pages/Technofest';
import Conference from './pages/Conference';
import Nss from './pages/Nss';
import NewsAndEvents from './pages/NewsAndEvents';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleRightClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <ScrollToTop></ScrollToTop>
          <Switch>
            <Route path='/about-us/infrastructure'>
              <AboutUs path="infrastructure" onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/academics'>
              <Academics onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/admission'>
              <OnlineAdmission onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/examination'>
              <Examination onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/committee'>
              <Committee onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/contact-us'>
              <ContactUs onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/about-us'>
              <AboutUs onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/feedback'>
              <Feedback onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/achievements'>
              <Achievements onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/placements'>
              <Placements onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/alumni'>
              <Alumni onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/research'>
              <Research onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/iqac'>
              <Iqac onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/technofest'>
              <Technofest onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/conference'>
              <Conference onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/nss'>
              <Nss onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/newsevents'>
              <NewsAndEvents onContextMenu={this.handleRightClick}/>
            </Route>
            <Route path='/'>
              <Home onContextMenu={this.handleRightClick}/>
            </Route>
          </Switch>
        </Router>
        <Footer/>

        <a href="https://forms.gle/4kpZjuEtnUwNAMjG6" target="_blank">
            <Button variant="success" size="lg" className="enqButton">
                <span class="p-2"><i class="fa fa-envelope"></i></span>Enquire Now
            </Button>
        </a>

      </div>
    );
  }
}

export default App;
