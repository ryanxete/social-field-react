import React, { useState } from 'react';

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="Name" value={name} onChange={(event) => setName(event.target.value)}/>
                </label><br />
                <label>
                    Post:
                    <textarea rows={8} type="text" name="Post" onChange={(event) => setPost(event.target.value)}/>
                </label><br />
                <input type="submit" value="Add" />
            </form>
        </div>

      );
}
 
export default AddEntryForm;