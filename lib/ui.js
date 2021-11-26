import { fetchData } from "./data.js";
import { createTask, el, sortTaskList } from "./helpers.js";

export async function fetchAndRenderData(container) {
  let cnt = 1;
  //Setur headingið "Verkefnalistinn" á síðunna
  const verkefnilisti = el("h1", "Verkefnalistinn");
  //Setti class á h1 tagið til að létta fyrir grid staðsetningu
  verkefnilisti.classList.add("layout__header");
  //Setja h1 tagið á síðunna
  container.appendChild(verkefnilisti);

  const loadingEl = el("p", "Sæki gögn...");
  container.appendChild(loadingEl);

  const result = await fetchData();

  container.removeChild(loadingEl);

  //Gerði createSorter function fyrir neðan, ég gæti verið að flækja hlutina þannig megið endilega
  //breyta ef það er til betri lausn
  createSorter(container);
  createMenu(container);

  if (!result) {
    const errorElement = el("p", "Villa kom upp");
    container.appendChild(errorElement);
  }

  if (result.lenght === 0) {
    const noData = el("p", "Engin gögn");
    container.appendChild(noData);
  }

  for (const items of result.items) {
    let taskClassName = "task__items";
    taskClassName += cnt.toString();
    const taskEl = createTask(
      items.title,
      items.description,
      items.due,
      items.tag,
      items.category
    );
    //Gerði líka class fyrir verkefnin til að auðvelda css
    taskEl.classList.add(taskClassName);
    container.appendChild(taskEl);
    cnt++;
  }
}

//function-ið til að sorta, þarf að bæta örgl í það til að verkefnalistinn breytist
function createSorter(container) {
  const sortSection = el("section");
  //class til fyrir css
  sortSection.classList.add("sort__items");

  //Kalla á function sem er inn í helpers.js
  const taskSorted = sortTaskList();
  sortSection.appendChild(taskSorted);

  container.appendChild(sortSection);
}

function createMenu(container) {
  const menuSection = el("section");
  menuSection.classList.add("category__items");

  const menuElement = el("div");
  const verkefni = el("h3", "Verkefni");
  menuElement.appendChild(verkefni);
  const klarad = el("h3", "Kláruð verkefni");
  menuElement.appendChild(klarad);
  menuSection.appendChild(menuElement);

  const categories = el("div");
  const catEl = el("h2", "Flokkar");
  categories.appendChild(catEl);
  const vefforrit = el("h3", "Vefforrit");
  categories.appendChild(vefforrit);
  const skipulag = el("h3", "Skipulag");
  categories.appendChild(skipulag);
  const vefthjon = el("h3", "Vefþjónustur");
  categories.appendChild(vefthjon);
  menuSection.appendChild(categories);

  const tags = el("div");
  const tagsEl = el("h2", "Tags");
  tags.appendChild(tagsEl);
  const vefforritTags = el("h3", "Vefforrit");
  tags.appendChild(vefforritTags);
  const skipulagTags = el("h3", "Skipulag");
  tags.appendChild(skipulagTags);
  const vefthjonTags = el("h3", "Vefþjónustur");
  tags.appendChild(vefthjonTags);
  menuSection.appendChild(tags);

  container.appendChild(menuSection);
}
