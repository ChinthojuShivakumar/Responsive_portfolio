import React from 'react';
import ProjectDetail from './Project_Detail';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaLaptopCode } from 'react-icons/fa'
import './Project.css'

function Projects() {

    let projectDetail = ProjectDetail.map((detail)=>{

        let viewProjects = (e) =>{
            e.preventDefault()

            window.location.href = detail.url
        }
        return(
            <span>
                <Card style={{ width: '18rem',margin:'50px 0px' }}>
                    <Card.Img variant="top" src={detail.image}/>
                    <Card.Body>
                        <Card.Title><h2>{detail.title}</h2></Card.Title>
                        <Card.Text>
                            {detail.description}
                        </Card.Text>
                        <Button variant="primary" onClick={viewProjects}>Click Here</Button>
                    </Card.Body>
                </Card>
            </span>
        )
    })
  return (
    <div className='header-4' id='header-4'>
        <div className='pP'id='pP'>
            <div className='pC-1'>
                  <h1 className='h1-p' id='h1-p'> < FaLaptopCode /> Projects Made</h1>
            </div>
            <div className='pC-2' id='pC-2'>
                <h6>{projectDetail}</h6>
            </div>
        </div>
    </div>
  )
}

export default Projects