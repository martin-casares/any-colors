import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import tinycolor from 'tinycolor2';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

import './colorGenerator.css';

const ColorGenerator = () => {
	const [mainColor, setMainColor] = useState('#3498db');
	const [colors, setColors] = useState([]);
	const [imageSrc, setImageSrc] = useState(null);

	const generateColors = (mainColor) => {
		const mainTinyColor = tinycolor(mainColor);

		const lightColor = mainTinyColor.lighten(13).toString();
		const lightColor1 = mainTinyColor.lighten(23).toString();
		const desaturateColor = mainTinyColor.desaturate(23).toString();
		const brightColor = mainTinyColor.brighten(26).toString();
		const darkColor = mainTinyColor.darken(30).toString();

		setColors([
			mainColor,
			lightColor,
			lightColor1,
			brightColor,
			desaturateColor,
			darkColor,
		]);
	};

	useEffect(() => {
		generateColors(mainColor);
	}, []);

	const handleColorChange = (color) => {
		setMainColor(color.hex);
		generateColors(color.hex);
	};

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

	return (
		<div className="container">
			<div className="select-color">
				<div className="left">
					<ChromePicker color={mainColor} onChange={handleColorChange} />
				</div>
				<div className="right">
					{imageSrc && (
						<div>
							<img src={imageSrc} alt="Imagen Cargada" style={{ maxWidth: '90%' }} />
						</div>
					)}
					<input type="file" accept="image/*" onChange={handleImageUpload} />
				</div>
			</div>

			<ul className="palette-wrapper">
				{colors.map((color, index) => (
					<li key={index}>
						<CopyToClipboard text={color}>
							<div
								className="color btn-copy"
								style={{
									backgroundColor: color,
									width: '100%',
									height: '80px',
								}}
							>
								<div className="hide">Click to copy</div>
							</div>
						</CopyToClipboard>

						<div className="color-code">{color}</div>
						<div className="color-code">{tinycolor(color).toRgbString()}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ColorGenerator;
