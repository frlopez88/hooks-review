import React from 'react'
//prop == parameters
export const Cards = ({title, description}) => {
    return (
        <>
            <div className="card m-3" >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </>

    )
}
