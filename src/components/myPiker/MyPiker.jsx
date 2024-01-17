import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import tinycolor from 'tinycolor2';
import './myPiker.css';
import { MyPalette } from '../myPalette/MyPalette';
import CopyToClipboard from 'react-copy-to-clipboard';

export const MyPiker = ({ mainColor, setMainColor, colors, setColors }) => {
	const generateColors = (mainColor) => {
		const mainTinyColor = tinycolor(mainColor);

		const lightColor = mainTinyColor.lighten(13).toString();
		const lightColor1 = mainTinyColor.lighten(23).toString();
		const desaturateColor = mainTinyColor.desaturate(23).toString();
		const brightColor = mainTinyColor.brighten(16).toString();
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
	}, [mainColor, colors]);

	const handleColorChange = (color) => {
		setMainColor(color.hex);
		generateColors(color.hex);
	};
	return (
		<div className="piker-container">
			<div className="input-color-code">
				<input
					type="text"
					placeholder="Color Code"
					onChange={(e) => setMainColor(e.target.value)}
				/>
			</div>
			<div className="piker-content">
				<div className="piker">
					<SketchPicker color={mainColor} onChangeComplete={handleColorChange} />
				</div>
				<div className="palette">
					<MyPalette colors={colors} />
				</div>

				<div className="code">
					<h1>style.css</h1>
					<div>
						<p>:root </p>
						{colors.map((color, index) => (
							<p key={index}>
								<span>
									--color
									{index}:{' '}
								</span>{' '}
								{color};
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
