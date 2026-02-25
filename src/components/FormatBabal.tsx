import React from 'react';

interface FormatBabalProps {
  text: string;
}

export const FormatBabal: React.FC<FormatBabalProps> = ({ text }) => {
  if (!text || typeof text !== 'string') return <>{text}</>;

  // Split the text by 'बाबल', keeping the delimiter in the array
  const parts = text.split(/(बाबल)/g);

  return (
    <>
      {parts.map((part, index) => 
        part === 'बाबल' ? (
          <span key={index} className="notranslate">{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
};
