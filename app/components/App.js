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
			videos: [],
			selectedVideo: null		//changes when user clicks videolistitem
		};

		YTSearch({key: API_KEY, term:'evolution'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		});
	};

	render() {
		return (
			<div className='app-container'>
				<SearchBar />
				<VideoPlayer video={this.state.selectedVideo}/>
				<VideoList 
				onVideoClick={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		);
	};
};

export default App;