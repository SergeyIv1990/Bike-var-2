import React, {useState} from "react";
import './Form.css';

const Form =({addPostNew}) => {
    let newPostElement = React.createRef();
    let defaultValue="tipe";

    const options =([
        {value: "Road", name:"Road"},
        {value: "Mountain", name:"Mountain"},
        {value: "Bike", name:"Bike"},
    ])
    const [valueNew, setValueNew] = useState("")
    const [value, setValue] = useState('')
    /*let newPostElement2 = React.createRef();
    let text2 = newPostElement2.current.value;*/
    const AddPost = ()=>{
        let text = newPostElement.current.value;
        let text2 = valueNew;
        addPostNew(text,value,text2);
        newPostElement.current.value= ''
        setValueNew('');
        setValue('');
    }
    return(
        <div>
            <div className="wrapperTitle">Create new rent</div>
            <div className="Main3">
                <div className="wrapper">
                    <form>
                        <div>Bike name &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; Bike type &ensp;&ensp;&ensp;Rent prise(cost per hour)</div>
                        <textarea className="textFild" ref={newPostElement}></textarea>

                        <select className="typeBike" value={value} onChange={event => setValue(event.target.value)}>
                            <option disabled value="">{defaultValue}</option>
                            {options.map(option =>
                                <option key={option.value} value={option.value}>
                                    {option.name}
                            </option>)}
                        </select>

                        <input type="number" className="textFild2" value={valueNew} 
                        onChange={event => setValueNew(event.target.value)}/*ref={newPostElement2}*/></input>
                    </form>
                </div>
                <div className="Btn3">           
                    <button type="submit" className="btn2" onClick={() => {   
                        value==="" || newPostElement.current.value ==="" || valueNew===""
                        ?alert('Заполните поля ввода') 
                        :AddPost()}}  >Submint rent</button>
                </div>
            </div>
        </div>
    );
}

export default Form;