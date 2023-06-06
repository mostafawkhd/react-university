import React, { useEffect, useState } from 'react'
import InstructorList from './InstructortList'
import { Tinstructor } from './InstructortList'
import { api } from '../App'
import InstructorForm from './InstructorForm'
import { Button } from 'react-bootstrap'

const Instructor = () => {
    const [instructors,setInstructors]=useState<Array<Tinstructor>>([])
    const [showModal,setShowModal]=React.useState<boolean>(false)
    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        setInstructors((await api.get('/instructors')).data)
    }
    const deleteItem=async(id:string)=>{
        try{
            await api.delete(`/instructors/${id}`)
            await getData()
        }
        catch(error:any){
            console.log(error)
        }
    }
    const addItem=async(data:Tinstructor,event:any)=>{
        event.preventDefault()
        try{
            await api.post(`/instructors/`,data)
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
        <InstructorForm show={showModal} handleClose={()=>setShowModal(false)} onSubmit={addItem}/>
        {instructors.length>0?<InstructorList instructors={instructors} deleteItem={deleteItem}/>:<div>There is no data</div>}
    </div>
  )
}

export default Instructor