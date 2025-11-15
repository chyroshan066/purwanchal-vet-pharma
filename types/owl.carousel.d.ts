// types/owl.carousel.d.ts

import 'jquery';

interface OwlCarouselOptions {
    items?: number;
    loop?: boolean;
    center?: boolean;
    rewind?: boolean;
    mouseDrag?: boolean;
    touchDrag?: boolean;
    pullDrag?: boolean;
    freeDrag?: boolean;
    margin?: number;
    stagePadding?: number;
    merge?: boolean;
    mergeFit?: boolean;
    autoWidth?: boolean;
    startPosition?: number;
    rtl?: boolean;
    smartSpeed?: number;
    fluidSpeed?: boolean;
    dragEndSpeed?: boolean | number;
    responsive?: {
        [breakpoint: number]: {
            items?: number;
            nav?: boolean;
            dots?: boolean;
            [key: string]: any;
        };
    };
    responsiveRefreshRate?: number;
    responsiveBaseElement?: Window;
    fallbackEasing?: string;
    info?: boolean;
    nestedItemSelector?: boolean | string;
    itemElement?: string;
    stageElement?: string;
    refreshClass?: string;
    loadedClass?: string;
    loadingClass?: string;
    rtlClass?: string;
    responsiveClass?: string;
    dragClass?: string;
    itemClass?: string;
    stageClass?: string;
    stageOuterClass?: string;
    grabClass?: string;
    autoplay?: boolean;
    autoplayTimeout?: number;
    autoplayHoverPause?: boolean;
    autoplaySpeed?: boolean | number;
    nav?: boolean;
    navText?: string[];
    navSpeed?: boolean | number;
    navElement?: string;
    navContainer?: boolean | string;
    navContainerClass?: string;
    navClass?: string[];
    slideBy?: number | string;
    dots?: boolean;
    dotsClass?: string;
    dotClass?: string;
    dotsContainer?: boolean | string;
    dotsData?: boolean;
    dotsSpeed?: boolean | number;
    dotsEach?: boolean | number;
    lazyLoad?: boolean;
    lazyLoadEager?: number;
    autoHeight?: boolean;
    autoHeightClass?: string;
    video?: boolean;
    videoHeight?: boolean | number;
    videoWidth?: boolean | number;
    animateOut?: boolean | string;
    animateIn?: boolean | string;
    URLhashListener?: boolean;
    [key: string]: any;
}

declare global {
    interface JQuery {
        owlCarousel(options?: OwlCarouselOptions): JQuery;
        owlCarousel(method: 'destroy'): void;
        owlCarousel(method: 'next' | 'prev'): void;
        owlCarousel(method: 'to', position: number, speed?: number): void;
        owlCarousel(method: 'refresh'): void;
        owlCarousel(method: string, ...args: any[]): any;
    }
}