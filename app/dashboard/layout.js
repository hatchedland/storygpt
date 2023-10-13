"use client";

import { useState } from "react";
import generatedText from "../utils/generateText";

export default function Dashboard() {
  const [characters, setCharacters] = useState("");
  const [locations, setLocations] = useState("");
  const [response, setResponse] = useState();

  const handleGenerate = async () => {
    const keywords = `characters: ${characters},locations: ${locations}`;

    const result = await generatedText(keywords);
    // console.log(result);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-md bg-brown-primary2">
        <h1 className="mb-4 text-4xl font-semibold text-gray-400">Dashboard</h1>

        <div className="mb-4">
          <label htmlFor="characters" className="mb-2 text-lg font-semibold">
            Characters:
          </label>
          <textarea
            id="characters"
            name="characters"
            className="w-full h-32 p-2 mt-1 placeholder-opacity-75 border border-gray-600 rounded-md bg-brown-primary1 focus:outline-none"
            placeholder={`Ram\nLakshman\nSita\nPool`}
            value={characters}
            onChange={(e) => setCharacters(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="locations" className="mb-2 text-lg font-semibold">
            Locations:
          </label>
          <textarea
            id="locations"
            name="locations"
            className="w-full h-32 p-2 mt-1 placeholder-opacity-75 border border-gray-600 rounded-md bg-brown-primary1 focus:outline-none"
            placeholder={`Cafe\nCar - Ram's car\nClub\nPool`}
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <button
            className="w-full px-4 py-2 font-semibold text-white rounded bg-red-accent2 hover:bg-red-accent1"
            onClick={handleGenerate}>
            Click to generate
          </button>
        </div>

        <div>{response}</div>
      </div>
    </div>
  );
}
