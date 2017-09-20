import React from 'react';
import VideoListItem from './VideoListItem';
import PropTypes from 'prop-types';

const VideoList = ({ videos, onVideoClick }) => {
	const videoItems = videos.map((video) => {
		return <VideoListItem 
				onVideoClick={onVideoClick}
				key={video.etag} 
				video={video} />
	});

	return (
		<ul>
			{videoItems}
		</ul>
	);
};

VideoList.propTypes = {
	videos: PropTypes.array.isRequired,
	onVideoClick: PropTypes.func.isRequired
};

export default VideoList;