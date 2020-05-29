import React, { useEffect } from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import { connect } from 'react-redux';
import { saveComment } from '../../action/appAction';
import stripHtml from "string-strip-html";

const Comment = (props) => {
        
    const { info } = props

    // console.log(props, '<-- Comment consolelog')
    return (

    
    <Card style={{ backgroundColor: '#f6f6ef', borderRadius: '25px', 
        margin: '20px', padding: '20px'}}>
            <CardBody inverse style= {{color: 'black'}}>
                <CardTitle>Username: {info.UserName}</CardTitle>
                <CardSubtitle>Comment: {stripHtml(info.Comment)}</CardSubtitle>
                <CardSubtitle>Salty Score: {info.Saltiness}</CardSubtitle>
                <Button onClick={() => props.saveComment(info.Comment_ID)}>Save</Button>
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
