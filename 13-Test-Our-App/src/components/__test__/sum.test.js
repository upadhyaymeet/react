import {sum} from "../sum"

it("Should Function Calculated the sum of two numbers",()=>{
   //Call the function
    const result = sum(3,4)
    //Assertion provided by jest
    expect(result).toBe(7) 
}) 

