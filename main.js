const colorBtn = document.getElementById("colorbtn")

colorBtn.addEventListener("click",()=>{
    document.body.classList.toggle("darkTheme")
    //alert(colorBtn.firstChild.classList.contains("fa-lightbulb"))
    if(colorBtn.firstChild.classList.contains("fa-lightbulb")){
        colorBtn.firstChild.classList.remove('fa-lightbulb')
        colorBtn.firstChild.classList.add('fa-moon')
    }else{
        colorBtn.firstChild.classList.remove('fa-moon')
        colorBtn.firstChild.classList.add('fa-lightbulb')
    }
})