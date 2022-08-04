
const DisplayEntries = (props) => {
    return (
        <div className='posts'>
            <div>
                {props.parentEntries.map((entry, index)=>{
                return (
                    <div key={index}>
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
