import React, { useEffect } from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button, CardImg, CardText
  } from 'reactstrap';


import image from './blank-profile-picture.png';

import { connect } from 'react-redux';
import { saveComment } from '../../action/appAction';
import stripHtml from "string-strip-html";


const Comment = (props) => {
        
    const { info } = props


    // console.log(props, '<-- Comment consolelog')
    return (

    <Card style={{ backgroundColor: '#f6f6ef',  margin: '1%', width: '25rem'}}>
            <CardBody>
                <CardImg src={image} style = {{marginBottom: '5%', width: '100%'}}></CardImg>
                <h2>Username: {info.UserName}</h2>
                <p>Comment: {stripHtml(info.Comment)}</p>
                <p style={{fontWeight:'bold'}}>Saltiness: {info.Saltiness}</p>
            <Button onClick={() => props.saveComment(info.Comment_ID)} style={{backgroundColor:'#00BABA', borderColor:'#00BABA'}}>Save</Button>
            </CardBody>
    </Card> 
    
    )

    }
const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(
    mapStateToProps,
    { saveComment }
)(Comment)
