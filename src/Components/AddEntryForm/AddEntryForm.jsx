import React, { useState } from 'react';
import './AddEntryForm.css'

const AddEntryForm = (props) => {

    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            Name: name,
            Post: post
        }
        props.addNew(newEntry)
    }

    return (
        <div className='entry-box'>
            <form onSubmit={handleSubmit} className='form-grid'>
                <div>
                    <label className='name'>
                    <h5>  Name:</h5><textarea rows={1} type="text" name="Name" value={name} onChange={(event) => setName(event.target.value)}/>
                    </label><br />
                    <label className='post'>
                            <h5>  Post:</h5><textarea rows={3} type="text" name="Post" value={post} onChange={(event) => setPost(event.target.value)}/>
                    </label><br />
                    <input type="submit" value="Add" className='button' />
                </div>
            </form>
        </div>

      );
}
 
export default AddEntryForm;