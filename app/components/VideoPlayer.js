import React from 'react';

const VideoPlayer = ({ video }) => {
	//if no video will only return this message
	if(!video) {
		return <div>Loading...</div>
	}

	//if video return this
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div>
			<iframe src={url}></iframe>
			<div className="details">
				<h3>{video.snippet.title}</h3>
				<h3>{video.snippet.description}</h3>
			</div>
		</div>
	)
};

export default VideoPlayer;