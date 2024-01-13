import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import tinycolor from 'tinycolor2';

export const MyPiker = ({ mainColor, setMainColor, setColors }) => {
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
	}, [setMainColor]);

	const handleColorChange = (color) => {
		setMainColor(color.hex);
		generateColors(color.hex);
	};
	return (
		<div>
			<SketchPicker color={mainColor} onChangeComplete={handleColorChange} />
		</div>
	);
};
