// . + CTRL + SPACE short cut 
//var Fruit = 'Pera';

//PROMPT - User info
var User = prompt ('Username');
var Age = prompt ('How old are you?');

// Alert- Log in
alert ('Your username is '+ User +', you are '+ Age + ' years old')
console.log("The User is " + User);
// Conditionals - how to choose your dessert
let Dessert = prompt ('What type of dessert do you prefer? Do you preffer cold or warm desserts?').toLowerCase()

if(Dessert == 'warm'){
    alert ('You may like cakes and cookies as a choice');
    console.log(User + ' likes warm desserts');
}
else if(Dessert == 'cold'){
    alert('You may preffer ice-cream and chocolate');
    console.log(User + ' likes cold desserts');
}
else{ 
    alert('Please insert a given value');
    console.log(User + ' has not given us a suggested value.');
    let NoValue = prompt ('Cold or Warm?').toLowerCase();
    if(NoValue == 'warm'){
        alert ('You may like cakes and cookies as a choice');
        console.log(User + ' likes warm desserts');
    }
    else if(NoValue == 'cold'){
        alert('You may preffer ice-cream and chocolate');
        console.log(User + ' likes cold desserts');
    }
}

// TITULO H1
document.write('<h1>Welcome to your recepies</h1>'+ User);