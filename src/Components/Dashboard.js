import React, { useState } from 'react'

function Dashboard() {
    const [show, setShow] = useState(false)

    const texts = [
        {
            heading: 'Earnings Monthly',
            amount: '$400000',
            color: 'primary'

        },
        {
            heading: 'Earnings Yearly',
            amount: '$400000',
            color: 'success'

        },
        {
            heading: 'Task ',
            amount: '50%',
            color: 'info'

        },
        {
            heading: 'Pending request',
            amount: '18',
            color: 'warning'

        },
    ]
    return (
        <div className='container'>
            <button className='btn btn-danger' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
            {show ? (<div className='row'>

                {texts.map((items) => {

                    return <div class="col-3 mt-5 p-5 ">
                        <div class={`card border-${items.color} border-5 border-start `} style={{ width: '18rem' }} >
                            <div class="card-body">
                                <h5 class={`card-title text-${items.color}`}>{items.heading}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">{items.amount}</h6>

                            </div>
                        </div>
                    </div>
                })}

            </div>) : ""}


        </div>
    )
}

export default Dashboard