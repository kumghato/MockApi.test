import React from 'react'

function Pricing() {
    const data = [
        {
            name: 'Free',
            price: '$0',
            user: 'Single User',
            storage: '5 GB',

        },
        {
            name: 'Plus',
            price: '$20',
            user: '5 Users',
            storage: '50 GB',


        },
        {
            name: 'Pro',
            price: '$40',
            user: 'Unlimited',
            storage: '150 GB',

        }

    ]
    return (
        <section classNameName="pricing">
            <div className="container">
                <div className="row">
                    {data.map((items) => {
                        return <div className="col-lg-4 p-4">
                            <div className="card mb-5 mb-lg-0 p-3">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">{items.name}</h5>
                                    <h6 className="card-price text-center">{items.price}<span className="period">/month</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fa fa-check"></i></span>{items.user === 'Single User' ? "Single User" : <b>{items.user}</b>}</li>
                                        <li><span className="fa-li"><i className="fa fa-check"></i></span>{items.storage}</li>
                                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Community Access</li>
                                        <li className={items.name === 'Free' ? "text-muted" : "text-unmuted"}><span className="fa-li"><i className={items.name === 'Free' ? `fa fa-times` : 'fa fa-check'}></i></span>Unlimited
                                            Private Projects</li>
                                        <li className={items.name === 'Free' ? "text-muted" : "text-unmuted"}><span className="fa-li"><i className={items.name === 'Free' ? `fa fa-times` : 'fa fa-check'}></i></span>Dedicated
                                            Phone Support</li>
                                        <li className={items.name === 'Free' ? "text-muted" : "text-unmuted"}><span className="fa-li"><i className={items.name === 'Free' ? `fa fa-times` : 'fa fa-check'}></i></span>{items.name == 'Pro' ? <span><b>Unlimited</b> Free Subdomains</span> : "Free Subdomains"}
                                        </li>
                                        <li className={items.name === 'Pro' ? "text-unmuted" : "text-muted"}><span className="fa-li"><i className={items.name === 'Pro' ? `fa fa-check` : 'fa fa-times'}></i></span>Monthly Status
                                            Reports</li>
                                    </ul>
                                    <div className="d-grid">
                                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    }
                    )}


                </div>
            </div>
        </section>



    )
}

export default Pricing