const links = [
  {
    text: "bio",
    url: "https://es.wikipedia.org/wiki/Jos%C3%A9_Antonio_Torres_Sol%C3%ADs",
  },
  {
    text: "música",
    url: "https://www.youtube.com/watch?v=CRXPTconOR0&list=PLC464A06ABD8CE4E2",
  },
  {
    text: "marimba de chonta",
    url: "https://www.senalcolombia.tv/documental/el-viaje-de-la-marimba-instrumento",
  },
  {
    text: "geografia",
    url: "https://es.wikipedia.org/wiki/Regi%C3%B3n_del_Pac%C3%ADfico_(Colombia)",
  },
];

const anchor_from_urls = function (urls) {
  const anchors = [];

  urls.forEach(({ text, url }) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.textContent = text;

    anchors.push(a);
  });

  return anchors;
};

const create_li_fragment = function (elements) {
  const fragment = document.createDocumentFragment();

  elements.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(element);
    fragment.appendChild(li);
  });

  return fragment;
};

const loadLinks = function () {
  const nav = document.getElementById("navbar");
  const ul = document.createElement("ul");

  const anchors = anchor_from_urls(links);
  const fragment = create_li_fragment(anchors);

  ul.appendChild(fragment);
  nav.appendChild(ul);
};

document.addEventListener("DOMContentLoaded", loadLinks);
