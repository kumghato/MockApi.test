import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigation, useParams } from 'react-router-dom'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function MoviesView() {
    // let navigation = useNavigation();
    let params = useParams();
    const [data, setData] = useState({})
    const [popUp, setpopUp] = useState(false)
    const [editId, seteditId] = useState('')
    const [editData, seteditData] = useState({
        name: '',
        director: '',
        producer: '',
        releaseDate: ''

    })

    const fetchData = async () => {
        const response = await axios.get(`https://645bc567a8f9e4d6e7729b5b.mockapi.io/Movie/${params.id}`)
        setData(response.data)
        console.log(response);
    }
    const toggle = () => {
        setpopUp(!popUp)
    }
    // useEffect(() => {
    //     if (editId !== '') {
    //         fetchSingleData()
    //     }
    // }, [editId])

    useEffect(() => {
        fetchData()
    }, [])
    // const fetchSingleData = async () => {
    //     const response = await axios.get(`https://645bc567a8f9e4d6e7729b5b.mockapi.io/Movie/${editId}`)
    //     seteditData(response.data)
    // }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div class="card m-auto w-25" style={{ width: `18rem` }}>
            <img src={data.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title"><b>{data.name}</b></h5>
                <p class="card-text">Directed by: {data.director}</p>
                <p class="card-text">Produced by: {data.producer}</p>
                <p class="card-text">Release Date: {new Date(data.releaseDate).toLocaleString()}</p>
                <a href="#" class="btn btn-primary" onClick={toggle}>EDIT</a>
            </div>
            <Modal isOpen={popUp} toggle={() => setpopUp(!popUp)}>
                <ModalHeader className='text-center'>
                    <input className='p-2' type='text' name="name" value={data.name} onChange={(event) => { handleChange(event) }} />
                </ModalHeader>
                <ModalBody>
                    <p className='my-3'>Director</p>
                    <input className='p-2' type='text' name="director" value={data.director} onChange={(event) => { handleChange(event) }} />
                    <br></br>
                    <p className='my-3 '>Producer</p>
                    <input className='p-2' type='text' name="producer" value={data.producer} onChange={(event) => { handleChange(event) }} />
                    <br></br>
                    <p className='my-3'>Relase Date</p>
                    <input className='p-2' type='text' name="releaseDate" value={new Date(data.releaseDate).toLocaleString()} onChange={(event) => { handleChange(event) }} />
                </ModalBody>
                <ModalFooter>
                    <Button className='btn btn-danger'>Submit</Button>
                </ModalFooter>
            </Modal>
        </div >
    )
}

export default MoviesView