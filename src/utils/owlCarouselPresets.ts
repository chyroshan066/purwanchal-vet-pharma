import { OwlCarouselOptions } from '@/hooks/useOwlCarousel';

export const PRODUCT_CAROUSEL_OPTIONS: OwlCarouselOptions = {
    margin: 45,
    responsive: {  
        0: { 
            items: 1
        },
        768: { 
            items: 2 
        },
        992: { 
            items: 3 
        },
        1200: { 
            items: 4 
        }
    }
};

export const TEAM_CAROUSEL_OPTIONS: OwlCarouselOptions = {
    margin: 45,
    responsive: {  
        0: { 
            items: 1
        },
        768: { 
            items: 2 
        },
        992: { 
            items: 3 
        },
        1200: { 
            items: 4 
        }
    }
};

export const TESTIMONIAL_CAROUSEL_OPTIONS: OwlCarouselOptions = {
    items: 1,
};