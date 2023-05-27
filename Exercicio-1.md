# Exercício: Lista de Tarefas

Descrição:
Neste exercício, você criará uma aplicação de lista de tarefas simples, onde os usuários poderão adicionar e remover tarefas. Serão utilizados os conceitos de `props`, `components`, `useState` e `useEffect`.

Passos:

Configure um novo projeto React usando Vite ou qualquer outra estrutura que preferir.

Crie um componente chamado `TaskForm`. Esse componente será responsável por receber a entrada do usuário para adicionar uma nova tarefa. O TaskForm deve conter um formulário com um campo de texto e um botão de envio. Quando o botão for clicado, a tarefa digitada pelo usuário deve ser enviada para o componente pai (por meio de uma função de callback que será passada como prop).

Crie um componente chamado `TaskList`. Esse componente será responsável por exibir a lista de tarefas. Ele receberá as tarefas como prop do componente pai. Utilize o useState para gerenciar o estado das tarefas dentro desse componente.

No componente `TaskList`, utilize o `useEffect` para monitorar as alterações nas tarefas. Sempre que houver uma alteração nas tarefas, atualize o estado do componente com as novas tarefas.

Crie um botão `Remover` para cada tarefa exibida na lista. Quando o botão for clicado, a respectiva tarefa deve ser removida. Utilize o `useState` para gerenciar o estado das tarefas e o `onClick` para lidar com o evento de clique do botão de remoção.

No componente principal da sua aplicação, crie um estado para armazenar a lista de tarefas iniciais. Passe esse estado para o componente TaskList como prop.

Quando uma nova tarefa for adicionada no `TaskForm`, atualize a lista de tarefas no componente principal e, consequentemente, a lista exibida no `TaskList`.

Dicas:

Utilize os conceitos de props para passar os dados entre os componentes.
Utilize o useState para gerenciar o estado das tarefas e atualizá-lo sempre que necessário.
Utilize o useEffect para monitorar as alterações nas tarefas e atualizar o estado do componente.
Utilize o map para percorrer a lista de tarefas e renderizar cada uma delas no TaskList.
Este exercício permitirá que você pratique o uso de props, components, useState e useEffect no ReactJS. Ele envolve a criação de componentes reutilizáveis, a manipulação de estados e o uso de efeitos para atualizar a interface do usuário quando ocorrem alterações nos dados.


