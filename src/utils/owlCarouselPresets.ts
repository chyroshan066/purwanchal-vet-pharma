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

// ADDED: Testimonial carousel preset
export const TESTIMONIAL_CAROUSEL_OPTIONS: OwlCarouselOptions = {
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 800,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
};

// ADDED: Hero/Banner carousel preset
export const HERO_CAROUSEL_OPTIONS: OwlCarouselOptions = {
    loop: true,
    margin: 0,
    nav: true,
    navText: [
        '<i class="bi bi-chevron-left" />',
        '<i class="bi bi-chevron-right" />'
    ],
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    smartSpeed: 1200,
    items: 1
};

// ADDED: Team members carousel preset
export const TEAM_CAROUSEL_OPTIONS: OwlCarouselOptions = {
    loop: true,
    margin: 25,
    nav: true,
    navText: [
        '<i class="bi bi-arrow-left" />',
        '<i class="bi bi-arrow-right" />'
    ],
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        576: {
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

// ADDED: Gallery/Image carousel preset
export const GALLERY_CAROUSEL_OPTIONS: OwlCarouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<i class="bi bi-chevron-left" />',
        '<i class="bi bi-chevron-right" />'
    ],
    dots: false,
    autoplay: false,
    smartSpeed: 600,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
};

// ADDED: Blog posts carousel preset
export const BLOG_CAROUSEL_OPTIONS: OwlCarouselOptions = {
    loop: true,
    margin: 30,
    nav: true,
    navText: [
        '<i class="bi bi-arrow-left" />',
        '<i class="bi bi-arrow-right" />'
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
};

// ADDED: Single item centered carousel preset
export const CENTERED_CAROUSEL_OPTIONS: OwlCarouselOptions = {
    loop: true,
    margin: 50,
    nav: true,
    navText: [
        '<i class="bi bi-chevron-left" />',
        '<i class="bi bi-chevron-right" />'
    ],
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 800,
    center: true,
    stagePadding: 100,
    responsive: {
        0: {
            items: 1,
            stagePadding: 20
        },
        768: {
            items: 1,
            stagePadding: 50
        },
        992: {
            items: 1,
            stagePadding: 100
        }
    }
};