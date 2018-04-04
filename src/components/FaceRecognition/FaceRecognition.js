import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl, boxScoreImage }) => {
	//console.log('check', imageUrl);
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' />
				<div 
					className='bounding-box' 
					style={{
							top: boxScoreImage.topRow,
							left: boxScoreImage.leftCol,
							right: boxScoreImage.rightCol,
							bottom: boxScoreImage.bottomRow
						}}>
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;