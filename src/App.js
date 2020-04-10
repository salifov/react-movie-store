import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Movies from './components/movies';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import Customers from './components/customer';
import Navbar from './components/navbar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import './App.css';

function App() {
  return ( 
    <React.Fragment>
      <Navbar />
      <main className = "container" >
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;