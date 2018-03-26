import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDzALa7iHHqN01BHp0Hgj80Ki5HQ-ygmYo';

const App = () => {

	return ( 
	<div>
		<SearchBar />
	</div>
	);
}

ReactDOM.render(<App />,document.querySelector('.container'));