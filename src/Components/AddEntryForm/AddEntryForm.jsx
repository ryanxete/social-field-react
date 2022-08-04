import React, { useState } from 'react';

const AddEntryForm = (props) => {
    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="Enter Your Name" />
                </label><br />
                <label>
                    Post:
                    <textarea rows={8}>
                        <input type="text" name="Post" />
                    </textarea>
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        </div>

      );
}
 
export default AddEntryForm;