function UserListItem(props) {
    const { user } = props

    return (
        <div>
            {/* key={user.id}> */}
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
}
export default UserListItem;