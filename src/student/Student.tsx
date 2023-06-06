import React, { useEffect, useState } from 'react'
import StudentList from './StudentList'
import { Tstudent } from './StudentList'
import { api } from '../App'
import StudentForm from './StudentForm'
import { Button } from 'react-bootstrap'

const Student = () => {
    const [students,setStudents]=useState<Array<Tstudent>>([])
    const [showModal,setShowModal]=React.useState<boolean>(false)
    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        setStudents((await api.get('/students')).data)
    }
    const deleteItem=async(id:string)=>{
        try{
            await api.delete(`/students/${id}`)
            await getData()
        }
        catch(error:any){
            console.log(error)
        }
    }
    const addItem=async(data:Tstudent,event:any)=>{
        event.preventDefault()
        try{
            await api.post(`/students/`,data)
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
        <StudentForm show={showModal} handleClose={()=>setShowModal(false)} onSubmit={addItem}/>
        {students.length>0?<StudentList students={students} deleteItem={deleteItem}/>:<div>There is no data</div>}
    </div>
  )
}

export default Student