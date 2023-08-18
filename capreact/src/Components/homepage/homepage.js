import React,{ useState, useEffect} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { findAll } from './user.mjs'
import UserListItem from './userlistitem.js'
// import Registration from "./registration";


function UserList() {
    const [loading, setLoading] = useState(false)
    const [user, setUsers] = useState([])

    const fetchData = async () => {
        setLoading(true)

        const res = await findAll()

        setUsers([...res])
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section>
            <header>
                <h2>Users</h2>
            </header>

            { loading && 
                <p>loading...</p>
            }

            <ul>
                {<UserListItem user={user}/>}
            </ul>
        </section>
    )
}
export default UserList;





// // const users = [{id:'',email:'', password:'', firstname:'', lastname:'', address:'', contactNum:'', nric:'', dateOfBirth:''}]

// function PrintProfile(){

//     // users.filter((user) => {
//     //     return user.id === user.id;
//     // })

//     const userRef = db.collection('userdata');
//     const snapshot = userRef.where('email', '==', true).get();
//     snapshot.forEach(doc => {
//         console.log(doc.id, '=>', doc.data());
//       });

//     // return(
//     //      <div>           
//     //         {/* <h1>User Profile</h1>
//     //         <table>
//     //             <tr>
//     //                 <td>Email: </td>
//     //                 <td>{users.email}</td>
//     //             </tr>
//     //             <tr>
//     //                 <td>Password: </td>
//     //                 <td>{users.password}</td>
//     //             </tr>
//     //             <tr>
//     //                 <td>First Name: </td>
//     //                 <td>{users.fname}</td>
//     //             </tr>
//     //             <tr>
//     //                 <td>Last Name:</td>
//     //                 <td>{users.lname}</td>
//     //             </tr>
//     //             <tr>
//     //                 <td>Address:</td>
//     //                 <td>{users.address}</td>
//     //             </tr>
//     //             <tr>
//     //                 <td>Contact Number: </td>
//     //                 <td>{users.contactno}</td>
//     //             </tr>
//     //             <tr>
//     //                 <td>NRIC: </td>
//     //                 <td>{users.nric}</td>
//     //             </tr>
//     //             <tr>
//     //                 <td>Date of Birth: </td>
//     //                 <td>{users.dob}</td>
//     //             </tr>
//     //         </table> */}
//     //     </div>
//     // )
// }
// export default PrintProfile;