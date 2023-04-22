const accordionBtn = document.querySelectorAll('.bxs-chevron-down');
console.log(accordionBtn)

for(let ind = 0; ind < accordionBtn.length; ind++){
    accordionBtn[ind].addEventListener('click', function() {
        // this.classList.toggle('active');
        console.log(this)
        let accordionBody = this.parentElement.parentElement.querySelector('.text');
        if(accordionBody.style.maxHeight){
            accordionBody.style.maxHeight = null;
        }else{
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }
    });
}