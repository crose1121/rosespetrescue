import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllPets = () => {

    const [petList, setPetList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(response => {
                console.log("Response after getting all pets--->", response)
                setPetList(response.data.results);
            })
            .catch(err => console.log("Error when getting all pets--->", err))
    }, [])

    return (
        <div>
            <h1>Rescue a Pet</h1>
            <hr />

            <div id="wrapper">
                        
                <div class="module-section clearfix">

                    <ul id="content" className='carul'>
                        {
                            petList.map((pet, i) => {
                                return (
                                    <li className="card effect1" key={i}>
                                        <div className="inside-top">
                                            <h3 style={{backgroundColor: "white"}}>{pet.name}</h3>
                                            <Link to={`/pet/details/${pet._id}`}><img src={pet.imageUrl} className='carimage'/></Link>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default AllPets;
