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
  orderEl.classList.add("order__el");
  section.appendChild(orderEl);
  return section;
}

//Var að reyna fnna leið til að láta task vera completed þrátt fyrir að refresha browser og þannig
//Var ekki komin lengra þannig þetta function gerir ekki neitt
export function isCompleted() {
  var checkBox = document.getElementsByClassName("checkbox-round");
  if (checkBox.checked == true) {
    console.log("Checked");
  } else {
    console.log("Not checked");
  }
}

export function createTask(title, description, due, tag, category) {
  const section = el("section");
  const titleElement = el("div");
  titleElement.classList.add("rounded_checkbox");

    //Færði divider línurnar fyrir ofan hvert task,
    //kannski ekkert betra.
    const divider = document.createElement("hr");
    section.appendChild(divider);

  //Breytti frá radio yfir í checkbox
  const checkbox = el("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox-round");
  titleElement.appendChild(checkbox);

  const titleEl = document.createElement("strong");
  titleEl.textContent = title;
  titleElement.appendChild(titleEl);
  section.appendChild(titleElement);

  const desEl = el("p", description);
  section.appendChild(desEl);

  const categoryEl = el("div");
  const dueEl = el("p", "date");
  categoryEl.appendChild(dueEl);

  const tagEl = el("p", "tag");
  categoryEl.appendChild(tagEl);

  const cat = el("p", category);
  categoryEl.appendChild(cat);
  categoryEl.classList.add("date__el");
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

/**
 * Fjarlægir öll börn `element`.
 * @param {HTMLElement} element Element sem á að tæma
 * @returns {undefined} Skilar engu
 */
export function empty(element) {
  if (!element || !element.firstChild) {
    return;
  }

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
