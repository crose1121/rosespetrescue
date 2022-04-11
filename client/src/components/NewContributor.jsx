import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const NewContributor = () => {

    const [contributorObj, setContributorObj] = useState({
        name: "",
        age: null,
        numPets: null,
        description: ""
    });

    const [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const changeHandler = (e) =>{
        setContributorObj({
            ...contributorObj,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e =>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/contributors", contributorObj)
            .then(response=>{
                console.log("Response after creating contributor--->", response)
                response.data.errors?
                setFormErrors(response.data.errors)
                :history.push("/")
            })
            .catch(err=>console.log("Error when trying to add contributor--->", err))
    }

    return (
        <div className='container'>
            <h1>Add Yourself as a Pet Rescue Contributor</h1>
            <hr />

            <form action="" onSubmit={submitHandler}>

                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" onChange={changeHandler} className="form-control"/>
                    <p className='text-danger errortag'>{formErrors.name?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="">Age</label>
                    <input type="number" name="age" onChange={changeHandler} className="form-control"/>
                    <p className='text-danger errortag'>{formErrors.age?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="">Number of Pets Rescued</label>
                    <input type="number" name="numPets" onChange={changeHandler} className="form-control"/>
                    <p className='text-danger errortag'>{formErrors.numPets?.message}</p>
                </div>

                <div className="form-group">
                    <label htmlFor="">A Description About You</label>
                    <input type="text" name="description" onChange={changeHandler} className="form-control"/>
                    <p className='text-danger errortag'>{formErrors.description?.message}</p>
                </div>

                <input type="submit" value="Submit" className='btn btn-info m-3'/>

            </form>
        </div>
    );
};


export default NewContributor;