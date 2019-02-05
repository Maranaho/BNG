import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Events from './Events/Events';
import Courses from './Courses/Courses';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
class Main extends Component {

  render(){
    return (
      <main>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Home} />
        </Switch>
        <Footer/>
      </main>
    )
  }
}



export default Main;
