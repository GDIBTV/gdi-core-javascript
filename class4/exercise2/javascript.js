$(document).ready(function(){
    getMeetups();
    $('.box').on({
        click: function() {
          $(this).css('background-color', 'green')
          $(this).html('Clicked!')
        },
        mouseenter: function() {
          $(this).css('background-color', 'purple')
          $(this).html('Hi!')
        },
        mouseleave: function(){
          $(this).css('background-color', 'orange')
          $(this).html('Bye!')
        }
    });
    $('#calculate').on('submit',function(event){
        var givenAge = $('#age').val();
        var givenSnack = $('#snack').val();
        var givenPerDay = $('#times-per-day').val();
        $('#lifetime-supply').html(calculate(givenAge, givenSnack, givenPerDay));
        event.preventDefault();
    });
    $('#favorites').on('submit',function(event){
        var givenThing = $('#thing').val();
        favoriteThings(givenThing);
        event.preventDefault();
    });
    $('#friends').on('submit',function(event){
       var name = $('#friend-name').val();
       var hair = $('#friend-hair').val()
       var friend = {name: name, hair:hair};
        myFriends(friend);
        event.preventDefault();
    });
});

function getMeetups(){
	var api_key = "50722e1d56c194e61763a2ee1e4535";
	var url = "https://api.meetup.com/2/";
	var method = "open_events"
	$.ajax({
		url: url + method,
		data: {
		  key: api_key,
		  lat: 40.7143528,
		  lon: -74.0059731,
		  topic: 'JavaScript'
		},
		crossDomain: true,
		dataType: 'jsonp',
		type: "GET",
		success: function (data) {
		    parseMeetups(data.results)
		},
		error: function(data) {
			console.log("Error", data);
		}				
	});
}

function parseMeetups(results){
   for(var i = 0; i < results.length; i ++){
       var $div = $('<div class ="event"></div>');
       var $name = $('<div> Name: '+ results[i].name+'</div>');
       var $description = $('<div> Description: '+ results[i].description+'</div>');
       var $group = $('<div> Group: '+ results[i].group.name+'</div>');
       var $link = $('<div> Learn More: <a href ="'+results[i].event_url+'" target = "_blank">'+results[i].event_url+'</a></div>')
       $div.append($name, $description, $group, $link);
       $('#events').append($div);
   } 
}

function calculate(age, snack, perDay){
    var oldAge = 96;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    if(total > 40000){
        return "You will need " + total + " of " + snack + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!";
    }else{
        return "You will need " + + total + " of " + snack +  " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable";
    } 
}

function favoriteThings(thing){
    $('#favorite-things').append('<p>'+ thing +'</p>');
}
function myFriends(friend){
    var $resultDiv = $('<div></div>')
    var $resultParagraph = $('<p>' + describeFriend(friend) + '</p>');
    $resultDiv.append($resultParagraph);
    $('body').append($resultDiv);
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}