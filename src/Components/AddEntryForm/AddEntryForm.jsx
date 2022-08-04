import React, { useState } from 'react';

const AddEntryForm = (props) => {
    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="Name" value={'Name here..'}/>
                </label><br /><br />
                <label>
                    Post:
                    <textarea rows={8} type="text" name="Post" value={'Post here..'}/>
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        </div>

      );
}
 
export default AddEntryForm;