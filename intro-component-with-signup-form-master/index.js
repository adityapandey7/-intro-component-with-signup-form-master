"use strict";
const btn = document.querySelector(".btn_ins");

btn.addEventListener('click', function(){
  console.log("Hello");
  const inputValue = document.querySelectorAll("input");
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  for(let i=0;i<inputValue.length;i++)
  {
    if(inputValue[i].value.length==0)
    {
      if(i==3)
      {
         if(!inputValue[i].value.match(mailformat))
         {
           const msg = document.querySelectorAll(".error_msg");

           msg[i].classList.add("active");
           inputValue[i].classList.add("error");
         }

      }
      else{
        const msg = document.querySelectorAll(".error_msg");

        msg[i].classList.add("active");
        inputValue[i].classList.add("error");
      }

    }
  }
});
// const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(email.value.match(mailformat)){
//    return true;
//  }
