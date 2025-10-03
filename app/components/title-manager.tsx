"use client";

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';

const DEFAULT_TITLE = "digital sidequests";
const UNFOCUSED_TITLE = "[building in background...]";

const TitleManager: React.FC = () => {
  const [originalTitle, setOriginalTitle] = useState(DEFAULT_TITLE);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Set the initial default title
    document.title = DEFAULT_TITLE;
    setOriginalTitle(DEFAULT_TITLE); // Store it for when focus returns

    const handleBlur = () => {
      let currentTitle = UNFOCUSED_TITLE;
      document.title = currentTitle;
      if (intervalRef.current) clearInterval(intervalRef.current);
      // Type assertion for setInterval return value in browser
      intervalRef.current = window.setInterval(() => {
        currentTitle = currentTitle.substring(1) + currentTitle.substring(0, 1);
        document.title = currentTitle;
      }, 200) as unknown as number;
    };

    const handleFocus = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.title = originalTitle;
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [originalTitle]); // Rerun effect if originalTitle changes (e.g. via metadata)

  return null; // This component does not render anything
};

export default TitleManager; 