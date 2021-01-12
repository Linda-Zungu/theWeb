// var names = ["Javascript", "Some Product", "3", "4", "5"];
// var i;

// for(i = 0; i < names.length; i++){
//     var k = document.getElementsByClassName("itemForSale");
//     k[i].innerText = names[i];   
// }

// // document.write(getProductNames());

// function getProductNames(){
//     return self.names;
// }


const navSlide = ()=>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active")

        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ``
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`
            }
            
        })

        //Burger Animation(when it changes to make an X)
        burger.classList.toggle("toggle");
    });
}

navSlide();