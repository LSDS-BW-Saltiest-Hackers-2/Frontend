import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


export default function Comment (props) {
    
    const { info, saveComment } = props

    // console.log(props, '<-- Comment consolelog')
    return (

    
    <Card style={{ backgroundColor: '#f6f6ef', borderRadius: '25px', 
        margin: '20px', padding: '20px'}}>
            <CardBody inverse style= {{color: 'black'}}>
                <CardTitle>Username: {info.UserName}</CardTitle>
                <CardSubtitle>Comment: {info.Comment}</CardSubtitle>
                <CardSubtitle>Salty Score: {info.SaltyScore}</CardSubtitle>
                <Button onClick={() => saveComment(info.Comment_ID)}>Save Comment</Button>
            </CardBody>
    </Card> 
    
    )
}


