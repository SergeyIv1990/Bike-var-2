
import './FormRent.css';

const FormRent =(props) =>{
    return(
        <div className="Main2">
            <div className="wrapperFormRent">
                <form>
                    {props.data.name}&nbsp;&nbsp;&nbsp;&nbsp;
                    {props.data.type}&nbsp;&nbsp;&nbsp;&nbsp;
                    {props.data.prise}  
                </form>
            </div>
            <div className="Btn2">
                <button className="btn" onClick={() => props.deletPost(props.data.id)}>Cancel rent</button>
            </div>   
        </div>
    );
}

export default FormRent; 
