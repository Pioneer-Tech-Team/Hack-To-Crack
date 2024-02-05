import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./photos.css";
import "@splidejs/react-splide/css";

export function Photos() {
	return (
		<>
			<div className="photos">
				<h1 className="photos-title">Our Team</h1>

				<Splide aria-label="Group Photos">
					<SplideSlide>
						<img
							className="photo"
							src="/images/group-photo2.jpeg"
							alt="Image 1"
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							className="photo"
							src="/images/group-photo1.jpeg"
							alt="Image 2"
						/>
					</SplideSlide>
				</Splide>
			</div>
		</>
	);
}
