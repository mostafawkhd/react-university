import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { api } from '../App'

export type Tstudent = {
    student_id: string,
    student_fname: string,
    student_lname: string,
    student_gpa: string
}
const StudentList = ({ students,deleteItem }: { students: Array<Tstudent>,deleteItem:(id: string) => Promise<void> }) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>ID</th>
                    <th>GPA</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {students.map((item, index) => <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.student_fname}</td>
                    <td>{item.student_lname}</td>
                    <td>{item.student_id}</td>
                    <td>{item.student_gpa}</td>
                    <td><Button variant="danger" onClick={()=>deleteItem(item.student_id)}>Delete</Button></td>
                </tr>)}
            </tbody>
        </Table>
    )
}

export default StudentList