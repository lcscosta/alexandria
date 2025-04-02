"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setAnswer(data.Hello))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">
        {answer ? `Hello ${answer}` : "Loading..."}
      </h1>
    </div>
  );
}
