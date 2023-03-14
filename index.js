function scuberGreetingForFeet(someValue){
  // Write your code here!
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  if (someValue <= 400) {
    return ("This one is on me!")
  } else if (someValue > 2000 && someValue <= 2500){
    return ("I will gladly take your thirty bucks.")
  } else if (someValue > 2500) {
    return ("No can do.")
  }

}

function ternaryCheckCity(isCity){
  // Write your code here!
  return ( isCity === 'NYC' ? 'Ok, sounds good.' : 'No go.' )
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return 'Bye.';
  }
}