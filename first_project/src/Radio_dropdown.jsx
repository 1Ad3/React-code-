import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString()); // ✅ Correct initial state

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString()); // ✅ Updates time every second
    }, 1000);

    return () => clearInterval(interval); // ✅ Cleanup function to prevent memory leaks
  }, []);

  return (
    <div>
      <h1>Clock</h1>
      <h1>{time}</h1> {/* ✅ Displays current time */}
    </div>
  );
}

export default Clock;
