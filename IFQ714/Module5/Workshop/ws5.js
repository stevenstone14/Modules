const fs = require('fs');
const sales = JSON.parse(fs.readFileSync("sales.json", "utf8"));
const employees = JSON.parse(fs.readFileSync("employees.json", "utf8"));

function viewAllEmployees(){
    employees.forEach(function (element){
        console.log(JSON.stringify(element));
    });
}
function viewAllSales() {
    sales.forEach(function (element) {
        console.log(JSON.stringify(element));
    });
}

function mapSalesToEmployees(){
const employeeSales = employees.map(function(employee){
    const e = Object.assign({},employee);
    e.sales = sales.filter(function (element){ if(employee.id === element.staffId) return element;});
    return e;
})
return employeeSales;
}

console.log(mapSalesToEmployees())

function checkComissions(){
const employeeData = mapSalesToEmployees();
employeeData.forEach(function (employee){
    try{
        if(employee.sales.length < 1){
            throw new Error("Employee has made no sales!");
        } else {
            let total = 0;
            employee.sales.forEach(function (sale){
                total += sale.price;
            });
            let comission = total * 0.1;
            console.log(`${employee.firstName} ${employee.lastName} gets a comission of ${comission.toFixed(2)} dollars.`);
        }
    } catch (error) {
        console.log(`Failed to calculate commission for ${employee.firstName} ${employee.lastName}: ${error.message}`);
    }
});
}

//Input should be x > 0, y >= 0.
function greatestCommonDivisor(x, y) {
    if (y === 0) {
        return x;
    } else {
        return greatestCommonDivisor(y, x % y);
    }
}

//console.log(greatestCommonDivisor(1,54))

//checkComissions();