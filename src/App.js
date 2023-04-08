import './App.css';
import Form from  './components/Form/Form.jsx';
import Available from  './components/Available/Available.jsx';
import { useEffect, useRef, useState } from 'react';
import NewForm from './components/newForm/NewForm';
import data from "./components/mock-data.json";

const App = ()=> {
    const [rentData, setRentData] = useState(data.rentData)
    const [availableData, setAvailableData] = useState(data.availableData)
 
    let addPostNew = (text, nameBike, text2) => {
        let newPost = {id:Date.now(),name:text, type:nameBike, prise:Number(text2), realTime:1, realPrise:Number(text2)};
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
    let numberOfRent=(Object.keys(rentData).length) ;
    const [newTime, setNewTime] = useState(1);
    const [newId, setNewId] = useState();
    const firstUpdate = useRef(true);

    const [total, setTotal] = useState(rentData.reduce((acc, {realPrise}) => acc + realPrise,0));
    useEffect(()=>{
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
            }
        const index = rentData.findIndex((data) => data.id === newId);
        rentData[index].realTime=newTime
        if(rentData[index].realTime>5){
            let befoTotal = rentData[index].realTime * rentData[index].prise
            rentData[index].realPrise=befoTotal/2}
        else{
            let befoTotal = rentData[index].realTime * rentData[index].prise
            rentData[index].realPrise=befoTotal
        }
        setTotal(rentData.reduce((acc, {realPrise}) => acc + realPrise,0))
    }, [newId, newTime]);
    useEffect(()=>{
        setTotal(rentData.reduce((acc, {realPrise}) => acc + realPrise,0))
    }, [rentData, availableData]);

    return (
        <div className='App'>
            <div className= "inf"> <h1>Awesome Bike Rental</h1></div>
            <Form addPostNew={addPostNew}/>

            <div className="wrapperTitleRent">Your rent ({numberOfRent}) (Total ${total})</div>
            <NewForm rentData={rentData} deletPost={deletPost} setNewId={setNewId} setNewTime={setNewTime}/>

            <div className="wrapperTitleRent">Available bicycles ({numberOfItems})</div>           
            <Available availableData={availableData} cutPost={cutPost} deleteBike={deleteBike}/>
        </div>
    )
};

export default App;

