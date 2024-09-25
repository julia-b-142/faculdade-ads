# Prática 01 
Objetivos da prática: 

- Entender o conceito de roteamento no React.
- Aprender a utilizar bibliotecas de roteamento.
- Implementar rotas e sub-rotas.
- Manipular o histórico de navegação.


## Estruturas básicas 

Aqui estão algumas estruturas básicasque podem ser úteis durante o desenvolvimento de aplicações frontend:

1. Exemplo de Routes
```shell
import { BrowserRouter, Routes } from 'react-router-dom';
export default function App() {
 return (
   <BrowserRouter>
     <Routes>

     </Routes>
   </BrowserRouter>
 );
}

```
2. Exemplo de Route
```shell
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route index element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/support" element={<Support />} />
       <Route path="/support/faq" element={<Faq />} />
     </Routes>
   </BrowserRouter>
 );
}

```
3. Exemplo de BrowserRouter
```shell
import { BrowserRouter } from 'react-router-dom';
export default function App() {
 return (
   <BrowserRouter>

   </BrowserRouter>
 );
}

```
4. Exemplo de parâmetro de Rota
```shell
<Route path="/produto/:id" element={<Produto />} />


import { useParams } from 'react-router-dom';
function Produto(props) {
 const { id } = props.match.params;
 // ou
 const { id } = useParams();
 return (
   <div>
     <p>Produto {id}</p>
   </div>
 );
}

```
5. Exemplo de página não encontrada
```shell
<Routes>
  <Route element={<Layout />} >
    <Route path="/" element={<Home />} >
      <Route path="about" element={<About />} />
      <Route path="support" element={<Support />} >
        <Route path="faq" element={<Faq />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Route>
  </Route>
</Routes>

```
