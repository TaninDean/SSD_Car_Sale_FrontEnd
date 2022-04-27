import React from 'react'
import { Button, Card } from "react-bootstrap"

const CarCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <div className="Car_card"> 
        <Card.Title>Car name</Card.Title>
        <Card.Text>
        Car model
        <br/>
        price
        </Card.Text>
        <Button variant="primary">buy</Button>
      </div>
    </Card.Body>
    </Card>
  )
}

export default CarCard