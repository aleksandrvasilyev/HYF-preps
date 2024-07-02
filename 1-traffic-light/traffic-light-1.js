"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */
const trafficLight = {
  state: "green",
};

let rotations = 0;

// do
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  if (currentState === "green") {
    trafficLight.state = "orange";
  } else if (currentState === "orange") {
    trafficLight.state = "red";
  } else if (currentState === "red") {
    trafficLight.state = "green";
    rotations += 1;
  }
  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to rotations and turn it green
}

//do-while
// do {
//   const currentState = trafficLight.state;
//   console.log("The traffic light is on", currentState);

//   if (currentState === "green") {
//     trafficLight.state = "orange";
//   } else if (currentState === "orange") {
//     trafficLight.state = "red";
//   } else if (currentState === "red") {
//     trafficLight.state = "green";
//     rotations += 1;
//   }
// } while (rotations < 2);

//for 
// for (let i = 0; i < 6; i++) {
//   const currentState = trafficLight.state;
//   console.log("The traffic light is on", currentState);

//   if (currentState === "green") {
//     trafficLight.state = "orange";
//   } else if (currentState === "orange") {
//     trafficLight.state = "red";
//   } else if (currentState === "red") {
//     trafficLight.state = "green";
//     rotations += 1;
//   }
// }


/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
