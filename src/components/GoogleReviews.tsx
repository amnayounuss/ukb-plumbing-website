
import React, { useEffect } from 'react';

// Define Google Maps types
declare global {
  interface Window {
    google: {
      maps: {
        places: {
          PlacesService: new (element: HTMLElement) => {
            getDetails: (
              request: { placeId: string; fields: string[] },
              callback: (place: any, status: string) => void
            ) => void;
          };
          PlacesServiceStatus: {
            OK: string;
          };
        };
      };
    };
  }
}

const GoogleReviews = () => {
  useEffect(() => {
    // Load Google Maps script with place API
    const googleScript = document.createElement('script');
    googleScript.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places";
    googleScript.async = true;
    googleScript.onload = initializeReviews;
    document.head.appendChild(googleScript);

    return () => {
      // Clean up
      document.head.removeChild(googleScript);
    };
  }, []);

  const initializeReviews = () => {
    if (window.google && window.google.maps && window.google.maps.places) {
      const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));
      
      // Replace with your actual Google Place ID
      const placeId = 'YOUR_PLACE_ID';
      
      placesService.getDetails({
        placeId: placeId,
        fields: ['name', 'rating', 'review', 'user_ratings_total']
      }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && place && place.reviews) {
          displayReviews(place);
        } else {
          console.error('Error fetching Google reviews:', status);
          const container = document.getElementById('google-reviews-container');
          if (container) {
            container.innerHTML = 
              '<p class="text-center text-gray-500">Unable to load reviews at this time. Please check back later.</p>';
          }
        }
      });
    }
  };

  const displayReviews = (place: any) => {
    const container = document.getElementById('google-reviews-container');
    if (!container) return;
    
    let reviewsHtml = '';
    
    // Create overall rating display
    reviewsHtml += `
      <div class="text-center mb-8">
        <div class="flex items-center justify-center mb-2">
          <div class="text-3xl font-bold text-ukb-blue mr-2">${place.rating || 0}</div>
          <div class="flex">
            ${generateStars(place.rating || 0)}
          </div>
        </div>
        <p class="text-gray-600">Based on ${place.user_ratings_total || 0} reviews</p>
      </div>
    `;
    
    // Create individual review cards
    if (place.reviews && place.reviews.length > 0) {
      reviewsHtml += '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">';
      
      place.reviews.slice(0, 6).forEach((review: any) => {
        reviewsHtml += `
          <div class="bg-white rounded-lg shadow-subtle p-6 flex flex-col">
            <div class="flex items-center mb-4">
              <img src="${review.profile_photo_url}" alt="${review.author_name}" class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-medium">${review.author_name}</h4>
                <div class="flex text-yellow-400">
                  ${generateStars(review.rating)}
                </div>
              </div>
            </div>
            <p class="text-gray-600 flex-grow">${truncateText(review.text, 150)}</p>
            <p class="text-gray-500 text-sm mt-4">${formatReviewTime(review.time)}</p>
          </div>
        `;
      });
      
      reviewsHtml += '</div>';
    } else {
      reviewsHtml += '<p class="text-center text-gray-500">No reviews available at this time.</p>';
    }
    
    // Add a link to see all reviews on Google
    reviewsHtml += `
      <div class="text-center mt-8">
        <a href="https://search.google.com/local/writereview?placeid=${place.place_id}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="btn-primary inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
          Write a Review
        </a>
      </div>
    `;
    
    container.innerHTML = reviewsHtml;
  };

  const generateStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHtml = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
    }
    
    // Half star
    if (halfStar) {
      starsHtml += '<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
    }
    
    return starsHtml;
  };

  const truncateText = (text: string | undefined, maxLength: number) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const formatReviewTime = (timestamp: number | undefined) => {
    if (!timestamp) return '';
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  return (
    <section id="google-reviews" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ukb-blue mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud of our 24/7 emergency plumbing services in Southampton. Here's what our customers have to say about our urgent plumbing repairs and same-day plumbing services.
          </p>
        </div>
        
        <div id="google-reviews-container" className="mt-8">
          <div className="flex justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-4 text-gray-500">Loading reviews...</p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
