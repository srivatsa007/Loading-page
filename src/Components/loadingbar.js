import { useState, useEffect } from "react";

const LoadingBar = () => {
  const [btnText, setBtnText] = useState("Run");
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (filled < 100 && isRunning)
      setTimeout(() => {
        setFilled((prev) => (prev += 2));
        setStatus("Loading...");
      }, 100);
    else if (filled > 0 && filled < 100 && !isRunning) setStatus("Paused");
    else if (filled > 99) setStatus("Done!!");
  }, [isRunning, filled]);

  return (
    <>
      <div className="progressbar">
        <div
          className="progressTube"
          style={{
            width: `${filled}%`,
            backgroundColor: "#2F81F7",
            height: "100%",
            transition: "width 0.5s"

          }}
        ></div>
        <p className="progressPercent">{filled}%</p>
      </div>
      <p className="barStatus">{status}</p>
      <div className="btnContainer">
        <button
          className="btnRun buttons"
          onClick={() => {
            setIsRunning(!isRunning);
            if (btnText === "Run" ||btnText === "Resume" ) setBtnText("Pause");
            else {if (btnText === "Pause" ) setBtnText("Resume"); 
                    else setBtnText("Run");
                }
          }}
        >
          {btnText}
        </button>
        <button
          className="btnReset buttons"
          onClick={() => {
            setIsRunning(false);
            setFilled(0);
            setStatus(null);
          }}
        >
          Reset Bar
        </button>
      </div>
    </>
  );
};

export default LoadingBar;