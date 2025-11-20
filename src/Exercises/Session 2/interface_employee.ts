
interface Person {
    name: string,
   age: string,

};

interface Employee extends Person{
    department: string,
   salary: number,
    
}

let employee : Person & Employee ={
    name: "Emmanuel",
    age:" 20",
    department:"finance" ,
    salary :5000,
    
}

console.log(employee) 