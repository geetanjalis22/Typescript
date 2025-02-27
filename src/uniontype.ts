function kgToLbs(weight: number | string): number{
//Narrowing(Methods are not specific to numbers and strings)
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');