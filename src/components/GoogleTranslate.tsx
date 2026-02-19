"use client";

import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

const GoogleTranslate = () => {
    
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "hi", // Source language is Hindi
          includedLanguages: "en,hi", // Only allow Hindi and English
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ display: "none" }} // Hide the default widget
    ></div>
  );
};

export default GoogleTranslate;
