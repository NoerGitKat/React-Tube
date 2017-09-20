import React from 'react';
import VideoListItem from './VideoListItem';

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

export default VideoList;