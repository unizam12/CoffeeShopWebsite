import React from "react";
import "./main.css";

function Main() {
	return (
		<div>
			<div className="main-container">
				<section className="announcement">
					<span>
						Facial coverings are now optional in our stores for our fully
						vaccinated customers, following CDC guidance, except where local
						regulations require it by law.
						<a href="#">Learn more</a>
					</span>
				</section>
				<section className="rewards left-right-section">
					<div className="text">
						<h1>FREE COFFEE IS A TAP AWAY</h1>
						<h3>Join now to start earning Rewards.*</h3>
						<div className="cta">Join now</div>
					</div>
					<div className="image">
						<img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71056.png"></img>
					</div>
				</section>
				<section className="chill left-right-section">
					<div className="image">
						<img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72037.jpg"></img>
					</div>
					<div className="text">
						<h1>DELIGHTFULLY CHILL</h1>
						<h3>
							Refresh your day with the bright, tropical flavors of our Star
							Drink and Kiwi Starfruit Starbucks Refreshers® beverage.
						</h3>
						<div className="cta">Order iced beverage</div>
					</div>
				</section>
				<section>
					<div className="top-bottom-section">
						<div className="section-container">
							<div className="image">
								<img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg"></img>
							</div>
							<div className="text">
								<h1>Order and pick up. Easy as that.</h1>
								<h3>
									Just open the app, order your favorites, and enjoy contactless
									pay. From there, choose whichever pickup method is best for
									you.
								</h3>
								<div className="cta-container">
									<div className="cta">See pickup options</div>
								</div>
							</div>
						</div>
					</div>
					<div className="top-bottom-section">
						<div className="section-container">
							<div className="image">
								<img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71361.jpg"></img>
							</div>
							<div className="text">
								<h1>Earning 4,500 Bonus Stars is Super Starifying</h1>
								<h3>
									With a $0 intro annual fee for your first year, earn more
									Stars and even more Rewards with the Starbucks® Rewards Visa®
									Card.
								</h3>
								<div className="cta-container">
									<div className="cta">Learn more</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Main;
