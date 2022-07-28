const validateEmail=email=>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    return false;
}

let ulaz=document.querySelector("input");
let gumb=document.querySelector("button");
let warning=document.querySelector(".notify span");
gumb.addEventListener("click",()=>{
    if(!validateEmail(ulaz.value)){
        ulaz.style="border-color:hsl(354, 100%, 66%);";
        ulaz.value="example@email/com";
        warning.style="display:block;";
    }
    else{
        ulaz.style="border-color: hsl(223, 100%, 88%);";
        warning.style="display:none;";
    }
});
