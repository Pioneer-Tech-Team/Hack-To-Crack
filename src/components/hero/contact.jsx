import React, { useRef } from "react";
import PhoneBluetoothSpeakerIcon from "@mui/icons-material/PhoneBluetoothSpeaker";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import "./contact.css";

const people = [
	{
		name: "Sahebraju P",
		image: "/images/shree.webp",
		description: "President - SAAM",
		phone: "9999999999",
		email: "email@example.com",
		instagram: "instagram",
	},
];

const ContactCard = ({ person }) => {
	const card = useRef();
	const toggleContact = () =>
		card.current?.classList.toggle("contact-card-flip");

	return (
		<div>
			<div className="contact-container">
				<div className="contact-card" ref={card}>
					<div className="contact-card-front">
						<img src="/images/shree.webp" alt={person.name} />
						<div className="contact-card-details">
							<h1 className="contact-card-name">{person.name}</h1>
							<h2 className="contact-card-description">{person.description}</h2>
							<h3 className="contact-card-options" onClick={toggleContact}>
								Contact Options
								<KeyboardDoubleArrowRightIcon
									style={{
										width: "20px",
										height: "20px",
									}}
								/>
							</h3>
						</div>
					</div>
					<div className="contact-card-back">
						<div className="contact-card-details">
							<h1 className="contact-card-name">{person.name}</h1>
							<h2 className="contact-card-description">
								<span
									className="contact-card-phone"
									onClick={() => {
										setTimeout(() => {
											window.open(
												`https://api.whatsapp.com/send?phone=${person.phone}`
											);
										}, 2000);
									}}
								>
									<PhoneBluetoothSpeakerIcon
										className="phone"
										style={{
											width: "35px",
											height: "35px",
										}}
									/>
									+91 {person.phone}
									<span id="contact-card-launch1">
										<RocketLaunchIcon
											className="rocketLaunch"
											style={{
												width: "20px",
												height: "20px",
											}}
										/>
									</span>
								</span>
								<span
									className="contact-card-email"
									onClick={() => {
										setTimeout(() => {
											window.open(`mailto:${person.email}`);
										}, 2000);
									}}
								>
									<EmailRoundedIcon
										className="email"
										style={{
											width: "35px",
											height: "35px",
										}}
									/>
									{person.email}
									<span id="contact-card-launch2">
										<RocketLaunchIcon
											className="rocketLaunch"
											style={{
												width: "20px",
												height: "20px",
											}}
										/>
									</span>
								</span>
								<span
									className="contact-card-instagram"
									onClick={() => {
										setTimeout(() => {
											window.open(
												`https://www.instagram.com/${person.instagram}`
											);
										}, 2000);
									}}
								>
									<InstagramIcon
										className="instagram"
										style={{
											width: "35px",
											height: "35px",
										}}
									/>
									@{person.instagram}
									<span id="contact-card-launch3">
										<RocketLaunchIcon
											className="rocketLaunch"
											style={{
												width: "20px",
												height: "20px",
											}}
										/>
									</span>
								</span>
							</h2>
							<h3 className="contact-card-options" onClick={toggleContact}>
								<KeyboardDoubleArrowLeftIcon
									style={{
										width: "20px",
										height: "20px",
									}}
								/>
								Back
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const contact = () => {
	return (
		<React.Fragment>
			<div id="contact" className="parent-contact">
				<div className="contact-title">
					<img src="/images/rrr.webp" alt="arrow-logo" />
					Contacts
				</div>
				<div className="parent-container">
					{people.map((person) => (
						<ContactCard person={person} />
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default contact;
