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

// export const TESTIMONIAL_CAROUSEL_OPTIONS: OwlCarouselOptions = {
//     loop: true,
//     margin: 25,
//     nav: true,
//     navText: [
//         '<i class="bi bi-arrow-left" />',
//         '<i class="bi bi-arrow-right" />'
//     ],
//     dots: false,
//     autoplay: false,
//     smartSpeed: 1000,
//     responsive: {
//         0: {
//             items: 1
//         },
//         576: {
//             items: 2
//         },
//         992: {
//             items: 3
//         },
//         1200: {
//             items: 4
//         }
//     }
// };