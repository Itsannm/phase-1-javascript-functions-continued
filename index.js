// code your solution here
//defining function using a function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun("go swimming"));  // "This Saturday, I want to go swimming!"
  console.log(saturdayFun());               // "This Saturday, I want to roller-skate!"

//defining a function Using a function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  console.log(mondayWork("work from home"));  // "This Monday, I will work from home."
  console.log(mondayWork());                  // "This Monday, I will go to the office."

  //defining scope chain
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer"));  // "You are !!!a dedicated programmer!!!"
  console.log(wrapAdjective("%")("a dedicated programmer"));         // "You are %a dedicated programmer%!"
    