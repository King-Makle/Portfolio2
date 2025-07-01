import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

export const useSeo = ({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords
}: SeoOptions) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    
    if (image) {
      updateMetaTag('og:image', image, true);
    }
    
    if (url) {
      updateMetaTag('og:url', url, true);
    }

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    
    if (image) {
      updateMetaTag('twitter:image', image);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (url) {
      if (canonicalLink) {
        canonicalLink.setAttribute('href', url);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', url);
        document.head.appendChild(canonicalLink);
      }
    }
  }, [title, description, image, url, type, keywords]);
};