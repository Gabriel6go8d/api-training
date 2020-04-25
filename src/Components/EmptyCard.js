import React from 'react'

function EmptyCard(prop) {
    return (
        <div className='mt-5 col-12 col-md-6 col-xl-4 m-0 p-0 testtt'>
            <div className='row m-0 p-0 justify-content-center'>
                <div className='emptyCard' onClick={prop.add}>
                </div>
            </div>
        </div>
    )
}

export default EmptyCard
