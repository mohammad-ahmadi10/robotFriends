import React, { Component } from 'react';

import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App.css'
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';

class App extends Component{
    constructor(){
        super ()
        this.state = {
            robots : [],
            searchField: ''
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
    }


    onSearchChange=(event) =>{
        this.setState({searchField: event.target.value})
    }


    render(){
        console.log(this.state.robots)
        const robotfilters = this.state.robots.filter(robot =>
                robot.body.toLowerCase().includes(this.state.searchField.toLowerCase())
            )
            if (this.state.robots.length < 0){
                return <h1>Loading</h1>        
            }else{
                return (
                    <div className="tc">
                        <h1 className="f2">robotfriends</h1>
                        <SearchBox onSearchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={robotfilters}/>        
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                )
            }
        
    }
   


}

export default App