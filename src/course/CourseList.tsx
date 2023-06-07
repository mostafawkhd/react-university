import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { api } from '../App'
import { Tinstructor } from '../instructor/InstructortList'
import { Tdepartment } from '../department/DepartmentList'

export type TcourseFormData = {
    crs_id: string,
    crs_title: string,
    ins_id: string,
    dep_id: string,
}

export type Tcourse = {
    crs_id: string,
    crs_title: string,
    dep_id: string,
    ins_fname: string,
    ins_lname: string
}
const CourseList = ({ courses, deleteItem }: {
    courses: Array<Tcourse>, deleteItem: (id: string) => Promise<void>
}) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Course Title</th>
                    <th>Course ID</th>
                    <th>Instructor Name</th>
                    <th>Department ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((item, index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.crs_title}</td>
                    <td>{item.crs_id}</td>
                    <td>{item.ins_fname +' '+item.ins_lname}</td>
                    <td>{item.dep_id}</td>
                    <td><Button variant="danger" onClick={() => deleteItem(item.crs_id)}>Delete</Button></td>
                </tr>)}
            </tbody>
        </Table>
    )
}

export default CourseList