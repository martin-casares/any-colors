import './listComponents.css';
import { MiniCard } from './miniCard/MiniCard';
import { MiniForm } from './miniForm/MiniForm';

export const ListComponents = ({ colors }) => {
	return (
		<div>
			<section className="mini-layout">
				{colors?.map((color, index) => (
					<>
						<div
							key={index}
							className="mini-box"
							style={{ background: color, width: '100%', height: '25rem' }}
						>
							<MiniForm colors={colors} />
							{/* <MiniCard colors={colors} /> */}
						</div>
					</>
				))}
			</section>
		</div>
	);
};
