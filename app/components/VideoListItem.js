import React from 'react';

const VideoListItem = ({ video, onVideoClick }) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		{
			// passed done this function from App to change state
		}
		<li onClick={() => onVideoClick(video)}>
			<div>
				<img src={imageUrl} alt=""/>
			</div>
			<div>
				<h3>{video.snippet.title}</h3>
			</div>
		</li>
	)
};

export default VideoListItem;