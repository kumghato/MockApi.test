import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function TableView() {
    let navigate = useNavigate();
    let params = useParams();
    // console.log(params.id)

    const [data, setData] = useState({})
    const fetchData = async () => {
        const res = await axios.get(`https://645bc567a8f9e4d6e7729b5b.mockapi.io/users/${params.id}`)
        setData(res.data)


    }

    console.log(data);

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <div className='co-3 d-flex'>
                    <div class="card">
                        <img src={data.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{data.Name}</h5>
                            <p class="card-text">{data.age}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}





export default TableView