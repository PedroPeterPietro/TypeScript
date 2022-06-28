

// O código TypeScript desenvolvido para resolver o desafio 1 proposto no projeto

//interface

interface employee {
    code: number,
    name: string,
    age: number,
    scholarship: string
}
 
//extensão da interface
interface employeeService extends employee {
    office: 'manager'| 'supervisor'| 'programmer'| 'engineer',
    contract: string
}

//dados do funcionario 1
const employee1: employeeService = {
    code: 220,
    name: "Jhon",
    age: 20,
    office: 'programmer',
    contract: 'full',
    scholarship: 'Graduated',
}

console.log(employee1.name)