import React, { useState, useEffect } from 'react';

function DataViewerPage() {
  const [data, setData] = useState([
    { id: 1, sensorData: "Temperature: 25°C" },
    { id: 2, sensorData: "Humidity: 65%" }
  ]);

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      setData([
        { id: 1, sensorData: "Temperature: 25°C" },
        { id: 2, sensorData: "Humidity: 65%" },
        { id: 3, sensorData: "Pressure: 1013 hPa" }
      ]);
    }, 1000);
  }, []);

  return (
    <div className="page">
      <h2>Data Viewer</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sensor Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.sensorData}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataViewerPage;
