import React from 'react';
import './navbar.css';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import logo from '../../logo.png';

export const Navbar = () => {
	return (
		<div className="nav-wrapper">
			<div className="nav-content">
				<img src={logo} className="logo" alt="logo" />
				<ul>
					<li>
						<a
							href="https://github.com/martin-casares"
							target="_blank"
							className="menu-item"
						>
							<FaGithub size={32} />
						</a>
					</li>
					<li>
						<a
							href="https://linkedin.com/in/martin-casares"
							target="_blank"
							className="menu-item"
						>
							<FaLinkedin size={32} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
