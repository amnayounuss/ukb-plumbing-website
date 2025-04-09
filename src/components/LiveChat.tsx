
import React, { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    // Load Tawk.to script (free live chat service)
    const tawkScript = document.createElement('script');
    tawkScript.async = true;
    tawkScript.src = 'https://embed.tawk.to/YOUR_TAWK_ID/default';
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    document.head.appendChild(tawkScript);
    
    return () => {
      // Clean up script on component unmount
      if (document.head.contains(tawkScript)) {
        document.head.removeChild(tawkScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default LiveChat;
