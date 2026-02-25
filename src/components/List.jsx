import React from 'react'

export const List = ({ data = [] }) => {
    return (
        <>
            <ul className="list-group mb-3 mt-3">
                {
                    data.map((item) => (
                        <li  key={item.name} className="list-group-item">{item.name}</li>
                    ))
                }

            </ul>
        </>
    )
}
