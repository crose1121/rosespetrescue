import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PetDetails = () => {

    const [petDetails, setPetDetails] = useState({
        name: "",
        imageUrl: ""
    })

    const { id } = useParams();

    function change_text1() {
        document.getElementById("adopt").innerHTML = `Success! ${petDetails.name} has been queued for adoption. We will notify you when the adoption status is updated. Thank you for supporting our animals.`;
    }



    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(response => {
                console.log("Response after getting 1 pet--->", response)
                setPetDetails(response.data.results)
            })
            .catch(err => console.log("Error when getting 1 pet--->", err))
    }, [])

    return (
        <div>
            <h2>{petDetails.name}</h2>
            <img src={petDetails.imageUrl} alt="pet image" />
            <hr />
            <button className="btn btn-info" onClick={change_text1}>Queue for Adoption</button>
            <br /><br />
            <p id="adopt" className='text-success'></p>
        </div>
    );
};


export default PetDetails;