import React from "react";

interface TruncatedMessageProps {
  text: string;
}

const TruncatedMessage: React.FC<TruncatedMessageProps> = ({ text }) => {
  const sentences = text.split(/(?<=[.!?])\s/);
  
  const truncatedText = sentences.slice(0, 2).join(" ");

  return (
    <div className="truncate w-[365px]">
      {truncatedText}
      {sentences.length > 1 && " ..."}
    </div>
  );
};

export default TruncatedMessage;
