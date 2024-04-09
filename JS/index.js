const filter = document.querySelector(".filtering");
const filterImg = document.querySelector(".filtering img");
const addList = document.querySelector(".add-list ul");
const addListDiv = document.querySelector(".add-list");
const deleteEnterList = document.querySelector(".delete-list");
const deleteEndList = document.querySelector(".delete-end-list");
const btnOne = document.querySelector(".btnOne");
const btnTwo = document.querySelector(".btnTwo");
const listsLi = document.querySelectorAll(".lists ul li");
const addListLi = document.querySelector(".add-list li");
const addListInput = document.querySelector(".add-list input");
const listsUl = document.querySelector(".lists ul");
const lists = document.querySelector(".lists");
const removeImg = document.querySelector(".add-list img");
console.log(removeImg);

let listArray = [];

btnOne.addEventListener("click", (e) => {
  addList.style.display = "block";
  e.preventDefault();
});

btnTwo.addEventListener("click", (e) => {
  if (addListInput.value.trim() !== "") {
    addList.style.display = "none";
    listsUl.style.display = "block";
    let newList = document.createElement("li");
    let listP = document.createElement("p");
    let listImg = document.createElement("img");
    listImg.setAttribute("src", "./İmages/Group 77.png");
    newList.className = "newList";
    listsUl.append(newList);
    newList.append(listP);
    newList.append(listImg);
    listP.textContent = addListInput.value;
    addListInput.value = "";

    listImg.addEventListener("mouseover", (e) => {
      listImg.setAttribute("src", "./İmages/Group 70.png");

      e.preventDefault();
    });
    listImg.addEventListener("mouseout", (e) => {
      listImg.setAttribute("src", "./İmages/Group 77.png");

      e.preventDefault();
    });

    new Sortable(listsUl, {
      animation: 200,
      ghostClass: "sortable-ghost",
    });

    listArray.push(listP.textContent);

    listImg.addEventListener("click", () => {
      newList.remove();
      listArray = listArray.filter((list) => list != listP.textContent);
    });
  }

  e.preventDefault();
});

filter.addEventListener("click", (e) => {
  if (filterImg.getAttribute("src") === "./İmages/Group 74.png") {
    filterImg.setAttribute("src", "./İmages/Group 90.png");
    let pList = document.querySelectorAll("li p");
    listArray.sort();
    Array.from(pList).forEach((p, i) => {
      p.textContent = listArray[i];
    });
  } else {
    filterImg.setAttribute("src", "./İmages/Group 74.png");
    let pList = document.querySelectorAll("li p");
    listArray.sort().reverse();
    Array.from(pList).forEach((p, i) => {
      p.textContent = listArray[i];
    });
  }
  e.preventDefault();
});

removeImg.addEventListener("mouseover", (e) => {
  removeImg.setAttribute("src", "./İmages/Group 70.png");

  e.preventDefault();
});
removeImg.addEventListener("mouseout", (e) => {
  removeImg.setAttribute("src", "./İmages/Group 77.png");

  e.preventDefault();
});