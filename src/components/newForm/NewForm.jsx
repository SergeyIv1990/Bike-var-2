
import FormRent from "../FormRent/FormRent";

const NewForm =({rentData, deletPost,}) => {
    return(
        <div>
           <div>
                {rentData.map(((data, index) => (
                    <FormRent key={index} data={data} 
                    deletPost={deletPost}/>
                )))}
            </div>
        </div>
    );
}

export default NewForm ;