import { fetchData } from './data.js';
import { createTask, el } from './helpers.js';

export async function fetchAndRenderData(container) {
    const loadingEl = el('p', 'Sæki gögn...');
    container.appendChild(loadingEl);

    const result = await fetchData();

    container.removeChild(loadingEl);

    createMenu(container);

    if(!result) {
        const errorElement = el('p', 'Villa kom upp');
        container.appendChild(errorElement);
    }

    if(result.lenght === 0) {
        const noData = el('p', 'Engin gögn');
        container.appendChild(noData);
    }

    for (const items of result.items) {
        const taskEl = createTask(items.title,items.description,items.due, items.tag, items.category);
        container.appendChild(taskEl);
    }
}


function createMenu(container) {

    const menuSection = el('section');

    const menuElement = el('div');
    const verkefni = el('h3', 'Verkefni');
    menuElement.appendChild(verkefni);
    const klarad = el('h3', 'Kláruð verkefni');
    menuElement.appendChild(klarad);
    menuSection.appendChild(menuElement);
    
    const categories = el('div');
    const catEl = el('h2', 'Flokkar');
    categories.appendChild(catEl);
    const vefforrit = el('h3', 'Vefforrit');
    categories.appendChild(vefforrit);
    const skipulag = el('h3', 'Skipulag');
    categories.appendChild(skipulag);
    const vefthjon = el('h3', 'Vefþjónustur');
    categories.appendChild(vefthjon);
    menuSection.appendChild(categories);

    const tags = el('div');
    const tagsEl = el('h2', 'Tags');
    tags.appendChild(tagsEl);
    const vefforritTags = el('h3', 'Vefforrit');
    tags.appendChild(vefforritTags);
    const skipulagTags = el('h3', 'Skipulag');
    tags.appendChild(skipulagTags);
    const vefthjonTags = el('h3', 'Vefþjónustur');
    tags.appendChild(vefthjonTags);
    menuSection.appendChild(tags);

    container.appendChild(menuSection);
}