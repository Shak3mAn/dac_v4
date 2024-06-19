"use client";

import * as React from "react";
import { Maximize, Minimize } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FullscreenToggleProps {}

export const FullscreenToggle: React.FC<FullscreenToggleProps> = () => {
  const documentRef = React.useRef(null);
  const [fullscreen, setFullscreen] = React.useState(false);

  React.useEffect(() => {
    setFullscreen(false);
  }, []);

  const handleFullscreenEnter = () => {
    var elem = document.documentElement;
      elem.requestFullscreen();

    //   console.log("Enter Fullscreen Toggled");
      setFullscreen(true);
 
  };

  const handleFullscreenLeave = () => {
    document.exitFullscreen();

    // console.log("Exit Fullscreen Toggled");
    setFullscreen(false)
  };

  return (
    <>
      {!fullscreen ? (
        <>
          <Button
            variant="outline"
            size={"icon"}
            onClick={handleFullscreenEnter}
          >
            <Maximize className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="outline"
            size={"icon"}
            onClick={handleFullscreenLeave}
          >
            <Minimize className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </>
      )}
    </>
  );
};
