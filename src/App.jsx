import { useState } from 'react';
import './App.css';

import { MyPiker } from './components/myPiker/MyPiker';
import { ListComponents } from './components/listComponents/ListComponents';
import { ImageColors } from './components/imageColors/ImageColors';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';

function App() {
	const [mainColor, setMainColor] = useState('#535392');
	const [colors, setColors] = useState([]);

	return (
		<>
			<Navbar />
			<div className="app-container">
				<h1 className="app-title"> Any color your like</h1>
				<section className="app-piker-palette">
					<MyPiker
						setMainColor={setMainColor}
						mainColor={mainColor}
						colors={colors}
						setColors={setColors}
					/>
				</section>

				<section className="app-image-upload">
					<div className="app-image-upload-container">
						<ImageColors setMainColor={setMainColor} />
					</div>
				</section>

				<section className="app-components">
					<div className="app-components-content">
						<ListComponents colors={colors} />
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}

export default App;
