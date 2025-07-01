import { useEffect } from 'react';

interface StructuredDataOptions {
  type: 'Person' | 'CreativeWork' | 'WebPage' | 'Organization';
  data: Record<string, any>;
}

export const useStructuredData = ({ type, data }: StructuredDataOptions) => {
  useEffect(() => {
    // Remove existing structured data script if it exists
    const existingScript = document.querySelector('script[data-structured-data]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create structured data based on type
    let structuredData: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    // Create and append new script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-structured-data', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-structured-data]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);
};