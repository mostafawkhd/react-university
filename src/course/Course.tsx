import React, { useEffect, useState } from 'react'
import CourseList, { TcourseFormData } from './CourseList'
import { Tcourse } from './CourseList'
import { api } from '../App'
import CourseForm from './CourseForm'
import { Button } from 'react-bootstrap'
import { Tdepartment } from '../department/DepartmentList'
import { Tinstructor } from '../instructor/InstructortList'


const Course = () => {
    const [courses,setCourses]=useState<Array<Tcourse>>([])
    const [departments,setDepartments]=useState<Array<Tdepartment>>([])
    const [instructors,setInstructors]=useState<Array<Tinstructor>>([])
    const [showModal,setShowModal]=React.useState<boolean>(false)
    useEffect(()=>{
        getData()
        getOptions()
    },[])
    const getData=async()=>{
        setCourses((await api.get('/courses')).data)
    }
    const getOptions=async()=>{
        setDepartments((await api.get('/departments')).data)
        setInstructors((await api.get('/instructors')).data)
    }
    const deleteItem=async(id:string)=>{
        try{
            await api.delete(`/courses/${id}`)
            await getData()
        }
        catch(error:any){
            console.log(error)
        }
    }
    const addItem=async(data:TcourseFormData,event:any)=>{
        event.preventDefault()
        try{
            await api.post(`/courses/`,data)
            await getData()
            setShowModal(false)
        }
        catch(error:any){
            console.log(error)
        }
    }
  return (
    <div>
        <Button className='m-2' onClick={()=>setShowModal(true)}>Add Item</Button>
        <CourseForm departments={departments} instructors={instructors} show={showModal} handleClose={()=>setShowModal(false)} onSubmit={addItem}/>
        {courses.length>0?<CourseList courses={courses} deleteItem={deleteItem}/>:<div>There is no data</div>}
    </div>
  )
}

export default Course