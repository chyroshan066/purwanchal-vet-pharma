import 'jquery';

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
    jQueryLoadPromise?: Promise<void>;
    jQueryLoadResolve?: () => void;
  }
}

export {};