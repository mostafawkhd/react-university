import React from 'react'
import { Card } from 'react-bootstrap'
import './mainMenu.css'
import { useNavigate } from 'react-router-dom'

const MainMenu = () => {
    const navigate = useNavigate()
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around' }}>
            <Card className='m-2' onClick={() => navigate('/student')}>Students</Card>
            <Card className='m-2' onClick={() => navigate('/instructor')}>Instructors</Card>
            <Card className='m-2' onClick={() => navigate('/department')}>Departments</Card>
            <Card className='m-2' onClick={() => navigate('/course')}>Courses</Card>
        </div>
    )
}

export default MainMenu