$(function () {
    
    $('.carousel').carousel();
    var seachIn = document.getElementById('searchInput');
    $("#sBtn").click(function() {
        console.log('ndsjkfh');
        if(!seachIn.validity.patternMismatch && !seachIn.validity.valueMissing){
            $.ajax({
            method: "POST",
            url: "/api/subscribe",
            data: $("#searchInput").val(),
            contentType:"text/plain"
        }).done(function (msg) {
            $('#error-msg').addClass('sucess');
            $('#error-msg').html('Thanks for subscribing. We will contact you soon');
            console.log("Data Saved sat: " + msg);
        });
        } else {
            $('#error-msg').addClass('error');
            $('#error-msg').html('Enter your vaild email id');
        }
        
    })
});




