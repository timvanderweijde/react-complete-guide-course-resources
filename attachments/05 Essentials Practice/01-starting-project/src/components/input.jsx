export default function Input({
  onUpdateInvestment,
  investmentValue
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment:</label>
          <input type="number" required value={investmentValue.initialInvestment} onChange={(event) => onUpdateInvestment('initialInvestment', event.target.value)} />
        </p>
        <p>
          <label>Annual investment:</label>
          <input type="number" required value={investmentValue.annualInvestment} onChange={(event) => onUpdateInvestment('annualInvestment', event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p><label>Expected return:</label>
          <input type="number" required value={investmentValue.expectedReturn} onChange={(event) => onUpdateInvestment('expectedReturn', event.target.value)}/>
        </p>
        <p> <label>Duration:</label>
          <input type="number" required value={investmentValue.duration} onChange={(event) => onUpdateInvestment('duration', event.target.value)}/>
        </p>
      </div>
    </section>
  );
}