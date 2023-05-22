import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function Table() {
    const [data, setData] = useState([])
    const [form, setForm] = useState({
        email: "",
        password: "",
        isAgree: ""
    })
    const fetchData = async () => {
        const res = await axios.get('https://645bc567a8f9e4d6e7729b5b.mockapi.io/users');
        setData(res.data)

    };
    //Use Effect
    useEffect(() => {
        fetchData()
    }, []);

    //Delete list

    const deleteList = async (id) => {
        const del = await axios.delete(`https://645bc567a8f9e4d6e7729b5b.mockapi.io/users/${id}`);
        if (del.status === 200) {
            showToast()
            fetchData();
        }
    }

    //show toast
    const showToast = () => {
        toast.success('Delete Successful')
    }



    return (
        <div className='m-auto w-50'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Name</th>
                        <th scope="col">House No</th>
                        <th scope="col">DoB</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {data.map((items, i) => {
                    return <tbody>
                        <tr>
                            <th scope="row">{i + 1}</th>
                            <td>{items.Name}</td>
                            <td>{items.age}</td>
                            <td>{items.DoB}</td>
                            <td>
                                <Link to={`/table/view/${items.id}`}>
                                    <i class="fa fa-eye fa-2x" aria-hidden="true"></i>
                                </Link>

                                <i class="fa fa-pencil-square-o fa-2x mx-2" aria-hidden="true"></i>
                                <i class="fa fa-trash-o fa-2x" aria-hidden="true" onClick={() => deleteList(items.id)}></i>
                            </td>
                        </tr>
                    </tbody>
                })}

            </table>
            <Toaster />

        </div >
    )
}

export default Table