import './listComponents.css';

import { MiniForm } from './miniForm/MiniForm';
import { ListUsers } from './listUsers/ListUsers';
import { MiniNav } from './miniNav/MiniNav';

export const ListComponents = ({ colors }) => {
	const components = [MiniNav, ListUsers, MiniForm];
	return (
		<div>
			<section className="mini-layout">
				{colors?.map((color, index) => {
					const Component = components[index % components.length];
					return (
						<div
							key={index}
							className="mini-box"
							style={{ background: color, width: '100%', height: '25rem' }}
						>
							<Component colors={colors} />
						</div>
					);
				})}
			</section>
		</div>
	);
};
