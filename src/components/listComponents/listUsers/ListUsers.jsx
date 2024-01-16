import './listUsers.css';

const users = [
	{
		userName: 'github/pmarino2013',
		name: 'Pablo Marino',
		isFollowing: true,
	},
	{
		userName: 'github/martin-casares',
		name: 'Martín Cásares',
		isFollowing: true,
	},
	{
		userName: 'github/jforni',
		name: 'Julio',
		isFollowing: false,
	},
];

export const ListUsers = ({ colors }) => {
	const formatUserName = (userName) => `@${userName}`;
	const gradient = `linear-gradient(90deg, ${colors[0]} 0%, ${colors[5]} 100%)`;

	return (
		<section className="followCard" style={{ border: `3px solid ${colors[5]}` }}>
			<div
				className="followCard-header"
				style={{ background: gradient, borderBottom: `3px solid ${colors[5]}` }}
			>
				<h3 style={{ color: colors[3], fontSize: '1.8rem' }}>Follow</h3>
			</div>
			{users.map((user) => (
				<div key={user.userName} className="followCard-container">
					<header className="followCard-body">
						<img
							className="followCard-avatar"
							alt="El avatar de midudev"
							src={`https://unavatar.io/${user.userName}`}
						/>
						<div className="followCard-info" style={{ color: colors[3] }}>
							<span className="followCard-info-uesrName">
								{formatUserName(user.userName)}
							</span>
						</div>
					</header>
					<aside>
						<button
							className="followCard-button"
							style={{ background: colors[5], border: `2.5px solid ${colors[0]}` }}
						>
							<span className="followCard-text">Follow</span>
						</button>
					</aside>
				</div>
			))}
		</section>
	);
};
