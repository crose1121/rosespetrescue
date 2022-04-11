import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Contributors = () => {

    const [contributorList, setContributorList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/contributors")
            .then(response=>{
                console.log("Response when getting all contributors--->", response)
                setContributorList(response.data.results)
            })
            .catch(err=>console.log("Error when getting all contributors--->", err))
    },[])

    return (
        <div>
            <h1>Our Contributors</h1>
            <p> <em> We're In This Together </em></p> 
            <hr /><br />

            {
                contributorList.map((contributor, i)=>{
                    return(
                        <div key={i} className='parent'>
                            <div className="contributor">
                                <h4>{contributor.name}</h4>
                                <p>Age: {contributor.age}</p>
                                <p>Pets Saved: {contributor.numPets}</p>
                                
                            </div>

                            <div className="details">
                                <h4>Contributor Story</h4>
                                <hr />
                                <p>{contributor.description}</p>
                            </div>
                            <br />
                        </div>
                        
                        )
                    })
                }

        </div>
    );
};

export default Contributors;