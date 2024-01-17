import './miniNav.css';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';

export const MiniNav = ({ colors }) => {
	return (
		<div className="mini-nav ">
			<div className="nav-wrapper" style={{ background: colors[5] }}>
				<div className="nav-content">
					<strong className="logo" style={{ color: colors[3] }}>
						Logo
					</strong>
					<ul>
						<li>
							<a href="" className="menu-item" style={{ color: colors[1] }}>
								Home
							</a>
						</li>
						<li>
							<a href="" className="menu-item" style={{ color: colors[1] }}>
								Blog
							</a>
						</li>
						<li>
							<a href="" className="menu-item" style={{ color: colors[1] }}>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="hero">
				<p className="hero-title" style={{ color: colors[4] }}>
					Hello I'm
				</p>
				<span style={{ color: colors[5], fontSize: '1.5rem' }}>
					frontend developer...
				</span>
				<button
					className="hero-button"
					style={{
						background: colors[5],
						border: `2.5px solid ${colors[0]}`,
						color: colors[2],
					}}
				>
					<span className="followCard-text">download cv</span>
				</button>
				<div className="hero-icons">
					<a href="">
						<FaGithub size={50} style={{ color: colors[4], marginRight: '10px' }} />
					</a>
					<a href="">
						<FaLinkedin
							size={50}
							style={{ color: colors[4], marginRight: '10px' }}
						/>
					</a>
					<a href="">
						<FaTwitter size={50} style={{ color: colors[4], marginRight: '10px' }} />
					</a>
				</div>
			</div>
		</div>
	);
};
