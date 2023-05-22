import React from 'react'
import { useState } from 'react'

function Login() {
    const [count, setCount] = useState(0)

    return (
        <>

            <div>
                <button className='btn btn-primary mx-3' onClick={() => setCount(count - 1)} disabled={count <= 0}>-</button>
                {count}

                <button className='btn btn-primary mx-3' onClick={() => setCount(count + 1)}>+</button>
            </div>

        </>
    )
}

export default Login