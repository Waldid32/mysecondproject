import Users from "@/components/Users"

async function fectUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function page() {

  const users = await fectUsers()
  return (
    <Users users={users} />
  )
}

export default page