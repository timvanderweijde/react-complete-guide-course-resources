import { formatter } from "../util/investment.js";

export default function Input({ initialInvestment, results }) {

  let totalIntereset = 0;
  let invested = initialInvestment;

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        {
        results.map(function(result, i){

          totalIntereset += result.interest;
          invested += result.annualInvestment;

        return (
          <tr key={result.year}>
          <td>{result.year}</td>
          <td>{formatter.format(result.valueEndOfYear)}</td>
          <td>{formatter.format(result.interest)}</td>
          <td>{formatter.format(totalIntereset)}</td>
          <td>{formatter.format(invested)}</td>
        </tr>
        );
    })}
        </tbody>
      </table>
    </div>
  );
}
