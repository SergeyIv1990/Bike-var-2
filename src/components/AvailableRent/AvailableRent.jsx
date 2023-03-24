
import './AvailableRent.css';

const AvailableRent =(props) =>{

    return(
        <div className="Main">
            <div className="AvailableRent">
                <form>
                    {props.data.name}&nbsp;&nbsp;&nbsp;&nbsp;
                    {props.data.type}&nbsp;&nbsp;&nbsp;&nbsp;
                    {props.data.prise}  
                </form>
            </div>
            <div className="Btn">
                <button className="btn3" onClick={() => props.cutPost(props.data.id)}>Rent</button>
                <button className="btn4" onClick={() => props.deleteBike(props.data.id)}>Delete</button>
            </div>
        </div>
    );
}
  
export default AvailableRent; 

