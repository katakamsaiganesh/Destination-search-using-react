import { Component } from "react";
import DestinationItem from "../DestinationItem";
import './index.css' 


class DestinationSearch extends Component{
    state={searchInput:''}

    change=(event)=>{
        this.setState({searchInput:event.target.value})
    }

    render(){
        const {searchInput}=this.state 
        const {destinationsList}=this.props  

        const results = destinationsList.filter(eachItem =>
            eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
          )

        return(
            <div className="main-bg">
                <h1>Destination Search</h1>
                <div>
                <input type="search" placeholder="search" onChange={this.change} value={searchInput}/>
                <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="img"
          />
                </div>  

                <ul className="sa">
          {results.map(each => (
            <DestinationItem key={each.id} Destinationdetails={each} />
          ))}
        </ul>
            </div>
        )
    }
} 

export default DestinationSearch