import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";


function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  
  MesaVerde(); // => "Mesa Verde National Park"
  console.log(RMFunctions.trees);// "Aspen and Pine"
  console.log(RMFunctions.wildlife); // "Elk, Bighorn Sheep, Moose"
  console.log(RMFunctions.elevator);//Attempted import error

  return <h1>Colorado State Parks!</h1>;
}
