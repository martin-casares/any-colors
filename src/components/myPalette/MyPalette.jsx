import './myPalette.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import tinycolor from 'tinycolor2';
import { FaRegCopy } from 'react-icons/fa6';

import React from 'react';

export const MyPalette = ({ colors }) => {
	return (
		<div className="palette-container">
			<div className="accordion">
				{colors.map((color, index) => (
					<CopyToClipboard text={color} key={index}>
						<div
							className="accordion-item hide"
							style={{
								backgroundColor: color,
								width: '100%',
								height: '35px',
							}}
						>
							<div className="color-code-content">
								<FaRegCopy className="icon" size={20} />
								<span className="color-code">{color}</span>
								<span className="color-code">{tinycolor(color).toRgbString()}</span>
							</div>
						</div>
					</CopyToClipboard>
				))}
			</div>

			{/* 	<ul className="palette-wrapper">
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
			</ul> */}
		</div>
	);
};
