menuListArray = ["Pizza de calabresa","Pizza vegetariana","Pizza marguerita","Pizza portuguesa","Pizza de frango com catupiry"];

function getMenu(){
var htmldata = "";
menuListArray.sort()
for(var i=0;i<menuListArray.length;i++){ htmldata=htmldata+ menuListArray[i] + '<br>' }
document.getElementById("displayMenu").innerHTML = htmldata
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>';
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){ htmldata=htmldata+ menuListArray[i] + '<br>' }
document.getElementById("displayMenu").innerHTML = htmldata
}

function addTop(){
var item = document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}