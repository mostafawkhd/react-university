import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { api } from '../App'

export type Tdepartment = {
    dep_id: string,
    dep_name: string,
}
const DepartmentList = ({ departments,deleteItem }: { departments: Array<Tdepartment>,deleteItem:(id: string) => Promise<void> }) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Department Name</th>
                    <th>Department ID</th>
                </tr>
            </thead>
            <tbody>
                {departments.map((item, index) => <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.dep_name}</td>
                    <td>{item.dep_id}</td>
                    <td><Button variant="danger" onClick={()=>deleteItem(item.dep_id)}>Delete</Button></td>
                </tr>)}
            </tbody>
        </Table>
    )
}

export default DepartmentList