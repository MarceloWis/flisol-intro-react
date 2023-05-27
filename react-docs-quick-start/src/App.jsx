import Container from "./components/Container"
import { MyButton } from "./components/MyButton"
import Page from "./components/Page"

function App() {

  function handleClick(data) {
    console.log(data)
    // console.log(data.target.innerHTML)
    alert(`Você clicou no item ${data}`)
  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 }
  ]

  return (
    <Container 
      // content="Hello from props"
    >
      <h1>Hello World</h1>
      <MyButton />


      <Page 
        // isAdmin
        isAdmin={true}
        // isAdmin={false}
      />

    <ul>
      {/* {products.forEach(product => {
        return (
          <li>{product.title}</li>
        )
      })} */}

      {/* {products.map(product => {
        return (
          <li key={product.id}>{product.title}</li>
        )
      })} */}

      {products.map(product => {
        return (
          <li 
          key={product.id}
          onClick={() => handleClick(product.title)}
          >{product.title}</li>
        )
      })}
    </ul>

    </Container>

  )
}

export default App
