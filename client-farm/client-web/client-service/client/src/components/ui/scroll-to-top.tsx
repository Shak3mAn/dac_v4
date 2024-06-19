import React, { useLayoutEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import { ArrowBigUp } from "lucide-react";
import { GeneralTooltip } from "@/components/misc/general-tooltip"

const ScrollToTop: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { y } = useWindowScroll();

  const scrollToTop = () => {
    let element = document.getElementById("navigation");

    if (element) {
    //   console.log("Scrolling to the top of the element:", element);
      
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
    //   console.warn("Element with ID 'navigation' not found.");
    }
  };

  useLayoutEffect(() => {
    if (ref.current) {
      if (y > 200) {
        ref.current.style.display = "flex";
      } else {
        ref.current.style.display = "none";
      }
    }
  }, [y]);

  return (
    <GeneralTooltip label="Return to top">
      <div
        ref={ref}
        className="flex fixed items-center justify-center cursor-pointer bg-primary rounded-full shadow-md w-[3rem] h-[3rem] hover:scale-125 hover:shadow-lg active:scale-95 transition-all ease-in-out duration-300 bottom-7 right-7 text-background"
        onClick={() => scrollToTop()}
      >
        <ArrowBigUp className="h-7 w-7" />
      </div>
    </GeneralTooltip>
  );
};

export default ScrollToTop;
