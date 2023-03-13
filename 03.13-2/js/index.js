
const acc = document.getElementsByClassName("accordion");
let i;
for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
            // this.children[0].classList.remove('fa-plus');
            // this.children[0].classList.add('fa-minus');
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            // this.children[0].classList.remove('fa-plus');
            // this.children[0].classList.add('fa-minus');
        }
    })
}
