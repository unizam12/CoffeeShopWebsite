import React from "react";
import "./header.css";
// import LocationOnIcon from "@material-ui/icons/LocationOn";

function Header() {
	return (
		<div>
			<div className="header">
				<div className="header-container">
					<div className="left-nav">
						<div className="logo">
							<img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"></img>
						</div>
						<nav>
							<ul>
								<li>MENU</li>
								<li>REWARDS</li>
								<li>GIFT CARDS</li>
							</ul>
						</nav>
					</div>
					<div className="right-nav">
						<div className="find-store">
							<i class="fas fa-map-marker-alt"></i>
							<span>Find a store</span>
						</div>
						<div className="sign-in">Sign In</div>
						<div className="join-now">Join Now</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
