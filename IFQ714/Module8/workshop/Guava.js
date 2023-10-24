// Data for employee and sales. Since you've been able to put it in your 
// scripts by now, we'll include it here for you.
const employees = [{
    "id":1,
    "firstName":"John",
    "lastName":"Smith",
    "gender":"Male",
    "age":23,
    "position":"Manager"
},
{
    "id":2,
    "firstName":"Mary",
    "lastName":"Sue",
    "gender":"Female",
    "age":32,
    "position":"Salesperson"
},
{
    "id":3,
    "firstName":"Fred",
    "lastName":"Jones",
    "gender":"Non-Binary",
    "age":54,
    "position":"Salesperson"
},
{
    "id":4,
    "firstName":"Jane",
    "lastName":"Doe",
    "gender":"Female",
    "age":41,
    "position":"Accountant"
},
{
    "id":5,
    "firstName":"Joe",
    "lastName":"Bloggs",
    "gender":"Male",
    "age":65,
    "position":"IT Administrator"
}];

const sales = [{
    "staffId":1,
    "item":"Wi-Fi Adapter",
    "price":40.00,
    "date":"01-09-2022"
},
{
    "staffId":1,
    "item":"Wi-Fi Adapter",
    "price":40.00,
    "date":"03-09-2022"
},
{
    "staffId":1,
    "item":"USB Cable",
    "price":5.00,
    "date":"03-09-2022"
},
{
    "staffId":1,
    "item":"Thermal Paste",
    "price":7.50,
    "date":"05-09-2022"
},
{
    "staffId":1,
    "item":"Wi-Fi Adapater",
    "price":40.00,
    "date":"07-09-2022"
},
{
    "staffId":2,
    "item":"USB Stick",
    "price":10.99,
    "date":"06-09-2022"
},
{
    "staffId":3,
    "item":"Pre-built PC",
    "price":1999.95,
    "date":"02-09-2022"
},
{
    "staffId":3,
    "item":"USB Cable",
    "price":5.00,
    "date":"02-09-2022"
},
{
    "staffId":3,
    "item":"HDMI Cable",
    "price":15.45,
    "date":"02-09-2022"
}]; 

//onload function for the window.
//  window.onload = function () {
//     // Event listener for form's submit event.
//     document.getElementById("employeeForm").addEventListener("submit", checkFormData);
//     document.getElementById("dataDiv").innerHTML = x
//     // Add any other event listeners you need here.
  
// };


function getStaffId(){
    const data = employees.filter((element, index)=>{
        return employees.indexOf(element) === index;
    })
}


console.log(getStaffId())



/* This function is used to handle the submit event on the form.
   You should complete it so it checks the values of the form to see if they
   are correct.
   If a value is:
   - missing;
   - the incorrect type (e.g. not a number for age); or
   - a duplicate (for ID)
   Then you should show an alert to the user. Otherwise, that data should be
   added to the employees object array.
   You should also update the list of elements in the staff ID drop down, and
   update the display of employee data if it is set to all.
*/
function checkFormData (event) {
    // Stops the default action of the event - in this case, to submit data
    // and refresh the page.
    event.preventDefault();

    // Getting the data from the form.
    const form = document.getElementById("employeeForm");
    const id = form.elements["id"].value;
    const firstName = form.elements["firstName"].value;
    const lastName = form.elements["lastName"].value;
    const gender = form.elements["gender"].value;
    const age = form.elements["age"].value;
    const position = form.elements["position"].value;
    console.log("Got the following from the form...");
    console.log(`id: ${id}, firstName: ${firstName}, lastName: ${lastName}, gender: ${gender}, age: ${age}, position: ${position}.`);

    // Finish the function to check the inputted data, and either add it to the
    // employee array, or tell the user they've made a mistake in their input.
};
