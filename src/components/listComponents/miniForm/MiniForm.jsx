import './miniForm.css';

export const MiniForm = ({ colors }) => {
	const gradient = `linear-gradient(90deg, ${colors[0]} 0%, ${colors[5]} 100%)`;
	return (
		<div
			className="login-container"
			style={{ background: colors[4], boxShadow: `10px 10px 5px 5px ${colors[1]}` }}
		>
			<form
				className="login-form"
				style={{
					border: `2px solid ${colors[0]}`,
				}}
			>
				<p className="login-title" style={{ color: colors[0] }}>
					Login
				</p>
				<input
					type="text"
					placeholder="Email"
					style={{ border: `1.5px solid ${colors[1]}` }}
				/>

				<input
					type="password"
					placeholder="Password"
					style={{ border: `1.5px solid ${colors[1]}` }}
				/>

				<div className="login-text">
					<small style={{ color: colors[1] }}>
						No estas registrado?{' '}
						<a href="#" style={{ color: colors[0] }}>
							Registrate
						</a>
					</small>
				</div>

				<button
					type="submit"
					className="login-btn"
					style={{
						background: gradient,
					}}
				>
					Login
				</button>
			</form>
		</div>
	);
};
