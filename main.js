import { fetchAndRenderData } from "./lib/ui";

const main = document.querySelector('main');

/**
 * Birtir gögn
 */
function route () {
    fetchAndRenderData(main);
    // fetch
}

route();