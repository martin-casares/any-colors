import React, { createContext, useState, useContext } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
	const [mainColor, setMainColor] = useState('#2A2C55');
	const [colors, setColors] = useState([]);

	return (
		<ColorContext.Provider value={{ mainColor, setMainColor, colors, setColors }}>
			{children}
		</ColorContext.Provider>
	);
};

export const useColorContext = () => useContext(ColorContext);
