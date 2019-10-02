import React from 'react';
import Icons from '../../Components/Icons/icons';
import image_ph from './Assets/img_ph.jpg';
import { IconButton } from '../../Components/Button/IconButton';

interface ImageBoxProps {
	source: string;
	index: number;
	onRemove: (x: number) => void;
}

export const ImageBox = ({ source, onRemove, index }: ImageBoxProps) => {
	return (
		<figure className="bank__imagebox">
			<IconButton
				className="bank__imagebox__remove-btn"
				icon={Icons.close}
				onClick={() => onRemove(index)}
			></IconButton>
			<div className="bank__imagebox__shadow"></div>
			<img
				alt=""
				className="bank__imagebox__image"
				onError={(e: any) => {
					if (e.target.src !== image_ph) {
						e.target.onerror = null;
						e.target.src = image_ph;
					}
				}}
				src={source}
			></img>
		</figure>
	);
};
