import "./hero.css";
import React, { useEffect, useState, useMemo } from "react";
import ReactGA from "react-ga";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import VanillaTilt from "vanilla-tilt";
import Agenda from "./agenda";
import Schedule from "./schedule";
import Sponsors from "./sponsors";
import { Footer } from "../";
import { ReactComponent as Calender } from "../../assets/calender.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as ArrowRightWhite } from "../../assets/arrow-right-white.svg";
import { ReactComponent as ArrowRightBlack } from "../../assets/arrow-right-black.svg";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Photos } from "./photos";
import { Prizes } from "./prizes";

const hero = () => {
	const handleRegisterClick = () => {
		ReactGA.event({
			category: "Button",
			action: "click",
			label: "register",
		});
		window.open("https://forms.gle/mqHSf1kpoTUiMURH6");
	};
	const handleCardClicks = (card) => {
		ReactGA.event({
			category: "Button",
			action: "click",
			label: `${card}`,
		});
		window.open(`${card}`, "_self");
	};
	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	const handleCountdown = () => {
		const countDate = new Date("January 8, 2024 10:00:00").getTime();
		const now = new Date().getTime();
		const diff = countDate - now;
		{
			if (now > countDate) return;
		}
		const second = 1000;
		const minute = second * 60;
		const hour = minute * 60;
		const day = hour * 24;

		var textDay = Math.floor(diff / day);
		var textHour = Math.floor((diff % day) / hour);
		var textMinute = Math.floor((diff % hour) / minute);
		var textSecond = Math.floor((diff % minute) / second);

		if (textDay.toString().length == 1) {
			textDay = `0${textDay}`;
		}
		if (textHour.toString().length == 1) {
			textHour = `0${textHour}`;
		}
		if (textMinute.toString().length == 1) {
			textMinute = `0${textMinute}`;
		}
		if (textSecond.toString().length == 1) {
			textSecond = `0${textSecond}`;
		}

		setCountdown({
			days: textDay,
			hours: textHour,
			minutes: textMinute,
			seconds: textSecond,
		});
	};

	useEffect(() => {
		const tilt = VanillaTilt.init(
			document.querySelectorAll(".anim"),
			{
				max: 10,
				speed: 400,
			},
			[]
		);
		const interval = setInterval(() => handleCountdown(), 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options = useMemo(
		() => ({
			background: {
				image:
					"radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% )",
			},
			fpsLimit: 120,
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 2,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 3, max: 8 },
				},
			},
			detectRetina: true,
		}),
		[]
	);

	return (
		<React.Fragment>
			<div style={{ position: "absolute" }}>
				{init ? <Particles id="tsparticles" options={options} /> : <></>}
			</div>
			<div className="parent_hero">
				{/* <div className="progress_bar"></div> */}
				<div className=" tag-hero-mobile">
					<img
						src="/images/vimeet.png"
						alt="vimeet logo"
						width={128}
						height={128}
						className="hero-srm-logo"
					/>
					<div className="tag">
						<div>
							<div> 1</div>
							<span>st</span>
						</div>
						Year Of National Level Hackthon
					</div>
					<img
						src="/images/saam.png"
						alt="saam logo"
						width={256}
						height={256}
						className="hero-srmvec-logo"
					/>
				</div>

				{/* ----------------------- Page 1 ------------------------- */}
				<section className="column">
					<div className="left_side">
						<div className="curve"></div>

						<div className="title1">
							<span className="hackathon">Hack To Crack</span>
							<br />
							{/* <p className="tag1"> A National Level 40 Hour Hackathon</p> */}
							{/* <span className="hackathon">Hackathon</span> */}
							<p className="description">
								National <span> Level 40 hour Hackathon </span>
								showcasing innovative solutions
								<br /> and tech talents from across the country
							</p>
						</div>

						<div className="register_now" onClick={handleRegisterClick}>
							<div>
								<a>REGISTER NOW </a>
							</div>
							<div>
								{" "}
								<KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 35 }} />
							</div>
						</div>
						<div className="countdown-main">
							{/* <h2 className="countdown-text">
            Join us for the ultimate coding extravaganza!
          </h2> */}
							<div className="countdown anim">
								<div className="day-card anim">
									<h3 className="day">{countdown.days}</h3>
									<h3>Days</h3>
								</div>
								<div className="sep">:</div>
								<div className="hour-card anim">
									<h3 className="hours">{countdown.hours}</h3>
									<h3>Hours</h3>
								</div>
								<div className="sep">:</div>
								<div className="min-card anim">
									<h3 className="minutes">{countdown.minutes}</h3>
									<h3>Minutes</h3>
								</div>
								<div className="sep">:</div>
								<div className="sec-card anim">
									<h3 className="seconds">{countdown.seconds}</h3>
									<h3>Seconds</h3>
								</div>
							</div>
						</div>
					</div>

					<div className="right_side">
						{/* -------------------------- Column 1 * ---------------------------------- */}

						<div className="col1 animated-div">
							<h3 className="text">
								<div>
									<div>
										<div> 8</div> <div> th</div>{" "}
									</div>{" "}
									January
								</div>
								<Calender className="calender-icon" />
							</h3>
							<p
								className="text2"
								onClick={() => handleCardClicks("/guidelines")}
							>
								Guidelines <ArrowRightWhite className="arrow-right-icon" />
							</p>
							<p className="text3" onClick={() => handleCardClicks("/events")}>
								Events <ArrowRightWhite className="arrow-right-icon" />
							</p>
						</div>
						{/* -------------------------- Column 2 * ---------------------------------- */}
						<div className="col2 animated-div">
							<h3 className="text4">
								Information Details <Info className="info-icon" />
							</h3>
							<p className="text5" onClick={() => handleCardClicks("/about")}>
								About
								<ArrowRightWhite className="arrow-right-icon" />
							</p>
							<p className="text6" onClick={() => handleCardClicks("/judges")}>
								Judge Panel
								<ArrowRightWhite className="arrow-right-icon" />
							</p>
						</div>
						{/* -------------------------- Column 3 * ---------------------------------- */}
						<div className="col3 animated-div">
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									flexDirection: "column",
								}}
							>
								<h3 className="text7">Domains</h3>
								<h3 className="text8" style={{ margin: 0, cursor: "initial" }}>
									(Problem Statements)
								</h3>
							</div>
							<p className="text8" onClick={() => handleCardClicks("/set1")}>
								Domain 1 <ArrowRightBlack className="arrow-right-icon" />
							</p>
							<p className="text9" onClick={() => handleCardClicks("/set2")}>
								Domain 2 <ArrowRightBlack className="arrow-right-icon" />
							</p>
							<p className="text9" onClick={() => handleCardClicks("/set3")}>
								Domain 3 <ArrowRightBlack className="arrow-right-icon" />
							</p>
							<p className="text9" onClick={() => handleCardClicks("/set4")}>
								Domain 4 <ArrowRightBlack className="arrow-right-icon" />
							</p>
							<p className="text9" onClick={() => handleCardClicks("/set5")}>
								Domain 5 <ArrowRightBlack className="arrow-right-icon" />
							</p>
						</div>
						{/* -------------------------- Column 4  ---------------------------------- */}
						<div
							className="col4 animated-div"
							onClick={() =>
								window.open(
									"https://www.google.com/maps/d/u/0/viewer?mid=1GK1BeW3q1MbGuDaMUXa5F_GpHWo&hl=en&ll=18.820244%2C73.27026999999998&z=17"
								)
							}
						>
							<h3 className="text10">
								Venue <Location className="location-icon" />
							</h3>
							<div className="flex flex-col ">
								<p className="text-white pt-[2vh] text-[1vw] venue-text-mobile">
									Vishwaniketan's Institute of Management Entrepreneurship and
									Engineering Technology
								</p>
								{/* <p className="text-white  text-[0.8vw] ">
                  National Highway 45, Potheri, SRM Nagar, Kattankulathur, Tamil
                  Nadu - 603203
                </p> */}
								<div className="round"></div>
							</div>
						</div>
						{/* -------------------------- Column 5  ---------------------------------- */}
						<div className="col5 "></div>
						{/* -------------------------- Column 6  ---------------------------------- */}
						<div className="col6 animated-div">
							<h3 className="text13">
								Organized & Managed By
								<div className="flex justify-center items-center gap-1"></div>
							</h3>
							<div className="flex items-start justify-between flex-col">
								<p className="text14">
									SAAM- STUDENT ASSOCIATION OF ARTIFICIAL INTELLIGENCE AND
									MACHINE LEARNINNG{" "}
								</p>
								<p className="text15">PIONEERTECH </p>
								<div className="round2"></div>
							</div>
						</div>
					</div>
				</section>
				{/* -------------------------- Page 2 -------------------------- */}
			</div>
			<Agenda />
			<div className="bg-sep"></div>
			<Photos />
			<div className="bg-sep"></div>
			<Schedule />
			<div className="bg-sep"></div>
			<Prizes />
			<div className="bg-sep"></div>
			<Sponsors />
			<Footer />
		</React.Fragment>
	);
};

export default hero;