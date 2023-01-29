//Storing values for different vaues
$(document).ready(function(){
    //Logging save button clicks
    $(".saveBtn").on("click", function(){
        console.log(`Click saved`);
    //Storing the value of each click
    let timeID = $(this).parent().attr("id")  //Storing save button click and hour (parent)
    let value = $(this).siblings(".description").val(); //Storing the text values (siblings)
    console.log(timeID);
    console.log(value)
    localStorage.setItem(timeID, value); //Setting up the local storage
    $(".notification").addClass('show');
    })

// Adding a function to colour code past, present and future timeblocks     
function timer(){
    let currentHour = moment().hours();
    for(let i = 0; i < $(".time-block").length; i++){
        let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
        console.log(hour)
        console.log(currentHour)
        if(hour<currentHour){
            $(".time-block")[i].classList.add("past")
        } else if(hour === currentHour){
            $(".time-block")[i].classList.add("present")
            $(".time-block")[i].classList.remove("past")
        } else {
            $(".time-block")[i].classList.remove("past")
            $(".time-block")[i].classList.remove("present")
            $(".time-block")[i].classList.add("future")
        }
    }
}
timer();

let interval = setInterval(timer, 50000);

// Setting uo the current date
$("#currentDay").text(moment().format("dddd, MMMM, Do"))
})