import {Audio, Img, useCurrentFrame} from 'remotion';
import song from '../static/audio/zakir.mp3';
import {getLetterByNumber} from './utils';

export const Resort = () => {
	const frame = useCurrentFrame();
	const images = require('../static/images/' +
		getLetterByNumber(frame) +
		'.jpeg');

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
			}}
		>
			<img style={{width: '100%', height: '100%'}} src={images} />
			<Audio src={song} startFrom={50} />
		</div>
	);
};
