type Customer = {
    birthday: Date
};
function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
//optional property access operator
// if (customer != null && customer!==undefined) Instead of this use optional chaining
console.log(customer?.birthday?.getFullYear());
//To execute tsc && node dist/optionalchaining.js

//Optional element access operator
//Optional call
let log: any = null;
log?.('a');