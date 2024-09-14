var x1, i1, j1, l1, ll1, selElmnt1, a1, b1, c1;
/* Look for any elements with the class "custom-select": */
x1 = document.getElementsByClassName("custom-select1");
l1 = x1.length;
for (i = 0; i < l1; i++) {
  selElmnt1 = x1[i].getElementsByTagName("select")[0];
  ll1 = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a1 = document.createElement("DIV");
  a1.setAttribute("class", "select-selected1");
  a1.innerHTML = selElmnt1.options[selElmnt1.selectedIndex].innerHTML;
  x1[i].appendChild(a1);
  /* For each element, create a new DIV that will contain the option list: */
  b1 = document.createElement("DIV");
  b1.setAttribute("class", "select-items1 select-hide1");
  for (j = 1; j < ll1; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c1 = document.createElement("DIV");
    c1.innerHTML = selElmnt1.options[j].innerHTML;
    c1.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y1, i1, k1, s1, h1, sl1, yl1;
        s1 = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl1 = s1.length;
        h1 = this.parentNode.previousSibling;
        for (i = 0; i < sl1; i++) {
          if (s1.options[i].innerHTML == this.innerHTML) {
            s1.selectedIndex = i;
            h1.innerHTML = this.innerHTML;
            y1 = this.parentNode.getElementsByClassName("same-as-selected1");
            yl1 = y1.length;
            for (k = 0; k < yl1; k++) {
              y1[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected1");
            break;
          }
        }
        h1.click();
    });
    b.appendChild(c1);
  }
  x1[i].appendChild(b1);
  a1.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect1(this);
    this.nextSibling.classList.toggle("select-hide1");
    this.classList.toggle("select-arrow-active1");
  });
}

function closeAllSelect1(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x1, y1, i1, xl1, yl1, arrNo1 = [];
  x1 = document.getElementsByClassName("select-items1");
  y1 = document.getElementsByClassName("select-selected1");
  xl1 = x1.length;
  yl1 = y1.length;
  for (i = 0; i < yl1; i++) {
    if (elmnt == y1[i]) {
      arrNo1.push(i)
    } else {
      y1[i].classList.remove("select-arrow-active1");
    }
  }
  for (i = 0; i < xl1; i++) {
    if (arrNo1.indexOf(i)) {
      x1[i].classList.add("select-hide1");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect1);