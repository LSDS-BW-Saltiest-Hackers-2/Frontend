import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


export default function Comment (props) {

    const { info } = props

    return (
    <div>
       
        <Card inverse style={{ backgroundColor: '#333', 
        borderColor: '#333', borderRadius: '25px', 
        margin: '20px', padding: '20px', fontFamily: 'Courier New'}}>
            <CardBody inverse style= {{color: 'white'}}>
                <CardTitle>Comment Rank: {info.rank}</CardTitle>
                <CardSubtitle>Troll Name: {info.name}</CardSubtitle>
                <CardSubtitle>Score: {info.score}</CardSubtitle>
            </CardBody>
        </Card>
    
        
        
    </div>

    )
    
    
}
