import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list.js';
const API_KEY = 'AIzaSyDzALa7iHHqN01BHp0Hgj80Ki5HQ-ygmYo';


class App extends Component {

	constructor(props){

		super(props);

		this.state = {videos:[]};

		YTSearch({key: API_KEY, term:'dominar400'},(videos) => {
		this.setState({videos});
		// a.k.a this.setState({videos: videos});
		});

	}

	render() {
		return( 
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
	
}	

ReactDOM.render(<App />,document.querySelector('.container'));