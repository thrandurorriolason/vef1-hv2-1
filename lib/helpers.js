//Gerði nýtt function til að flokkurnar dæmið kæmi ekki með lykkjunni þegar task er created
//Copyaði bara það sem var fyrir neðan í createTask function
export function sortTaskList() {
  const section = el("section");
  const orderEl = el("div");
  const order = el("p", "Raða eftir: ");
  orderEl.appendChild(order);
  const option = el("select");
  const o1 = el("option", "Dagsetningu");
  const o2 = el("option", "Forgangi");
  const o3 = el("option", "Titli");
  option.appendChild(o1);
  option.appendChild(o2);
  option.appendChild(o3);
  orderEl.appendChild(option);
  section.appendChild(orderEl);
  return section;
}

export function createTask(title, description, due, tag, category) {
  const section = el("section");
  const titleElement = el("div");

  const radio = el("input");
  radio.setAttribute("type", "radio");
  titleElement.appendChild(radio);

  const titleEl = document.createElement("strong");
  titleEl.textContent = title;
  titleElement.appendChild(titleEl);
  section.appendChild(titleElement);

  const desEl = el("p", description);
  section.appendChild(desEl);
  if (!description) {
    desEl.textContent = "Lýsing á verkefni ef einhver";
  }

  const categoryEl = el("div");
  const dueEl = el("p", "date");
  categoryEl.appendChild(dueEl);
  const tagEl = el("p", "tag");
  categoryEl.appendChild(tagEl);
  const cat = el("p", "flokkur");
  categoryEl.appendChild(cat);
  section.appendChild(categoryEl);

  return section;
}

/**
 * Býr til element með nafni og bætir við öðrum elementum eða texta nóðum.
 * @param {string} name Nafn á elementi
 * @param  {...string | HTMLElement} children Hugsanleg börn: önnur element eða strengir
 * @returns {HTMLElement} Elementi með gefnum börnum
 */
export function el(name, ...children) {
  const e = document.createElement(name);

  for (const child of children) {
    if (typeof child === "string") {
      e.appendChild(document.createTextNode(child));
    } else {
      e.appendChild(child);
    }
  }

  return e;
}
