import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from "../assets/waqas.jpg"

const NewsItem = ({title, description, src, url}) => {

  

  return (
    <Card className='card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2' 
    style={{maxWidth: "345px"}}>
      <Card.Img className='card-img-top' href={url}
      style={{height: "200px", width: "330px", cursor: 'pointer'}} alt='...' variant="top" src={src?src:image} />
      <Card.Body>
        <Card.Title>{title.slice(0, 50)}</Card.Title>
        <Card.Text>
          {description?description.slice(0, 90) : "No information"}
        </Card.Text>
        <Button href={url} variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  )
}

export default NewsItem