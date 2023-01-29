# Create-Categorys
Aplicação capaz de criar categorias e armazena-las em um banco de dados não relacional, o mongoDB, capaz de lista-las, edita-las e deleta-las do banco, feito na ferramenta Nodejs, usando para uma interface responsiva e que se adequasse á qualquer dispositívo o bootstrap.

<h2>Descrição</h2>
<ul>
  <li>Essa aplicação foi construida com o intuito de criar categorias de um determinado produto, conforme a necessidade de cada usuário;</li>
  <li>Na rota principal da aplicação temos a exibição de um header que possue dois links, que é o link <strong>Categorias</strong>, correspondente a rota responsável por listar os nomes das categorias criadas e o número de categorias, e o link <strong>criar Categoria</strong>, que corresponde ao formulário de criação das categorias;  e também temos abaixo do header a lista das categorias criadas, sendo listadas de forma crescente, com informações como o nome da categoria, seu slug, e a data de criação da categoria.</li>
  
  <li>Cada categoria listada na rota principal possue dois botoes, o botão de editar, e o botão de deletar; quando clicamos no botão de deletar,  seremos redirecionados para uma rota onde vamos confirmar se realmente queremos ou nao deletar aquela categoria específica; quando clicamos no botão de editar a categoria, seremos redirecionados para a rota que possue o formulário de edição daquela categoria, e os campos desse formulário estarão preenchidos com os valores atuais daquela categoria./li>
  
  <li>Ao editar alguma categoria, o seu novo valor é armazenado no banco de dados e assim exibidos na rota principal da aplicação</li>
  <li>Foi usado o banco de dados não relacional MongoDB, sendo conectado ao nodejs por meio do mongoose.</li>
  <li>Para a elaboração da interface, foi utilizado o framework do html, o chamado Bootstrap, deixando a aplicação responsiva e capaz de se adaptar em qualquer dispositivo móvel.</li>
  <li>Para permitir a visualização da aplicação, foi utilizado o servidor do express, o qual é um servidor local</li>


<h2>Ferramentas utilizadas</h2>
<ol>
<li>JAVASCRIPT</li>
<li>NODEJS</li>
<li>BOOTSTRAP</li>
<li>HANDLEBARS</li>
<li>EXPRESS</li>
<li>MONGODB</li>
</ol>
  
<h3>Dependençias instaladas</h3>
<p>Essas dependencias foram instaladas por meio do prompt de comandos(CMD) da maquina, por meio do comando npm install Nome_da_dependencia.</p>
<p>Foram elas:</p>
<ol>
<li> <h5>Express</h5> : npm install express</li>
<li> <h5>Template engine handlebars</h5> : npm install express-handlebars</li>
<li> <h5>Path</h5> : npm install path</li>
<li> <h5>Nodemon</h5> : npm install nodemon</li>
<li> <h5>session</h5> : npm install express-session</li>
<li> <h5>Flash</h5> : npm install connect-flash</li>
<li> <h5>Mongoose</h5> : npm install mongoose</li>
</ol>

<h2>Preview</h2>
