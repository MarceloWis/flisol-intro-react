import { useContext } from 'react'
import { MainContext } from '../../../contexts/context'
import { Link } from 'react-router-dom'

export function Index() {
  const { githubUser } = useContext(MainContext)
  return (
    <div>
      {/* {console.log(githubUser)} */}
      <div>
        Nome: {githubUser?.name} <br />
        Bio: {githubUser?.bio} <br />
        Imagem: <img src={githubUser?.avatar_url} alt="" /> <br />
        <Link to="/github">Github</Link>
      </div>
    </div>
  )
}
