import { useContext, useEffect } from "react"
import { MainContext } from "../../contexts/context"
import { Link } from "react-router-dom"

export default function UseEffectPage() {
  // const [user, setUser] = useState(null)
  const { githubUser, addGithubUser } = useContext(MainContext)
  // useEffect(() => {
  //   async function getUser() {
  //     const data = await (await fetch('https://api.github.com/users/marcelowis')).json()
  //     console.log(data)
  //     setUser(data)
      
  //   }
  //   getUser()
  // }, [])

  useEffect(() => {
    async function getUser() {
      const userParam = window.location.search.split("=")[1]
      if(!userParam) return
      const data = await (await fetch(`https://api.github.com/users/${userParam}`)).json()
      // console.log(data)
      // setUser(data)
      addGithubUser(data)
      console.log({githubUser})
    }
    getUser()
  }, [])

  return (
    <div>
      { githubUser ? (
        <div>
          <img src={githubUser.avatar_url} alt="" />
          <strong>{githubUser.name}</strong>
          <p>{githubUser.bio}</p>
          <Link to="/">Home</Link>
        </div>
      ) : (
        <h1>Nothing here</h1>
      ) }
    </div>
  )
}
