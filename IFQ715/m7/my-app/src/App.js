import { useEffect, useState } from "react";
import logo from './logo.svg';

// code-play 1 || Consuming promises by sending a request with Fetch


// import './App.css';

// function fetchUser() {
//   const url = `https://reqres.in/api/users/3`;
//   return fetch(url)
//     .then((res) => res.json())
//     .then((res) => res.data);
// }

// export default function App() {
//   const janet = {
//     id: 2,
//     email: "janet.weaver@reqres.in",
//     first_name: "Janet",
//     last_name: "Weaver",
//     avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
//   };
//   const [user, setUser] = useState({});
//   return (
//     <div className="App">
//      <h1>User Details</h1>
     
//      <button onClick={() => fetchUser().then((user) => setUser(user))}>Get User</button>
//   <ul>
//         <li>First Name: {user.first_name}</li>
//         <li>Last Name: {user.last_name}</li>
//         <li>E: {user.email}</li>
//       </ul>
//     </div>
//   );
// }



// Code-play 2 Introducing side effects into our code

// export default function App() {
//   function fetchUser(id) {
//     const url = `https://reqres.in/api/users/${id}`;
//     return fetch(url)
//       .then((res) => res.json())
//       .then((res) => res.data);
//   }
//   const [userId, setUserId] = useState(1);
//   const [user, setUser] = useState();

//   useEffect(() => {
//     fetchUser(userId).then((user) => setUser(user));
//   }, [userId]);

// return(
//   <div className="App">
//       <h1>User Details</h1>
//       <button disabled={userId === 1} onClick={() => setUserId(userId - 1)}>
//         Previous
//       </button>
//       <button disabled={!userId} onClick={() => setUserId(userId + 1)}>
//         Next
//       </button>
//       {user ? (
//         <div>
//           <img src={user.avatar} alt="Avatar"></img>
//           <ul>
//             <li>User id: {userId}</li>
//             <li>First Name: {user.first_name}</li>
//             <li>Last Name: {user.last_name}</li>
//             <li>E: {user.email}</li>
//           </ul>
          
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
// );
// }


// code-play 3 - Uncontrolled and controlled components

export default function App() {


  //uncontrolled state
// return(
//   <div className="App">
// <label htmlFor="name">Your Name:</label> 
// <form onSubmit={(event) => {
//       event.preventDefault(); 
//       console.log('Form submitted!');
//       console.log('Input value:', event.target.elements.name.value);
//     }}> 
//     <label htmlFor="name">Your Name:</label> 
//     <input id="name" name="name" type="text" />
    
// </form>
//     </div>
// );

const [name, setName] = useState('');
const [error, setError] = useState();

return (
  <div className="App">
    <h1>Hello, {name}!</h1>
    <label htmlFor="name">Your Name:</label> 
    <input 
    type="text" 
    name="name" 
    id="name" 
    value={name} 
    onChange={(event) => { 
      const { value } = event.target; 
      if (/[0-9]/.test(value)) { 
        setError("Names shouldn't have numbers"); 
      } else {  
        setError(null); 
      } 
      setName(value); 
    }} 
/> 
{error != null ? <p>Error: {error}</p> : null}
  </div>
);
}
