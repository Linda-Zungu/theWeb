var names = ["Javascript", "Some Product", "3", "4", "5"];
var i;

for(i = 0; i < names.length; i++){
    var k = document.getElementsByClassName("itemForSale");
    k[i].innerText = names[i];   
}

// document.write(getProductNames());

function getProductNames(){
    return self.names;
}
