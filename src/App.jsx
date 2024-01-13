import { useState } from 'react';
import './App.css';
import { MyPiker } from './components/myPiker/MyPiker';
import { MyPalette } from './components/myPalette/MyPalette';
import { ImageColors } from './components/imageColors/ImageColors';

function App() {
	const [mainColor, setMainColor] = useState('#16537b');
	const [colors, setColors] = useState([]);
	return (
		<>
			<div>
				<h1> Any colour you like</h1>
			</div>
			<section className="layout">
				<div className="grow1">
					<MyPiker
						setMainColor={setMainColor}
						mainColor={mainColor}
						setColors={setColors}
					/>
				</div>
				<div className="grow1">
					<MyPalette colors={colors} />
				</div>
			</section>

			<section className="layout">
				<div className="grow1">
					<ImageColors setMainColor={setMainColor} />
				</div>
			</section>
		</>
	);
}

export default App;
