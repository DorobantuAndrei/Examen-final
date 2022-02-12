import React from "react";
import { Form,Button} from 'react-bootstrap';
import { useState } from "react";
import './AddShip.css'
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function AddShip(){
    const navigate = useNavigate();
    const [numeNava,setNumeNava] = useState('');
    const [displacement ,setDisplacement ] = useState('');
    const adaugaNava =()=>{
        if(numeNava.length<3 || displacement<50){
            alert("Numele navei trebuie sa fie de minim 3 caractere , iar Viteza de deplasare minim 50");
        }else{
            let nava = {
                nume:numeNava,
                displacement :displacement 
            }
            axios.post(`http://localhost:7000/api/post_ship`,nava);
            navigate('/ships');
            
        }
        
    }
    return(
        <div className="container">
            <div className="top-container">
                <h1>Adauga Nava</h1>
            </div>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Introduceti numele navei</Form.Label>
            <Form.Control type="text" placeholder="Introduceti numele navei(minim 3 caractere)" onChange={(event)=>{
                setNumeNava(event.target.value)
                }}/>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Introduceti viteza de deplasare</Form.Label>
            <Form.Control type="text" placeholder="Viteza" onChange={(event)=>{
                setDisplacement(event.target.value);
            }}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={adaugaNava}>
            Adauga nava
            </Button>
        </Form>
      </div>
    )
}

export default AddShip;