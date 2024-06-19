"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PosAvatarProps {}

const PosAvatar: React.FC<PosAvatarProps> = () => {
  return (
    <Avatar>
      <AvatarImage
        src={"https://github.com/shadcn.png"}
        alt="AvOne"
        className="hover:shadow-sm hover:shadow-accent-hover"
      />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
};

export default PosAvatar;
