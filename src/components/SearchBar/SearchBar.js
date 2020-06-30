import React, { Component } from "react";
import "./SearchBar.css";

sortByOptions = {
    "Best Match" : "best_match",
    "Highest Rated" : "rating",
    "Most Reviwed" : "review_count",

}

class SearchBar extends Component {
    renderSortByOptions() {
        return (
            Object.keys(sortByOptions).map(sortByOption => {
                let sortByOptionValue = sortByOptions[sortByOption]
                return <li key = {sortByOptionValue}>{sortByOption}</li>;
            })
        );
    }
    
    render(){
        return (
            <div className= "SearchBar">
                <div className = "SearchBar-sort_options">
                    <ul>
                        {renderSortByOptions()}
                    </ul>
                </div>
                <div className = "SearchBar-fields">
                    <input placeholder = "Search Business" />
                    <input placeholder = "Where?" />
                </div>
                <div className = "SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}