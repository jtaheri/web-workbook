'use strict';

document.addEventListener("DOMContentLoaded", function(event) {

    // You code here

    var numberOfItems = document.getElementById('div').children;

    //alert("There are "+numberOfItems.length+" list items on this page.");

    var cartItemCount = document.getElementById('cartItemCount');

    var cartItems = document.getElementById('list').children;

    cartItemCount.innerHTML = "You have "+cartItems.length+" items in your shopping cart.";


    // function getCount(parent, getChildrensChildren){
    //     var relevantChildren = 0;
    //     var children = parent.childNodes.length;
    //     for(var i=0; i < children; i++){
    //         if(parent.childNodes[i].nodeType != 3){
    //             if(getChildrensChildren)
    //                 relevantChildren += getCount(parent.childNodes[i],true);
    //             relevantChildren++;
    //         }
    //     }
    //     return relevantChildren;
    // }
    //
    // var numberOfItems = document.getElementById('div');
    // // alert(numberOfItems.length);
    // //console.log(numberOfItems);
    // alert("There are "+getCount(div, false)+" list items on this page.");
});

function addItem1(){
  var ul = document.getElementById('list');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode("All-New Fire 7 Tablet"));
  ul.appendChild(li);
}

function addItem2(){
  var ul = document.getElementById('list');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode("Flash Furniture Yellow Metal Indoor-Outdoor Chair with Arms"));
  ul.appendChild(li);
}

function addItem3(){
  var ul = document.getElementById('list');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode("Amazon Echo"));
  ul.appendChild(li);
}

function addItem4(){
  var ul = document.getElementById('list');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode("Coleman Lay Z Spa Inflatable Hot Tub"));
  ul.appendChild(li);
}
