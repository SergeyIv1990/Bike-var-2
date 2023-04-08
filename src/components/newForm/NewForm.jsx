
import FormRent from "../FormRent/FormRent";

const NewForm =({rentData, deletPost, setNewId, setNewTime,}) => {
    return(
        <div>
           <div>
                {rentData.map(((data, index) => (
                    <FormRent key={index} data={data} deletPost={deletPost} 
                     setNewId={setNewId} setNewTime={setNewTime}/>
                )))}
            </div>
        </div>
    );
}

export default NewForm ;