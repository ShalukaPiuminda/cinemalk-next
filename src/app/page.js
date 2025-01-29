"use client"; // Ensures this is a client component

import { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Results from "@/components/Results";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Ensure you have this in .env.local

export default function Home() {
  const searchParams = useSearchParams();
  const pathname = usePathname(); // Ensures reactivity when params change
  const genre = searchParams.get("genre") || "fetchTrending";

  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.themoviedb.org/3${
          genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
        }?api_key=${API_KEY}&language=en-US&page=1`;

        console.log("Fetching data from:", url); // Debugging: Ensure correct URL

        const res = await fetch(url, { cache: "no-store" }); // Prevent caching issues
        if (!res.ok) throw new Error(`Failed to fetch data: ${res.statusText}`);

        const data = await res.json();
        if (!data.results) throw new Error("No results found in API response");

        setResults(data.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [genre, pathname]); // Ensure re-fetch when URL changes

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{genre === "fetchTopRated" ? "Top Rated" : "Trending"}</h1>
      <Results results={results} />
    </div>
  );
}
