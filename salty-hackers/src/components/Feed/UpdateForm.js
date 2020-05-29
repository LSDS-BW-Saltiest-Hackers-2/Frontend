import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editSavedComment } from '../../action/appAction';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const UpdateForm = (props) => {
    const [comment, setComment] = useState({
        commentSaved: ''
    })
    const { push } = useHistory();
    const { id } = useParams();
    // console.log('this is props of updateform', props.savedComments)
    const id2 = localStorage.getItem('id')

    useEffect(() => {
        axiosWithAuth().get(`https://saltyhackers2.herokuapp.com/users/${id2}/comment/${id}/saved-comments/`)
          .then(res => {
            console.log('USEEFFECT response', res.data)
            setComment(res.data)
        })
          .catch(err => console.log(err))
    }, [id]);

    const changeHandler = e => {
        setComment({
            ...comment, 
            [e.target.name]: e.target.value 
        });
    };

    const submitForm = e => {
        e.preventDefault()
        const commentSaved = {
            commentSaved: comment.commentSaved,
      }
      props.editSavedComment(id, commentSaved)
      push(`/saved-comments`)
    };

    return (
        <div className='update-form'>
            <h2>Update Comment</h2>
            <form onSubmit={submitForm}>
                <input
                  type='text'
                  name='commentSaved'
                  onChange={changeHandler}
                  value={comment.commentSaved}
                />
                <button>Update</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('MapStateToProps', state);
    return {
        savedComments: state.savedComments
    }
}

export default connect(
    mapStateToProps,
    { editSavedComment }
)(UpdateForm)