import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './recipe.model';

@Pipe({
  name: "made",
  pure: false
})


export class MadePipe implements PipeTransform {
  transform(input: Recipe[], desiredMade) {
    let output: Recipe[] = [];
    if(desiredMade === "made") {
      for(let i = 0; i < input.length; i ++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMade === "unmade") {
      for(let i = 0; i < input.length; i ++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
