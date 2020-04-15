
$(document).ready(function(){
    $('.datepicker').datepicker();
  });

$(document).ready(function(){
    $('.timepicker').timepicker();
  });

 //setItem()	Add key/value in LocalStorage
// getItem()	Get a value from LocalStorage
// removeItem()	Remove item by its key
// clear()	Remove all items from LocalStorage
// key()	Get a key of an item from LocalStorage


localStorage.clear();

//to let us get the local storage submitted

for (let i = 0; i < localStorage.length; i++) {
  let storedValue = localStorage.key(i);
  console.log(`Item at ${i}: ${storedValue}`);
}

let order = {
  name: "foodOrder",
  
};

localStorage.setItem("foodOrder", order);