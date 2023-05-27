# Criando o primeiro projeto com React e Vite
Este é um guia passo a passo para criar seu primeiro projeto utilizando React e Vite como ferramentas de desenvolvimento frontend.

## Pré-requisitos
Node.js (versão 12 ou superior) instalado em seu sistema.
NPM (Node Package Manager) ou Yarn instalado em seu sistema.

## Passos

## 1. Criando o projeto
Agora, vamos criar o projeto React utilizando o Vite. No terminal, navegue até o diretório onde deseja criar o projeto e execute o seguinte comando:

```bash
  npm create vite@latest my-react-app
```
Agora, selecione a opção `React`, pressione a tecla ENTER e escolha a opção `JavaScript`.

Isso irá criar uma nova pasta chamada my-react-app com a estrutura inicial do projeto React utilizando o Vite.

## 2. Instalando as dependências
Após a criação do projeto, navegue para o diretório do projeto:

```bash
cd my-react-app
```
Em seguida, instale as dependências do projeto executando o seguinte comando:
```bash
  npm install
```
## 3. Executando o projeto
Agora que todas as dependências estão instaladas, podemos executar o projeto. No terminal, execute o seguinte comando:

```bash
  npm run dev
```

Isso iniciará o servidor de desenvolvimento e abrirá o projeto no seu navegador padrão. Você poderá ver a aplicação React básica sendo executada.

## 4. Personalizando o projeto
Agora que seu projeto está configurado e em execução, você pode começar a personalizá-lo de acordo com suas necessidades. O arquivo principal do React, src/App.js, é um bom ponto de partida para começar a editar o conteúdo da aplicação.
## 4.1 Conceitos básicos

### Componentes

No React, um componente é uma unidade reutilizável e autocontida de código que encapsula a lógica e a interface do usuário de uma parte específica da aplicação. Em outras palavras, um componente é uma peça modular e independente que representa uma parte visual ou funcional da interface do usuário. Exemplo de um componente:

```jsx
import React from 'react';

function Button() {

  return (
    <button>
      Clique Aqui
    </button>
  );
}

export default Button;
```
### Props
Em React, as props (abreviação de "properties", ou propriedades) são um mecanismo para passar dados de um componente pai para um componente filho. As props são um dos principais meios de comunicação entre os componentes.

As props são passadas para um componente como atributos no momento em que ele é utilizado em outro componente. Elas são definidas no componente pai e podem conter qualquer tipo de dado, como valores primitivos (números, strings, booleanos), objetos, funções, entre outros.

No componente filho, as props são acessadas como propriedades do objeto props do componente. Elas são de leitura apenas (read-only) e não devem ser modificadas dentro do componente filho.

```jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = 'Olá, mundo!';

  return (
    <div>
      <ChildComponent greeting={message} />
    </div>
  );
}

// Componente filho
import React from 'react';

function ChildComponent(props) {
  return <h1>{props.greeting}</h1>;
}

export default ChildComponent;

```
Neste exemplo, o componente pai ParentComponent possui uma variável message que contém a mensagem "Olá, mundo!". Essa mensagem é passada como uma prop greeting para o componente filho ChildComponent. No componente filho, a prop greeting é acessada através do objeto props e renderizada como um título <h1>.

As props são uma maneira eficaz de transmitir dados e configurações de um componente pai para um componente filho, permitindo a reutilização e a personalização flexível dos componentes. Elas permitem que os componentes sejam configurados de maneira dinâmica e adaptável às necessidades específicas de cada situação.

### Estados

useState é um dos React Hooks, uma funcionalidade introduzida no React 16.8 que permite adicionar e gerenciar o estado em componentes funcionais. O useState é uma função que retorna um par de valores: o estado atual e uma função para atualizar esse estado.

Aqui está um exemplo básico de como utilizar o useState em um componente funcional:

```jsx
  import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default Counter;

```
Neste exemplo, o componente funcional Counter utiliza o useState para adicionar um estado interno count ao componente. A função useState(0) inicializa o estado com o valor inicial de 0. A desestruturação [count, setCount] atribui o valor atual do estado a count e a função para atualizar o estado a setCount.

A função increment é responsável por atualizar o estado. Quando o botão é clicado, a função increment é chamada, incrementando o valor atual do estado em 1 por meio da função setCount.

A renderização do componente exibe o valor atual do estado count na tag <p>. Ao clicar no botão "Incrementar", o valor do estado é atualizado e a interface é re-renderizada, exibindo o novo valor.

O useState permite que componentes funcionais tenham estado interno, tornando-os mais poderosos e flexíveis. Ele oferece uma maneira simples de adicionar e atualizar o estado em componentes funcionais sem a necessidade de classes e ciclos de vida.

## UseEffect

useEffect é outro React Hook que permite executar efeitos colaterais em componentes funcionais. Efeitos colaterais são ações que ocorrem além da renderização do componente, como fazer chamadas a APIs, manipular eventos, atualizar o documento, entre outras operações. Ele é usado para definir o comportamento do componente em diferentes momentos do ciclo de vida.

Aqui está um exemplo básico de como utilizar o useEffect:
```jsx
  import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Tempo decorrido: {seconds} segundos</p>
    </div>
  );
}

export default Timer;

```
Neste exemplo, o componente funcional Timer utiliza o useEffect para iniciar um timer que incrementa o valor do estado seconds a cada segundo.

Dentro do useEffect, passamos uma função de callback que será executada após a renderização do componente e sempre que ocorrerem mudanças nas dependências especificadas (no exemplo, as dependências estão vazias [], indicando que o efeito será executado apenas uma vez no início).

Dentro da função de callback, usamos setInterval para iniciar um intervalo que chama a função de atualização do estado setSeconds a cada segundo. A função de atualização recebe o valor anterior do estado (prevSeconds) e incrementa em 1.

Também utilizamos o retorno de função do useEffect para limpar o intervalo quando o componente é desmontado. Isso é importante para evitar vazamentos de memória e garantir que o timer pare de executar quando o componente não estiver mais sendo exibido.

O valor atualizado do estado seconds é renderizado na interface. A cada segundo, o valor é atualizado e a interface é re-renderizada.

O useEffect permite que os componentes funcionais tenham comportamentos baseados em eventos, tempo e outras ações assíncronas, tornando-os mais flexíveis e poderosos. É uma maneira elegante de lidar com efeitos colaterais em componentes funcionais

## 5. Navegação

1. Primeiro, instale a biblioteca react-router-dom no seu projeto:
```bash
npm install react-router-dom
```
2. Em seguida, vamos criar os componentes para cada rota. Suponha que tenhamos dois componentes: Home e About.

```jsx
// Home.js
import React from 'react';

function Home() {
  return <h1>Página Inicial</h1>;
}

export default Home;

// About.js
import React from 'react';

function About() {
  return <h1>Sobre</h1>;
}

export default About;
```
3. Agora, crie um componente que define as rotas da aplicação, utilizando o BrowserRouter e o Route do react-router-dom. Vamos chamar esse componente de App.
```jsx
  // App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

```
No exemplo acima, importamos os componentes BrowserRouter, Switch, Route e Link do react-router-dom. Em seguida, definimos as rotas no componente App. O componente Router envolve todo o conteúdo da nossa aplicação e fornece a funcionalidade de roteamento.

Dentro do Router, temos um elemento nav que contém links para as diferentes rotas. Utilizamos o componente Link para criar os links. Em seguida, definimos o Switch, que renderiza apenas a primeira Route que corresponder ao caminho da URL atual.

As rotas são definidas com o componente Route. A propriedade path define o caminho da rota, e component especifica o componente a ser renderizado quando a rota correspondente for acessada.

4. Por fim, renderize o componente App no seu arquivo principal (index.js ou App.js, por exemplo):

```jsx
  import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
Agora, ao executar o aplicativo, você poderá navegar entre as rotas "Home" e "Sobre" usando os links fornecidos na barra de navegação.

Este é um exemplo básico para você começar a trabalhar com rotas no React usando o react-router-dom. À medida que seu aplicativo cresce, você pode adicionar mais rotas, componentes e recursos para criar uma navegação mais avançada e dinâmica.


## 5. Build do projeto
Para criar uma versão otimizada do projeto para implantação em produção, você pode executar o seguinte comando:
```bash
  npm run build
```

Isso criará uma pasta dist com os arquivos otimizados para produção.

## Conclusão
Parabéns! Você criou com sucesso seu primeiro projeto com React e Vite. Agora você pode começar a desenvolver sua aplicação React, explorar os recursos do Vite e personalizar o projeto de acordo com suas necessidades.

Lembre-se de consultar a documentação oficial do React e do Vite para obter mais informações sobre como aproveitar ao máximo essas ferramentas.