var sortMeglobal; //define esta variable global para luego usarla en la otra funcion.
var arrayLengthglobal;
var symbolglobal;
function cardSort() {
  container.innerHTML = "";
  // container1.innerHTML = "";
  var arrayLength = document.getElementById("fnumber").value;
  var sortMe = new Array();
  var i = 0;
  symbol = [];
  for (; i < arrayLength; i++) {
    sortMe[i] = Math.floor((Math.random() * 13) + 1);
    let symbolarray = ["&diams;", "&spades;", "&hearts;", "&clubs;"];
    var randomsymbol = Math.floor(Math.random() * symbolarray.length);
    symbol1 = symbolarray[randomsymbol];
    symbol.push(symbol1);

    let card = document.createElement("div");
    card.classList.add("card");


    let p = document.createElement("span");
    p.innerHTML = symbol1;
    let r = document.createElement("span");
    r.innerHTML = symbol1;
    r.classList.add("downCard");

    let n = document.createElement("span");
    n.innerHTML = sortMe[i];
    let l = document.createElement("span");
    l.innerHTML = sortMe[i];
    l.classList.add("downCard1");

    card.appendChild(p);
    card.appendChild(n);
    card.appendChild(l);
    card.appendChild(r);
    container.appendChild(card);
  }


  console.log(sortMe)
  sortMeglobal = sortMe;
  arrayLengthglobal = arrayLength;
  //   card.classList.remove("card")
}



function cardSortbubble() {
  container1.innerHTML = "";
  let sortMe1 = sortMeglobal;
  let wall = sortMe1.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (sortMe1[index] > sortMe1[index + 1]) {
        let aux = symbol[index];
        symbol[index] = symbol[index + 1];
        symbol[index + 1] = aux;
      }
      //compare the adjacent positions, if the right one is bigger, we have to swap
      index++;
    }
    wall--; //decrease the wall for optimization
  };
  let min = 0;
  while (min < sortMe1.length) {
    for (let i = min + 1; i < sortMe1.length; i++) {
      if (sortMe1[min] > sortMe1[i]) {
        let aux = sortMe1[min];
        sortMe1[min] = sortMe1[i];
        sortMe1[i] = aux;
      }
    }
    let contenedor = document.createElement("div");
    // let bucle = document.createElement("div");    
    for (i = 0; i < sortMe1.length; i++) {
      let sort = document.createElement("div");
      sort.classList.add("sort");

      let p = document.createElement("span");
      p.innerHTML = symbol[i];
      let r = document.createElement("span");
      r.innerHTML = symbol[i];
      r.classList.add("downCard");

      let n = document.createElement("span");
      n.innerHTML = sortMe1[i];
      let l = document.createElement("span");
      l.innerHTML = sortMe1[i];
      l.classList.add("downCard1");

      sort.appendChild(p);
      sort.appendChild(n);
      sort.appendChild(l);
      sort.appendChild(r);
      // container1.appendChild(sort);
      console.log(sortMe1);
      contenedor.appendChild(sort);
    }
    container1.appendChild(contenedor);
    min++;
  }
};