"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value ?? 0), 500); // Provide a default value of 0
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    if (value !== undefined && value !== null) {
      setProgress(value);
    }
  }, [value])

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/10",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 bg-primary transition-all ease-in-out shadow-sm duration-1000",
          progress <= 40 && "bg-red-800",
          progress > 40 && progress <= 75 && "bg-amber-600",
          progress > 75 && "bg-green-800",
          progress >= 95 && "bg-green-800 animate-pulse",
          progress > 100 && "bg-[#360505] animate-pulse"
        )}
        style={{ transform: `translateX(-${100 - (progress || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
