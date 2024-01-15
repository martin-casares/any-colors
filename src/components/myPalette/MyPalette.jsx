import './myPalette.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import tinycolor from 'tinycolor2';

import React from 'react';

export const MyPalette = ({ colors }) => {
	return (
		<div className="palette-container">
			<ul className="palette-wrapper">
				{colors.map((color, index) => (
					<li key={index}>
						<CopyToClipboard text={color}>
							<div
								className="color btn-copy"
								style={{
									backgroundColor: color,
									width: '100%',
									height: '50px',
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
