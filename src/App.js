import React, { Suspense, lazy } from "react";
import "./App.css";

const PlotlyChart = lazy(() => import("./PlotlyChart"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Plotly.js with React</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <PlotlyChart />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
