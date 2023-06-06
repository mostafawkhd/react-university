import React from 'react'
import { Card } from 'react-bootstrap'
import './mainMenu.css'

const MainMenu = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around' }}>
            <Card className='m-2'>Students</Card>
            <Card className='m-2'>Instructors</Card>
            <Card className='m-2'>Departments</Card>
            <Card className='m-2'>Courses</Card>
        </div>
    )
}

export default MainMenu