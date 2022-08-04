
const DisplayEntries = (props) => {
    return (
        <div className='posts'>
            <div>
                {props.parentEntries.map((entry)=>{
                return (
                    <div>
                        <p>{entry.Name}</p>
                        <p>{entry.Post}</p>
                    </div>
                );
                })}
            </div>
        </div> 
      );
}
 
export default DisplayEntries;
