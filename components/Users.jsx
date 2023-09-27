"use client"
import Link from "next/link"

function Users({ users }) {
    return (
        <ul>
            {
                users.map(user => (
                    <Link
                        href={`/users/${user.id}`}
                        key={user.id}
                    >
                        <li
                            key={user.id}
                            className="bg-slate-400 mb-3 p-4 rounded-lg text-black flex justify-between items-center"
                        >
                            <div className="p-5">
                                <h2 className="font-bold">{user.id} {user.first_name} {user.last_name} </h2>
                                <p className="text-slate-100">email: {user.email}</p>
                            </div>
                            <img src={user.avatar} className="rounded-full w-16" />
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default Users