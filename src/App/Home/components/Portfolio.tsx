// Example in src/components/Portfolio.tsx
import React, { useState, useEffect } from "react";
import Loading from "../../../components/Loading/Loading";

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate or actual data fetching
    setTimeout(() => {
      // fetch projects or set them
      setProjects([
        /* your projects data */
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <div>{/* Your portfolio content */}</div>;
}
