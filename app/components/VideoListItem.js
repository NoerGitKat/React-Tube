import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, onVideoClick }) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
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

VideoListItem.propTypes = {
	video: PropTypes.object.isRequired,
	onVideoClick: PropTypes.func.isRequired
};

export default VideoListItem;