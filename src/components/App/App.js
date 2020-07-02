import React, { Component } from 'react';
import './App.css';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

let business = {  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
}


const businesses = [business,business,business,business,business,business]

class App extends Component {
  searchYelp(term,location,sortby) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortby}`)

  }
  render(){
    return (
      <div className = "App">
        <SearchBar searchYelp = {this.searchYelp}/>
        <BusinessList businesses = {businesses}/>
      </div>
  );
}
}

export default App;
