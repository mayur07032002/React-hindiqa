import React from 'react'
import '../App.css'
import { Card } from 'react-bootstrap'

const Developer = () => {
    return (
        <div className='container mb-3'>
            <div className="about mt-4 ">
                <strong className='mb-4'>Developed By</strong>
                <div className="container row d-flex justify-content-around">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Hardik Dharmik</Card.Title>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Lord Mayur Rawte</Card.Title>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

            </div>


        </div>
    )
}

export default Developer