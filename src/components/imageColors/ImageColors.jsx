import React, { useState, useEffect } from 'react';
import ColorThief, { Palette } from 'color-thief-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useColorContext } from '../../ColorContext';
import './imageColors.css';
import { MyPalette } from '../myPalette/MyPalette';

const Loading = () => <div>Loading...</div>;

export const ImageColors = () => {
	const { mainColor, colors, setMainColor, setColors } = useColorContext();

	const [colorsImage, setColorsImage] = useState([]);
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

	return (
		<>
			<div className="image-colors-container">
				<div className="image-upload">
					<div>
						<img src={imageSrc} alt="Imagen Cargada" style={{ width: '50%' }} />
					</div>
					<input type="file" accept="image/*" onChange={handleImageUpload} />

					{imageSrc && (
						<ColorThief src={imageSrc} format="hex" crossOrigin="anonymous">
							{({ data, loading }) => {
								if (loading) return <Loading />;

								return (
									<>
										<div
											className="predominant-color"
											style={{
												backgroundColor: data,
												/* 	width: '50%',
											height: '50px', */
											}}
										>
											<CopyToClipboard text={data}>
												<p className="predominant-code">
													Predominant color:
													<strong>{data}</strong>
												</p>
											</CopyToClipboard>
										</div>
									</>
								);
							}}
						</ColorThief>
					)}
				</div>
				<div className="palette">
					<Palette
						src={imageSrc}
						crossOrigin="anonymous"
						format="hex"
						colorCount={6}
					>
						{({ data, loading }) => {
							const [localColors, setLocalColors] = useState([]);

							useEffect(() => {
								if (!loading) {
									setLocalColors(data);
									setColorsImage(data);
								}
							}, [data, loading]);

							if (loading) return <Loading />;

							return <MyPalette colors={data} />;
						}}
					</Palette>
					<hr />
					<button className="btn-try" onClick={() => setColors(colorsImage)}>
						Try this palette
					</button>
				</div>

				<div className="code">
					<h1>style.css</h1>
					<div>
						<p>:root </p>
						{colorsImage.map((color, index) => (
							<p key={index}>
								<span>--color {index}:</span>
								{color}
							</p>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
