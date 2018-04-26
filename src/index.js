import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import _ from 'lodash'; //import startement for lodash plugin

const API_KEY = 'AIzaSyDzALa7iHHqN01BHp0Hgj80Ki5HQ-ygmYo';


class App extends Component {

	constructor(props){

		super(props);

		this.state = {
			videos:[],
			selectedVideo : null
		};

		this.videoSearch('apache rtr 200 4v');

	}

	videoSearch(term){
		YTSearch({key: API_KEY, term:term },(videos) => {
		this.setState({
			videos: videos,
			selectedVideo: videos[0]
		});
		});
	}

	render() {
		const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);
		return(
			<div>
				<SearchBar onSearchTermChange = { videoSearch } />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		);
	}

}

ReactDOM.render(<App />,document.querySelector('.container'));
