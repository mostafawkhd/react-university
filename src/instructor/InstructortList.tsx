import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { api } from '../App'

export type Tinstructor = {
    ins_id: string,
    ins_fname: string,
    ins_lname:string
}
const InstructorList = ({ instructors,deleteItem }: { instructors: Array<Tinstructor>,deleteItem:(id: string) => Promise<void> }) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Instructor First Name</th>
                    <th>Instructor Last Name</th>
                    <th>Instructor ID</th>
                </tr>
            </thead>
            <tbody>
                {instructors.map((item, index) => <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.ins_fname}</td>
                    <td>{item.ins_lname}</td>
                    <td>{item.ins_id}</td>
                    <td><Button variant="danger" onClick={()=>deleteItem(item.ins_id)}>Delete</Button></td>
                </tr>)}
            </tbody>
        </Table>
    )
}

export default InstructorList