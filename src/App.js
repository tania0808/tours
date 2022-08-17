import React, { useState, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Tours from "./components/Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setTours(data);
  };

  const refreshTours = () => {
    fetchTours();
  }

  useEffect(() => {
    fetchTours()
  }, []);

  if(loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container">
      { tours.length > 0 ?
      <>
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </>
      : <h1>No Tours Left</h1>
      }
      
      { tours.length > 0 ?
      <Tours tours={tours} setTours={setTours}/>
      : <button onClick={() => refreshTours()} className="btn-blue">Refresh</button>
      }
    </div>
  );
}

export default App;
