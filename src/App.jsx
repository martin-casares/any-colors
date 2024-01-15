import { useState } from 'react';
import './App.css';
import { MyPiker } from './components/myPiker/MyPiker';
import { ListComponents } from './components/listComponents/ListComponents';

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
						colors={colors}
						setColors={setColors}
					/>
				</div>
				<div className="grow1">
					<ImageColors setMainColor={setMainColor} />
				</div>
			</section>

			<section className="layout">
				<div className="grow1">
					<ListComponents colors={colors} />
				</div>
			</section>
		</>
	);
}

export default App;
