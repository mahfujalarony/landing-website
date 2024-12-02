var acc = document.getElementsByClassName("according");
var i;

if(acc.length > 0){
    acc[0].classList.add("active");
    var panel = acc[0].nextElementSibling;
    if(panel) {
        panel.style.display = "block";
        panel.style.backgroundColor = "#b9ff66";
    }
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle = "active";
        var panel = this.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        
        } else {
            panel.style.display = "block";
            panel.style.backgroundColor = "#b9ff66"
        }
    })
}