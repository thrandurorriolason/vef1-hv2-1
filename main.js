import { fetchAndRenderData } from './lib/ui.js';

const main = document.querySelector('main');

/**
 * Birtir gögn
 */
function route () {
    fetchAndRenderData(main);
}

route();