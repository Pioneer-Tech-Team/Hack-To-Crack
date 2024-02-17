import "./prizes.css";

export function Prizes() {
	return (
		<div className="prizes">
			<h1 className="prizes-title">Prizes (1 Lakh+ Prize Pool)</h1>
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
		</div>
	);
}
