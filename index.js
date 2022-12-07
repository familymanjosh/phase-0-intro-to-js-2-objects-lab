// Write your solution in this file!
const employee = {
    name: "Josh",
    streetAddress: "666 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let employeeCopy = {...employee}
    console.log(employeeCopy)
    console.log(employeeCopy[key]=value)
    employeeCopy[key]=value
    return employeeCopy
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
} function deleteFromEmployeeByKey(employee, key,){
    const employeeCopy={...employee}
    delete employeeCopy[key]
    return employeeCopy;
} 
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
} 