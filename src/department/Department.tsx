import React, { useEffect, useState } from 'react'
import DepartmentList from './DepartmentList'
import { Tdepartment } from './DepartmentList'
import { api } from '../App'
import DepartmentForm from './DepartmentForm'
import { Button } from 'react-bootstrap'

const Department = () => {
    const [departments,setDepartments]=useState<Array<Tdepartment>>([])
    const [showModal,setShowModal]=React.useState<boolean>(false)
    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        setDepartments((await api.get('/departments')).data)
    }
    const deleteItem=async(id:string)=>{
        try{
            await api.delete(`/departments/${id}`)
            await getData()
        }
        catch(error:any){
            console.log(error)
        }
    }
    const addItem=async(data:Tdepartment,event:any)=>{
        event.preventDefault()
        try{
            await api.post(`/departments/`,data)
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
        <DepartmentForm show={showModal} handleClose={()=>setShowModal(false)} onSubmit={addItem}/>
        {departments.length>0?<DepartmentList departments={departments} deleteItem={deleteItem}/>:<div>There is no data</div>}
    </div>
  )
}

export default Department