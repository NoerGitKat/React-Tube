import React from 'react';
import YTSearch from 'youtube-api-search';

//YouTube API Key
const API_KEY = 'AIzaSyDF4yiMXcdk5EWM2kjlmsO5Ja6qGLj8qGY';

//load in components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: []
		};

		YTSearch({key: API_KEY, term:'evolution'}, (videos) => {
			this.setState({
				videos: videos
			})
		});
	};

	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	};
};

export default App;