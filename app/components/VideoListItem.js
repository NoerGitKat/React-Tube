import React from 'react';

const VideoListItem = ({ video }) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li>
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