import React, { Component } from 'react';
import './App.css';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {businesses: []};
    this.searchYelp= this.searchYelp.bind(this);
  }
  searchYelp(term,location,sortby) {
    Yelp.search(term, location, sortby).then((businesses)=> {this.setState({businesses: businesses})})

  }
  render(){
    return (
      <div className = "App">
        <SearchBar searchYelp = {this.searchYelp}/>
        <BusinessList businesses = {this.state.businesses}/>
      </div>
  );
}
}

export default App;
