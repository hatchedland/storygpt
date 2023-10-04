'use client'

import { useState } from "react";

export default function Dashboard() {
  const [characters, setCharacters] = useState('');
  const [locations, setLocations] = useState('');
  const [response, setResponse] = useState();

  const handleGenerate = async () => {
    const keywords = `characters: ${characters},locations: ${locations}`;
    
    try {

      const res = await fetch("../api/process-data.js", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keywords }),
      });
      
      if (res.status === 200) {
        const data = await res.json();
        setResponse(data.response);
      }
       else {
        console.error('failed to fetch response');
      }

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};


return (
  <div className=" flex flex-col items-center justify-center">
    <div className="w-full max-w-lg bg-brown-primary2 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl text-gray-400 font-semibold mb-4">Dashboard</h1>

      <div className="mb-4">
        <label htmlFor="characters" className="text-lg font-semibold mb-2">
          Characters:
        </label>
        <textarea
          id="characters"
          name="characters"
          className="mt-1 p-2 bg-brown-primary1 border border-gray-600 rounded-md w-full h-32 focus:outline-none placeholder-opacity-75"
          placeholder={
            `Ram\nLakshman\nSita\nPool`
          }
          value={characters}
          onChange={(e) => setCharacters(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="locations" className="text-lg font-semibold mb-2">
          Locations:
        </label>
        <textarea
          id="locations"
          name="locations"
          className="mt-1 p-2 bg-brown-primary1 border border-gray-600 rounded-md w-full h-32 focus:outline-none placeholder-opacity-75"
          placeholder={
            `Cafe\nCar - Ram's car\nClub\nPool`
          }
          value={locations}
          onChange={(e) => setLocations(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <button
          className="bg-red-accent2 hover:bg-red-accent1 text-white font-semibold py-2 px-4 rounded w-full"
          onClick={handleGenerate}
        >
          Click to generate
        </button>
      </div>

      <div>{response}</div>
    </div>
  </div>
);
}
