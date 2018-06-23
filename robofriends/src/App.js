import React, {Component} from 'react';
import {robots} from './robots';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from'./Scroll';

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        this.setState({robots: robots});
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    
    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>    
        );   
    };
};

export default App;