import React, { useState, useEffect } from 'react';

function DataViewerPage() {
  const [data, setData] = useState([
    { id: 1, sensorData: "Temperature: 25°C" },
    { id: 2, sensorData: "Humidity: 65%" }
  ]);

  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      try {
        // In a real application, this would be an API call
        // For now, we'll just simulate loading data after a delay
        setTimeout(() => {
          setData([
            { id: 1, sensorData: "Temperature: 25°C" },
            { id: 2, sensorData: "Humidity: 65%" },
            { id: 3, sensorData: "Pressure: 1013 hPa" }
          ]);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Data Viewer</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Sensor Data</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td className="py-2 px-4 border">{item.id}</td>
                <td className="py-2 px-4 border">{item.sensorData}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataViewerPage;