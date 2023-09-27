import React from 'react'


async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

export default async function UserPage({ params }) {
    // console.log(params)

    const user = await getUser(params.id)

    return (
        <div className='bg-slate-400 p-10 rounded-md'>
            <img src={user.avatar} className='m-auto my-8 rounded-md' />
            <h3 className='font-bold text-black'>{user.id}. {user.first_name} {user.last_name}</h3>
            <p className='text-black'><span className='font-bold'>Email:</span> {user.email}</p>
        </div>
    )
}
