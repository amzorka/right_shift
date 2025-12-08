import { useEffect } from "react";

export default function ScrollTracker() {
  useEffect(() => {
    let sent25 = false;
    let sent50 = false;
    let sent75 = false;
    let sent100 = false;

    function onScroll() {
      const scrollPos =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;

      if (!sent25 && scrollPos > 0.25) {
        window.ym && window.ym(105637380, "reachGoal", "scroll_25");
        sent25 = true;
      }

      if (!sent50 && scrollPos > 0.5) {
        window.ym && window.ym(105637380, "reachGoal", "scroll_50");
        sent50 = true;
      }

      if (!sent75 && scrollPos > 0.75) {
        window.ym && window.ym(105637380, "reachGoal", "scroll_75");
        sent75 = true;
      }

      if (!sent100 && scrollPos >= 1) {
        window.ym && window.ym(105637380, "reachGoal", "scroll_100");
        sent100 = true;
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
