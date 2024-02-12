import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useState } from "react";
import { useEffect } from "react";

export function Background() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		if (!init)
			initParticlesEngine(async (engine) => {
				await loadSlim(engine);
			}).then(() => {
				setInit(true);
			});
	}, []);

	const options = {
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
	};

	return (
		<div style={{ position: "absolute" }}>
			{init ? <Particles id="tsparticles" options={options} /> : <></>}
		</div>
	);
}
