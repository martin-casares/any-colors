import { useState } from 'react';
import './App.css';
import { MyPiker } from './components/myPiker/MyPiker';
import { ListComponents } from './components/listComponents/ListComponents';

import { ImageColors } from './components/imageColors/ImageColors';

function App() {
	const [mainColor, setMainColor] = useState('#535392');
	const [colors, setColors] = useState([]);

	return (
		<>
			<div className="app-container">
				<h1 className="app-title"> Any color your like</h1>
				<section className="app-piker-palette">
					<MyPiker
						setMainColor={setMainColor}
						mainColor={mainColor}
						colors={colors}
						setColors={setColors}
					/>

					{/* <div className="grow1">
					<ImageColors setMainColor={setMainColor} />
				</div> */}
				</section>

				<section className="app-components">
					<div className="app-components-content">
						<ListComponents colors={colors} />
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
