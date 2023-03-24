import './App.css';
import Form from  './components/Form/Form.jsx';
import Available from  './components/Available/Available.jsx';
import { useState } from 'react';
import NewForm from './components/newForm/NewForm';

const App = ()=> {
    const [rentData, setRentData] = useState([
        {id:3, name: 'Superfast bicycle', type:'custom', prise:'12,99'},
        {id:4, name: 'Superfast bicycle2', type:'custom', prise:'12,99'},
        {id:1, name: 'Superfast bicycle3', type:'custom', prise:'12,99'},
        {id:2, name: 'Superfast bicycle4', type:'custom', prise:'12,99'},
    ])
    const [availableData, setAvailableData] = useState([
        {id:7, name: 'Bicycle 001', type:'custom', prise:'12,99'},
        {id:8, name: 'Bicycle 002', type:'custom', prise:'12,99'},
        {id:9, name: 'Bicycle 003', type:'custom', prise:'12,99'},
    ]);
    let addPostNew = (text, nameBike, text2) => {
        let newPost = {id:Date.now(),name:text, type:nameBike, prise:text2};
        setAvailableData([...availableData, newPost]);
    };
    let deletPost = (dataId) => {
        const index = rentData.findIndex((data) => data.id === dataId);
        setAvailableData([...availableData, rentData[index]]);
        rentData.splice(index, 1);
    };
    let cutPost = (dataId) => {
        const index = availableData.findIndex((data) => data.id === dataId);
        setRentData([...rentData, availableData[index]]);
        availableData.splice(index, 1);
    };
    let deleteBike = (dataId) => {
        const newAvailableData = [...availableData];
        const index = availableData.findIndex((data) => data.id === dataId);
        newAvailableData.splice(index, 1);
        setAvailableData(newAvailableData);
    };
    let numberOfItems=(Object.keys(availableData).length) ;
    return (
        <div className='App'>
            <div className= "inf"> <h1>Awesome Bike Rental</h1></div>
            <Form addPostNew={addPostNew}/>

            <div className="wrapperTitleRent">Your rent</div>
            <NewForm rentData={rentData} deletPost={deletPost}/>

            <div className="wrapperTitleRent">Available bicycles ({numberOfItems})</div>           
            <Available availableData={availableData} cutPost={cutPost}
            deleteBike={deleteBike}/>
        </div>
    )
};

export default App;

