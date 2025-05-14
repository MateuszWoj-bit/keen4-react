import { useEffect } from "react";

function DOSGame() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://v8.js-dos.com/latest/js-dos.js";
    script.onload = () => {
      const el = document.getElementById("dos");

      if (document.body.requestFullscreen) {
        document.body.requestFullscreen().catch(() => {}); 
      }

      window.Dos(el, {
        url: "/bundle.jsdos",
        autoStart: true,
        fullscreen: true,
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="dos" style={{ width: "100vw", height: "100vh" }} />;
}

export default DOSGame;
