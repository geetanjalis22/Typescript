type UserName = (n: string, m: string)=> string;
const func: UserName = (n,m) => {
    console.log(n, m);
    return n + m;
}
//const arr: number[number, number, number]=[234.3,343,34];
//const arr2: string[]= ["sad"];
//const arr2: Array<string>= ["Tech", "Test", "Works"];
