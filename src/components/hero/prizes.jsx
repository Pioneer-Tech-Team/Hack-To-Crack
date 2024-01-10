import "./prizes.css";

export function Prizes() {
	return (
		<div className="prizes">
			<h1 className="prizes-title">Prizes</h1>
			<div className="cards">
				<div className="card">
                    <img src="/images/prizes/1.png" alt="Gold medal" width={256} />
					<h1 className="card-title">INR 50,000</h1>
				</div>
				<div className="card">
                    <img src="/images/prizes/2.png" alt="Silver medal" width={256} />
					<h1 className="card-title">INR 30,000</h1>
				</div>
				<div className="card">
                    <img src="/images/prizes/3.png" alt="Bronze medal" width={256} />
					<h1 className="card-title">INR 20,000</h1>
				</div>
			</div>
			<div className="card" style={{ width: "100%", margin: "1rem 0" }}>
                    <img src="/images/prizes/trophy.png" alt="Trophy" width={256} />
				<h1 className="card-title">INR 10,000 for each domain</h1>
			</div>
		</div>
	);
}
