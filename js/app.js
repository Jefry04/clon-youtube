const items = document.getElementById("items")
const templateCard =document.getElementById("template__card").content
const fragment= document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", (e) => {
  fetchDataFilters();
  fetchData();
});

const fetchDataFilters = async () => {
  try {
    const response = await fetch("../mockData/filters.json");
    const filters = await response.json();
    printButton(filters);
  } catch (error) {
    console.log(error);
  }
};

const fetchData = async () => {
  try {
    const response = await fetch("../mockData/data.json");
    const videoData = await response.json();
    printVideoPreview(videoData);
  } catch (error) {
    console.log(error);
  }
};

const printButton = (filters) => {
  const divFilters = document.querySelector(".filter");
  filters.map((filter) => {
    const button = document.createElement("button");
    button.innerHTML = `${filter.filterName}`;
    divFilters.appendChild(button);
  });
};

const printVideoPreview = (videoData) => {
  videoData.map((video) => {
    templateCard.querySelector("h3").textContent = video.title;
    templateCard.querySelector("#name").textContent = video.name;
    templateCard.querySelector("#visite").textContent = video.visitas;
    templateCard.querySelector("img").setAttribute("src", video.videoSrc);
    templateCard.querySelector("#card__avatar__img").setAttribute("src", video.avatarSrc);
    templateCard.querySelector("#card__vector__img").setAttribute("src", video.checkSrc);

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone)
  });
  items.appendChild(fragment)
};
