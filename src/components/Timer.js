import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setseconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setseconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  })

  return (
    <div>
      This has been open for {seconds} seconds
      <br></br>
      <button onClick={() => setseconds(0)}>Reset Timer</button>
    </div>
  );
}

export default Timer;