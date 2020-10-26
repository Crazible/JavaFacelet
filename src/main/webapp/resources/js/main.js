


const selected = "selected",
      graph_hidden = "graph-hidden",
      table_hidden = "table-hidden";

const menuList = document.querySelectorAll('div.menu'),
      graph = document.querySelector('div.graph-field'),
      table = document.querySelector('#table');

const onGraph = function() {
    menuList[0].classList.add(selected);
    menuList[1].classList.remove(selected);
    graph.classList.remove(graph_hidden);
    table.classList.add(table_hidden);
    window.scrollTo(0, 0);
}

const onTable = function() {
    menuList[0].classList.remove(selected);
    menuList[1].classList.add(selected);
    graph.classList.add(graph_hidden);
    table.classList.remove(table_hidden);
    window.scrollTo(0, 0);
}
