//PROMPT - User info
var User = prompt ('Username');
var Age = prompt ('How old are you?');

// Alert- Log in
alert ('Your username is '+ User +', you are '+ Age + ' years old')
console.log("The User is " + User);

// Conditionals - how to choose your dessert - with ester eggs
let Dessert = prompt ('What type of dessert do you prefer? Do you preffer cold or warm desserts?').toLowerCase()
//Conditional
if(Dessert == 'warm'){
    alert ('You may like cakes and cookies as a choice');
    console.log(User + ' likes warm desserts');
}
else if(Dessert == 'cold'){
    alert('You may preffer ice-cream and chocolate');
    console.log(User + ' likes cold desserts');
}
//Nesting de conditional 1.
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
    //Nesting de conditional 2.
    else{ 
        alert('Why are you doing this?');
    console.log(User + ' is reluctant to give us a suggested value.');
    let NoValue = prompt ('Cold or Warm?').toLowerCase();
    if(NoValue == 'warm'){
        alert ('You may like cakes and cookies as a choice');
        console.log(User + ' likes warm desserts');
    }
    else if(NoValue == 'cold'){
        alert('You may preffer ice-cream and chocolate');
        console.log(User + ' likes cold desserts');
    }
    //Nesting de conditional 3.
        else{ 
            alert('Stop it!');
        console.log(User + ' is toying with us.');
        let NoValue = prompt ('Cold or Warm?').toLowerCase();
    if(NoValue == 'warm'){
        alert ('You may like cakes and cookies as a choice');
        console.log(User + ' likes warm desserts');
    }
     else if(NoValue == 'cold'){
        alert('You may preffer ice-cream and chocolate');
        console.log(User + ' likes cold desserts');
    }
    //Nesting de conditional 4.
    else{
        alert('Okey I m done welcome to the page -.-')
        console.log(User+ ' we ll be watching you... 0.0')
    }
        }
    }
}
// TITULO H1
document.write('<h1>Welcome to your recepies</h1>'+ User)