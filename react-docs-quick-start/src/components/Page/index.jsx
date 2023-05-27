import React from 'react'


 function AdminPage() {
  return (
    <div>
      Aqui é o painel de Admin
    </div>
  )
}

 function UserPage() {
  return (
    <div>
      Aqui é a página do Usuario
    </div>
  )
}


export default function Page(props) {
  return (
    <>
    { props.isAdmin ? (
        <AdminPage />
      ) : (
        <UserPage />
      )
    }
    </>
  )
}
