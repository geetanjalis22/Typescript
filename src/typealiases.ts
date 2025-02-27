// type Employee = {      //PascalCase
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee : Employee = {
//     id: 1,
//     name: 'Mosh',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };
type Employee = {
    id: number;
    name: string;
    role: string;
    retire: (date: string) => void;
};

const employee: Employee = {
    id: 1,
    name: "Mosh",
    role: "Developer",
    retire: (date: string) => {
        console.log(`Employee ${employee.name} is retiring on ${date}`);
    }
};
employee.retire("2025-12-01");
//Output: E:\Typescript>tsc

// E:\Typescript>node dist/typealiases.js
// Employee Mosh is retiring on 2025-12-01
