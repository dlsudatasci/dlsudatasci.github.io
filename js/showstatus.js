/* $(function(){
    
    var card = $("#courses-cards .courses-cards-container");
    var cardsCount = card.length;

 if($("#activecheckbox").prop("checked")){    
    
     for(var i = 0; i < cardsCount; i++){
         
     }
     console.log(cardsCount);
     console.log("active checked");
     
 } 


});*/

function showActive() {
    var cards = document.getElementsByClassName("courses-cards-container");
    var active = document.querySelector("#activecheckbox:checked");
    var activecb = document.getElementById("activecheckbox");
    var i, status;

    if(active !== null){
        for(i = 0; i < cards.length; i++){
            status = cards[i].querySelector(".status h6").textContent;
            if(status === "Active"){
                cards[i].classList.remove("visually-hidden")
            } 
        }
    }
    else if(active === null){
        activecb.setAttribute("checked", "none");
        for(i = 0; i < cards.length; i++){
            status = cards[i].querySelector(".status h6").textContent;
            if(status === "Active"){
                cards[i].classList.add("visually-hidden")
            } 
        }
    }
}

function showUpcoming() {
    var cards = document.getElementsByClassName("courses-cards-container");
    var upcoming = document.querySelector("#upcomingcheckbox:checked");
    var upcomingcb = document.getElementById("upcomingcheckbox");
    var i, status;

    if(upcoming !== null){
        for(i = 0; i < cards.length; i++){
            status = cards[i].querySelector(".status h6").textContent;
            if(status === "Upcoming"){
                cards[i].classList.remove("visually-hidden")
            } 
        }
    }
    else if(upcoming === null){
        upcomingcb.setAttribute("checked", "none");
        for(i = 0; i < cards.length; i++){
            status = cards[i].querySelector(".status h6").textContent;
            if(status === "Upcoming"){
                cards[i].classList.add("visually-hidden")
            } 
        }
    }
}

