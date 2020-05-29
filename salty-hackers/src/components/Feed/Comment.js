import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, CardImg, CardText
  } from 'reactstrap';

import image from './blank-profile-picture.png';

import stripHTML from 'string-strip-html';


export default function Comment (props) {
    
    const { info, saveComment } = props

    const stripHTML = require('string-strip-html')

    // console.log(props, '<-- Comment consolelog')
    return (

    
    <Card style={{ backgroundColor: '#f6f6ef', margin: '1%', width: '25rem'}}>
            
            <CardBody style= {{color: 'black'}}>
                <CardImg src={image} style = {{marginBottom: '5%'}}></CardImg>
                <CardTitle style={{fontWeight: 'bold'}}>Username: {info.UserName}</CardTitle>
                <CardSubtitle style={{color:'#FF4500', fontWeight:'bold'}}>Salty Score: {info.Saltiness}</CardSubtitle>
                <CardText>Comment:{info.Comment}</CardText>
                <Button onClick={() => saveComment(info.Comment_ID)}>Save Comment</Button>
            </CardBody>
    </Card> 
    
    )
}


