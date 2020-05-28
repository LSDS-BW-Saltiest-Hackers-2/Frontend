import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


export default function Comment (props) {

    const { info } = props

    return (
    <div>
       
    <Card style={{ backgroundColor: '#f6f6ef', borderRadius: '25px', 
        margin: '20px', padding: '20px'}}>
            <CardBody inverse style= {{color: 'black'}}>
                <CardTitle>Username: {info.UserName}</CardTitle>
                <CardSubtitle>Comment: {info.Comment}</CardSubtitle>
                <CardSubtitle>Salty Score: {info.SaltyScore}</CardSubtitle>
                
            </CardBody>
    </Card>
    
        
        
    </div>

    )
    
    
}
