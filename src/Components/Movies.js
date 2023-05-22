import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Await, Link, Router } from 'react-router-dom'
import { Toast } from 'reactstrap'

function Movies() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const Response = await axios.get('https://645bc567a8f9e4d6e7729b5b.mockapi.io/Movie')
        setData(Response.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    // console.log(Response)

    const deleteData = async (id) => {
        const del = await axios.delete(`https://645bc567a8f9e4d6e7729b5b.mockapi.io/Movie/${id}`)
        if (del.status == 200) {
            showToast()
            fetchData()
        }
    }
    function showToast() {
        toast.success('Delete Successful')
    }

    return (
        <div>
            <table class="table m-auto w-50 table-hover ">
                <thead>
                    <tr className=''>
                        <th scope="col">S.No</th>
                        <th scope="col">Name of the Movie</th>
                        <th scope="col">Name of the Director</th>
                        <th scope="col">Name of the Producer</th>
                        <th scope="col">Date of Release</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {data.map((items, i) => {
                    return <tbody>
                        <tr className=''>
                            <th scope="row">{i + 1}</th>
                            <td>{items.name}</td>
                            <td>{items.director}</td>
                            <td>{items.producer}</td>
                            <td>{new Date(items.releaseDate).toLocaleString()}</td>
                            <td><i class="fa fa-trash-o fa-2x trashCan mx-3" aria-hidden="true" onClick={() => deleteData(items.id)}></i></td>

                            <Link to={`/movies/Moviesview/${items.id}`}>
                                <td><i class="fa fa-eye fa-2x mx-3 trashCan" aria-hidden="true"></i></td>
                            </Link>
                        </tr>
                    </tbody>
                })}
            </table>
            <Toaster />
        </div>
    )
}

export default Movies