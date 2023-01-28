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

    })


})
