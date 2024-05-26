const accounId = 121212
var accountEmail = "abc@gamil.com"
let accountPassword = "909090"
accountCity = "Surat"
let accounState; 

// accounId = 898989


// prefer not to use var because of issue in block scope and functional scope

accountEmail = "xyz@gmail.com"
accountPassword = "121212"
accountCity = "gujarat"

// console.log(accounId);
console.table([accounId , accountEmail ,accountPassword, accountCity , accounState])