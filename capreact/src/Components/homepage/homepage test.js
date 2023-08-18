import React,{ useState, useEffect} from "react";
import db from "./db.mjs";


function UserList() {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        const response=db.collection('userdata');
        const data = await response.get();
        data.docs.forEach(item => {
            setUsers([...users,item.data()])
        })
    }
    useEffect(() => {
        fetchUsers();
    }, [])

    return (
            <div>
                <header>
                    <h2>Users</h2>
                </header>
                { 
                    users && users.map(user =>{
                        return(
                            <div>
                                <p>Email: {user.email}</p>
                                <p>Password: {user.password}</p>
                                <p>First Name: {user.firstname}</p>
                                <p>Last Name: {user.lastname}</p>
                                <p>Address: {user.address}</p>
                                <p>Contact Number: {user.contactNum}</p>
                                <p>NRIC: {user.nric}</p>
                                <p>Date of Birth: {user.dateOfBirth}</p>
                            </div>
                        )
                    })
                }
            </div>
    )          
}
export default UserList;

