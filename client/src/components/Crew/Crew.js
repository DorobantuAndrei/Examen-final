import React from "react";
import { Table , Form , Button } from 'react-bootstrap'
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Crew(){
    const navigate = useNavigate();
    const [members,setMembers] = useState([]);
    const [numeNou,setNumeNou] = useState('');
    const [rolNou,setRolNou] = useState('');
    useEffect(()=>{
        axios.get(`http://localhost:7000/api/get_all_crewMembers`).then(response=>{
            setMembers(response.data);
        })  
    })

    const setAtributes =(member)=>{
        let newMember = {
            nume:numeNou,
            rol:rolNou
        }
        axios.put(`http://localhost:7000/api/update_crewMember/`+member.id,newMember);
        
    }

    const deleteShip =(id)=>{
        axios.delete(`http://localhost:7000/api/delete_crewMember/`+id);
    }

    const addMembru =()=>{
        navigate('/add_membru');
    }
    return(
        <div className="container">
            <div className="title">
                <h1 className="title-div">Echipaj</h1>
                <button onClick={addMembru} className="btn-add-nava">Adauga membru de echipaj</button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Numele membrului</th>
                        <th>Rolul membrului</th>
                    </tr>
                </thead>
                {
                    members.map(member=>{
                        return(
                            <tr key={member.id}>
                                <td>{member.id}</td>
                                <td>{member.nume}</td>
                                <td>{member.rol }</td>
                                <td>
                                    <button onClick={()=> setAtributes(member)}>Editeaza</button>
                                    <button onClick={()=> deleteShip(member.id)}>Sterge membrul</button>
                                </td>

                            </tr>
                                    
                        )
                    })
                }
            </Table>
            <h1>Editeaza un membru</h1>
            <hr></hr>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Introduceti noul nume al membrului</Form.Label>
                <Form.Control type="text" placeholder="Introduceti numele membrului (minim 5 caractere)" onChange={(event)=>{
                    setNumeNou(event.target.value);
                }} />
                </Form.Group>
            
                <Form.Label>Selectati noul rol al membrului </Form.Label>
                <Form.Select aria-label="Default select example" onChange={(event)=>{
                    setRolNou(event.target.value);
                }}>
                    <option value="Capitan">Capitan</option>
                    <option value="General">General</option>
                    <option value="Bucatar">Bucatar</option>
                </Form.Select>
                
            </Form>
            
       </div> 
    )
}

export default Crew;