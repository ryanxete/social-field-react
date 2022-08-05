import './DisplayEntries.css'
import React, { useState } from 'react';

const DisplayEntries = (props) => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    const [likeActive, setLikeActive] = useState(false)
    const [dislikeActive, setDislikeActive] = useState(false)

    function likef(){
        if(likeActive){
            setLikeActive(false)
            setLike(like-1)
        }else {
            setLikeActive(true)
            setLike(like+1)
            if(dislikeActive){
                setDislikeActive(false)
                setLike(like+1)
                setDislike(dislike-1)
            }
        }
    }
    function dislikef(){
        if(dislikeActive){
            setDislikeActive(false)
            setDislike(like-1)
        }else {
            setDislikeActive(true)
            setDislike(like+1)
            if(likeActive){
                setLikeActive(false)
                setDislike(dislike+1)
                setLike(like-1)
            }
        }
    }

    return (
        <div className='posting'>
            <div className='data'>
                {props.parentEntries.map((entry, index)=>{
                return (
                    <div key={index} className='entered'>
                        <h6 className='name'>{entry.Name}</h6>
                        <p className='post'>{entry.Post}</p>
                        <div className='buttons'>
                            <button onClick={likef}><img src={require("./assets/like.png")} alt="like button"/>{like}
                            </button>
                            <button onClick={dislikef}><img src={require("./assets/dislike.png")} alt="dislike button"/>{dislike}</button>
                        </div>
                    </div>
                );
                })}
            </div>
            
        </div> 
      );
}
 
export default DisplayEntries;
