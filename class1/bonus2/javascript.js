function calculate(){
    var age = prompt('How old are you?', 36);
    var oldAge = 96;
    var perDay = 2;

    if (age < 0 || age > oldAge) {
        alert("You're either not yet born or already older than your maximum age. Either way, you don't need any!");
    } else if (isNaN(age)) {
        alert("Sorry, " + age + " is not a number! We can't calculate anything.");
    } else if (age !== "") {
        var days = (oldAge - age) * 356;
        var total = perDay * days;
        if(total > 40000){
            alert("You will need " + total + " to last you until your old age of " + oldAge + ". Wow! That's a lot!");
        }else{
            alert("You will need " + total + " to last you until your old age of " + oldAge + ". You seem pretty reasonable");
        }        
    }
}
