// Add info for color coded indicators for past present and future time blocks.
// Add Current time for Jumbotron current date.
// Add all entered information to local storage. 
// Even on refresh all added information is saved.

// Had help looking through the code and understanding exactly how everything works from this persons code https://github.com/WillV1/day-planner
//Was stumped on how to really start the code from scratch for js myself and the comments and rewatching past videos helped me understand exactly how the code written out here works properly.

var button = $('.saveBtn')

//This calls the current date to the html document to the proper id location. 
$(document).ready(function () {
    var date = moment().format('MMMM Do YYYY');
    
    $('#currentDate').text(date);


//This function calls on the current hour from moment and brings it to each time block
    function currentTime() {
        var current = moment().hours()
        var time = $('.time-block');

        //This function parses each time-block and checks to see if each time block is in the past current or future.
        //When it checks each time block it will then add a new class that is called from our custom css file. 
        time.each(function () {
            var hour = parseInt($(this).attr('id'))

            if (hour === current) {
                $(this).children('.col-sm-10').attr('class','current col-sm-10 description')
            } else if (current > hour) {
                $(this).children('.col-sm-10').attr('class','past col-sm-10 description')
            } else {
                $(this).children('.col-sm-10').attr('class','future col-sm-10 description')
        }
    })
}
currentTime()

//Allows to click on and add information to textarea that will be saved to loclastorage for future use even after refresh.
button.on('click', function (event) {
    event.preventDefault();
    var text = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
    var parent = $(this).parent().attr('id');
    localStorage.setItem(parent, JSON.stringify(text));
}) 

    $('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
    $('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''));
    $('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
    $('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
    $('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
    $('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
    $('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
    $('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
    $('#17 textarea').val(localStorage.getItem('17')).replace(/['"]+/g, '');
    

    button.on('click', function (event) {
        $('selector').css('cursor', 'i')
    })
});