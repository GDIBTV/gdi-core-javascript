function calculate(){
    var age = prompt('How old are you?', 36);
    var oldAge = 96;
    var perDay = 2;

    if (age < 0 || age > oldAge) {
        alert("You're either not yet born or already older than your maximum age. Either way, you don't need any!");
    } else if (isNaN(age)) {
        alert("Sorry, " + age + " is not a number! We can't calculate anything.");
    } else if (age !== "" && age !== null) {
        var days = (oldAge - age) * 356;
        var total = perDay * days;
        if(total > 40000){
            alert("You will need " + total + " to last you until your old age of " + oldAge + ". Wow! That's a lot!");
        }else{
            alert("You will need " + total + " to last you until your old age of " + oldAge + ". You seem pretty reasonable");
        }        
    }
}

function favoriteThings(){
    var favoriteThings = ['Rabbits', 'Orange', 'Yogurt', 'Brussel Sprouts', 'Otters'];
    var resultDiv = document.getElementById('favorite-things');
    
    var resultParagraph = document.createElement('p');
    var result = 'My favorite things are: ';
    
    for (var i = 0; i<favoriteThings.length; i++){
        if (i < favoriteThings.length - 1){
            result += favoriteThings[i] + ', ';
        }else{
            result += "and " + favoriteThings[i] + '.';
        }
    }
    var resultText = document.createTextNode(result);
    resultParagraph.appendChild(resultText);
    resultDiv.appendChild(resultParagraph);
}
function myFriends(){
    var friends = [
        {name: 'Santa Claus',
        hair: 'red'},
        {name: 'Easter Bunny',
        hair: 'brown'},
        {name: 'Tooth Fairy',
        hair: 'blue'}
    ];
    var resultDiv = document.createElement('div');
    
    var introParagraph = document.createElement('p');
    var introText = document.createTextNode('My friends are:');
    introParagraph.appendChild(introText);
    resultDiv.appendChild(introParagraph);
    
    for(var i = 0; i < friends.length; i++){
        var resultParagraph = document.createElement('p');
        var resultText = document.createTextNode(describeFriend(friends[i]));
        resultParagraph.appendChild(resultText);
        resultDiv.appendChild(resultParagraph);
    }
    document.body.appendChild(resultDiv);
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}