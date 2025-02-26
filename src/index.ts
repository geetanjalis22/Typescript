//To execute TS File, tsc filename.ts generates js file, node filename.js, output
//To generate dist file: tsc

// let sales= 123456789;
// let course: string = 'Typescript';
// let is_published: boolean = true;
// let level;

// //any type
// function render(document) {
//     console.log(document);
// }
// //Arrays
// let numbers: number[] = [];
// numbers.forEach(n => n.toFixed)
// //Tuples
// //1, 'Mosh'
// let user: [number, string] = [1, 'Mosh'];
// user.push(1);
// console.log(user);
//Enum
// const small = 1;
// const medium = 2;
// const large = 3;
// //PascalCase
// const enum Size { Small=1, Medium, Large };
// let mySize: Size = Size.Medium;
// console.log(mySize);
// function calculateTax(income: number, taxYear=2022): number{

//     if(taxYear <2022)
//         return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000); //Enable compiler options  noUnusedLocals, noUnusedParameters, noImplicitReturns
//Objects
let employee : {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1, name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);
    }
};
//To Run: tsc, node dist/index.js
