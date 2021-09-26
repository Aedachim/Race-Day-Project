let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const age = 18;

if (age > 18 && registeredEarly === true) {
raceNumber += 1000;
}

if (age > 18 && registeredEarly === false) {
  raceNumber += 1000;
  console.log(`Runners ${raceNumber} who are ${age} years old and registerd early will run at 9:30 am.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Runners ${raceNumber} who are ${age} years old and did not register early will run at 11:00 am.`);
} else if (age < 18 && !registeredEarly) {
  console.log(`Runners ${raceNumber} who are ${age} years old and registerd early/late will run at 12:30 pm.`);
} else if (age === 18 && !registeredEarly === true) {
  console.log(`Runner ${raceNumber} who is ${age} years old and registered early/late should see the registration desk.`);
} else {
  console.log(`Runner ${raceNumber} see the registration desk!`);
}