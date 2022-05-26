import React from 'react'
import '../App.css'
import { Card } from 'react-bootstrap'

const About = () => {
    return (
        <div className='container mb-3'>
            <div className="about mt-4">
                <strong>Multilingual Question Answering System</strong>
                <p>The Question Answering system that we have developed will take input as a paragraph and question from the user in multiple languages like English, Hindi, Spanish, German, Greek, Russian, Turkish, Arabic, Vietnamese, Thai, Chinese and will return an appropriate answer for the question in that language.
                    This model also works in Marathi Question Answering.
                    <br />
                    

                    Model is shared at Huggingface on <a href="https://huggingface.co/hd94/roberta-hindi" target="_blank" rel="noopener noreferrer">https://huggingface.co/hd94/roberta-hindi</a>


                    
                    <br />
                    Github Repository on <a href="https://github.com/Hardik-Dharmik/Multilingual-Question-Answering-System" target="_blank" rel="noopener noreferrer">https://github.com/Hardik-Dharmik/Multilingual-Question-Answering-System</a></p>

                <strong className='mb-4'>Developed By</strong>
                <div className="container row d-flex justify-content-around">
                    <Card style={{ width: '15rem', background: '#1c2f38', color: '#fff' }} className="mb-5">
                        <Card.Body>
                            <Card.Title>Hardik Dharmik</Card.Title>
                            <Card.Link href="https://www.linkedin.com/in/hardik-dharmik-034796215/" target="_blank" rel="noopener noreferrer">LinkedIn</Card.Link>
                            <Card.Link href="https://github.com/Hardik-Dharmik" target="_blank" rel="noopener noreferrer">Github</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '15rem', background: '#1c2f38', color: '#fff' }} className="mb-5">
                        <Card.Body>
                            <Card.Title>Mayur Rawte</Card.Title>
                            <Card.Link href="https://www.linkedin.com/in/mayur-rawte-03b9a71b4/" target="_blank" rel="noopener noreferrer">LinkedIn</Card.Link>
                            <Card.Link href="https://github.com/mayur07032002" target="_blank" rel="noopener noreferrer">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default About