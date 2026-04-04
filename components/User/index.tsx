"use client";
import  DataTable, { Column } from "@/common/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
const userData: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ];
const columns:Column<User>[]=[
    { header: "Full Name", key: "name" },
    { header: "Email Address", key: "email" },
    { header: "Role", key: "role" },
    {header:"Action",key:"action",render:(user)=>(
        <button onClick={() => alert(`Editing ${user.name}`)}>
          Edit
        </button>
      ),}
]
const User=()=>{
  return(
    <div className="container mt-5">
      <h1>Users</h1>
      <DataTable data={userData} columns={columns}/>
    </div>
  )
}
export default User;