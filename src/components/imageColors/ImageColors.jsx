import React, { useState, useEffect } from 'react';
import tinycolor from 'tinycolor2';
import ColorThief, { Palette } from 'color-thief-react';
import './imageColors.css';
import { MyPalette } from '../myPalette/MyPalette';

const Loading = () => <div>Loading...</div>;

export const ImageColors = ({ setMainColor }) => {
	const [imageSrc, setImageSrc] = useState(
		'https://live.staticflickr.com/65535/50237066832_72c7290c5c_c.jpg'
	);

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImageSrc(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const getMostFrequentColor = (colors) => {
		const colorCountMap = {};
		let maxColor = null;
		let maxCount = 0;

		colors.forEach((color) => {
			const hexColor = tinycolor(color).toHexString();
			colorCountMap[hexColor] = (colorCountMap[hexColor] || 0) + 1;

			if (colorCountMap[hexColor] > maxCount) {
				maxCount = colorCountMap[hexColor];
				maxColor = hexColor;
			}
		});

		return maxColor;
	};
	return (
		<div className="image-colors-container">
			<div className="imgUpload">
				<img src={imageSrc} alt="Imagen Cargada" style={{ width: '50%' }} />
				<input type="file" accept="image/*" onChange={handleImageUpload} />

				{imageSrc && (
					<ColorThief src={imageSrc} format="hex" crossOrigin="anonymous">
						{({ data, loading }) => {
							if (loading) return <Loading />;
							return (
								<div>
									Predominant color: <strong>{data}</strong>
								</div>
							);
						}}
					</ColorThief>
				)}
			</div>
			<div className="pelette">
				<Palette src={imageSrc} crossOrigin="anonymous" format="hex" colorCount={6}>
					{({ data, loading }) => {
						if (loading) return <Loading />;
						return (
							<div>
								<MyPalette colors={data} />
							</div>
						);
					}}
				</Palette>
			</div>
		</div>
	);
};