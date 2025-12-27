export default function LogTable() {
  return (
    <div className="table-container">
      <h2>Detected Log Events</h2>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Message</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-01-12 10:30</td>
            <td>Unauthorized access detected</td>
            <td className="high">High</td>
          </tr>
          <tr>
            <td>2025-01-12 10:31</td>
            <td>User login successful</td>
            <td className="low">Low</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
