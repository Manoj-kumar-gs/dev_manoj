import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);
  useEffect(() => {
    const handleScroll = () => {
      // Find the section closest to the top that is in view
      let minDiff = Infinity;
      let current = sectionIds[0];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id.replace("#", ""));
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && Math.abs(rect.top) < minDiff) {
            minDiff = Math.abs(rect.top);
            current = id;
          }
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);
  return active;
}
