import React, { useEffect, useState } from 'react';

import { getIncidents } from '../api/API';

function Home() {
    const [incidents, setIncidents] = useState(null);

    useEffect(() => {
        getIncidents()
          .then((data) => {
            setIncidents(data);
          })
          .catch((error) => {
            console.error("An error occurred while fetching incidents:", error);
          });
      }, []); 
      
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-semibold mb-4">Religious Violence in India</h1>
    <p className="mb-8">
      Religious violence in India has a complex history and multiple causes, including socio-economic factors, cultural clashes, and political motivations.
    </p>
    <div className="bg-gray-300 h-64 w-full mb-8">
      <p className="text-center text-gray-700 pt-28">
        Map Placeholder
      </p>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Resources:</h2>
      <ul className="list-disc pl-5">
        <li><a href="#" className="text-blue-600">Report 1</a></li>
        <li><a href="#" className="text-blue-600">Article 2</a></li>
        <li><a href="#" className="text-blue-600">Data 3</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Home