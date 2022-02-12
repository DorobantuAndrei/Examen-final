import React from "react";
import { Table , Form , Button } from 'react-bootstrap'
import {useState,useEffect} from 'react';
import axios from 'axios';
import './ships.css'
import {useNavigate} from 'react-router-dom';

function Ships(){

    const navigate = useNavigate();
    const [nume,setNume] = useState('');
    const [displacement ,setDisplacement] = useState(0);
    const [ships,setShips] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const [sortType,setSortType] = useState('DESC');
    const [ship,setShip] = useState({
        nume:'',
        displacement :0
    })
    useEffect(()=>{
        if(searchTerm.length ===0){
        axios.get(`http://localhost:7000/api/get_all_ships`).then(respone=>{
            setShips(respone.data);
        })
        
        }else{
            axios.get(`http://localhost:7000/api/searchShip?searchTerm=${searchTerm}&order=${sortType}`).then(response=>{
                setShips(response.data);
            })
        }   
        
    })

    const setAtributes=(ship)=>{
        let newShip = {
            nume:nume,
            displacement:displacement
        }
        axios.put(`http://localhost:7000/api/update_ship/`+ship.id,newShip);
        
        
    }

    const deleteShip =(id)=>{
        axios.delete(`http://localhost:7000/api/delete_ship/${id}`).then(()=>{
            console.log('Stergere efectuata cu succes');
        })
    }

    const toAddShip = ()=>{
        navigate('/add_ship');
    }

    return(
        <div className="container">
            <div className="title">
                <h1 className="title-div">Nave</h1>
                <button onClick={toAddShip} className="btn-add-nava">Adauga Nava</button>
                <input className="btn-add-nava" type='text' placeholder="Cauta..." onChange={(event)=>{
                    setSearchTerm(event.target.value);

                }}></input>
                
                

                
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Denumirea navei</th>
                        <th>Viteza de deplasare a navei</th>
                    </tr>
                </thead>
                {
                    ships.map(ship=>{
                        return(
                            <tr key={ship.id}>
                                <td>{ship.id}</td>
                                <td>{ship.nume}</td>
                                <td>{ship.displacement }</td>
                                <td>
                                    <button onClick={()=> setAtributes(ship)}>Editeaza</button>
                                    <button onClick={()=> deleteShip(ship.id)}>Sterge nava</button>
                                </td>

                            </tr>
                                    
                        )
                    })
                }
            </Table>
            <h1>Editeaza o nava</h1>
            <hr></hr>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Introduceti noul nume al navei</Form.Label>
                <Form.Control type="text" placeholder="Introduceti numele navei(minim 3 caractere)" onChange={(event)=>{
                    setNume(event.target.value)
                    }}/>
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Introduceti noua viteza  de deplasare a navei </Form.Label>
                <Form.Control type="text" placeholder="Viteza" onChange={(event)=>{
                    setDisplacement(event.target.value);
                }}/>
                </Form.Group>
                
            </Form>
            
            
       </div> 
    )
}

export default Ships;