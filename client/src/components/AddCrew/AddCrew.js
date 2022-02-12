import React from "react";
import { Form,Button} from 'react-bootstrap';
import { useState } from "react";
import './AddCrew.css'
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function AddCrew(){
    const navigate = useNavigate();
    const [numeMembru , setNumeMembru] = useState('');
    const [rol,setRol] = useState('');
    const adaugaMembru =()=>{
        if(numeMembru.length<5 ){
            alert("Numele membrului trebuie sa fie de minim 5 caractere");
        }else{
            let membru = {
                nume:numeMembru,
                rol :rol 
            }
            console.log(membru);
            axios.post(`http://localhost:7000/api/post_crewMember`,membru);
            navigate('/crew');
            
        }
        
    }
    return(
        <div className="container">
            <div className="top-container">
                <h1>Adauga Membru</h1>
            </div>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Introduceti numele membrului</Form.Label>
            <Form.Control type="text" placeholder="Introduceti numele membrului(minim 5 caractere)" onChange={(event)=>{
                setNumeMembru(event.target.value)
                }}/>
            </Form.Group>
        
            <Form.Label>Selectati rolul </Form.Label>
            <Form.Select aria-label="Default select example" onChange={(event)=>{
                    setRol(event.target.value);
                }}>
                    <option value="Capitan">Capitan</option>
                    <option value="General">General</option>
                    <option value="Bucatar">Bucatar</option>
                </Form.Select>
            <Button variant="primary" type="submit" onClick={adaugaMembru}>
            Adauga membru
            </Button>
        </Form>
      </div>
    )
}

export default AddCrew;