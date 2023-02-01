
let btn = document.getElementById("btn1")
let message = document.getElementById("old")


console.log(btn)
console.log(message)


function lot(value1, value2, value3, value4){
      let result = "";
      result = value1 + " " + value2 + " " + value3 + " " + value4
      return result

}


 submit=()=> {
     let finalresult = ""
     let Name = document.getElementById("username").value
     let EMAIL = document.getElementById("useremail").value
     let LGA = document.getElementById("LGA").value
     let reg = document.getElementById("reg").value
    finalresult = lot(Name,EMAIL,LGA,reg)
    message.textContent += finalresult
      finalresult = ""
      reset()
}


function reset(){
      
            Name=""
            EMAIL=""
            LGA=""
            reg=""
      
}