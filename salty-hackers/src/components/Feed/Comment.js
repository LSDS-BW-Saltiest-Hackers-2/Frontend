import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import profilePicture from '../../'


export default function Comment (props) {
    
    const { info, saveComment } = props

    // console.log(props, '<-- Comment consolelog')
    return (

    
    <Card style={{ backgroundColor: '#f6f6ef', borderRadius: '25px', 
        margin: '20px', padding: '20px'}}>
            <CardBody inverse style= {{color: 'black'}}>
                <CardTitle>Username: {info.UserName}</CardTitle>
                <CardSubtitle>Salty Score: {info.Saltiness}</CardSubtitle>
                <CardSubtitle>Comment: {info.Comment}</CardSubtitle>
                <Button onClick={() => saveComment(info.Comment_ID)}>Save Comment</Button>
            </CardBody>
    </Card> 
    
    )
}


