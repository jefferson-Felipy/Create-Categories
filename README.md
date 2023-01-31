# Create-Categories
Aplicação capaz de criar categorias e armazena-las em um banco de dados não relacional, o mongoDB, capaz de lista-las, edita-las e deleta-las do banco, feito na ferramenta Nodejs, usando para uma interface responsiva e que se adequasse á qualquer dispositívo o bootstrap.

<h3><strong>OBS:</strong></h3> <p>Não há o deploy dessa aplicação em nenhuma plataforma, portanto, não é possível rodar essa aplicação em um servidor publico, mas eu ensino voce a rodar essa aplicação em seu servidor local, e essas informações estao abaixo do tópico preview, no tópico <strong>Como Rodar o Servidor Local</strong></p>

<h2>Descrição</h2>
<ul>
  <li>Essa aplicação foi construida com o intuito de criar categorias de um determinado produto, conforme a necessidade de cada usuário;</li>
  <li>Na rota principal da aplicação temos a exibição de um header que possue dois links, que é o link <strong>Categorias</strong>, correspondente a rota responsável por listar os nomes das categorias criadas e o número de categorias, e o link <strong>criar Categoria</strong>, que corresponde ao formulário de criação das categorias;  e também temos abaixo do header a lista das categorias criadas, sendo listadas de forma crescente, com informações como o nome da categoria, seu slug, e a data de criação da categoria.</li>
  
  <li>Cada categoria listada na rota principal possue dois botoes, o botão de editar, e o botão de deletar; quando clicamos no botão de deletar,  seremos redirecionados para uma rota onde vamos confirmar se realmente queremos ou nao deletar aquela categoria específica; quando clicamos no botão de editar a categoria, seremos redirecionados para a rota que possue o formulário de edição daquela categoria, e os campos desse formulário estarão preenchidos com os valores atuais daquela categoria./li>
  
  <li>Ao editar alguma categoria, o seu novo valor é armazenado no banco de dados nolugar do anterior e assim exibidos na rota principal da aplicação</li>
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
<li>Essa corresponde a rota principal da aplicação, nela são exibidos a listagem de cada categoria, mostrando suas informações como slug e a data da sua crição. Toda categoria cadastrada será listada nessa rota de forma crescente, e cada categoria possue dois botoes, um para edita-la e o outro para deleta-la_:</li>

![Captura de Tela (128)](https://user-images.githubusercontent.com/119543591/215329916-1a75197d-c7bb-4347-a85b-a847a53eaf50.png)

<li>No header temos dois links, e um desses links é para criar as categorias; ao clicarmos nele seremos redirecionados para essa rota do formulário de cadastro de categorias, onde podemos cadastrar as categorias com as informações necessárias, e quando cadastrarmos, elas serão armazenadas no banco de dados e listadas na rota principal_:</li>

![Captura de Tela (133)](https://user-images.githubusercontent.com/119543591/215330054-48aaae81-a4db-451c-8549-ace275328ad8.png)

<li>Cada categoria listada possue um botão de editar, quando clicamos nesse botão somos redirecionados para esse formulário, onde as informações atuais daquela categoria será exibidas em cada campo desse formulário, basta alterarmos o que for necessário e editar,para que as novas informações sejam armazenadas no banco de dados no lugar das informações anteriores e assim listadas na rota principal_:</li>

![Captura de Tela (131)](https://user-images.githubusercontent.com/119543591/215330362-dc745df7-3f94-4eac-ae98-7e51c366b56e.png)

<li>Quando clicamos no botão de deletar aquela categoria específica, será nos redirecionado para uma rota, e nessa rota iremos confirmar que queremos deletar aquela categoria, e após isso, a categoria será deletada do banco de dados, e assim não listada mais na rota principal_:</li>

![Captura de Tela (129)](https://user-images.githubusercontent.com/119543591/215330842-caea88af-f741-4c67-bd66-95e50d14a2c8.png)

<li>Após confirmamos que queremos deletar aquela categoria, iremos ser redirecionados para a rota principal com a mensagem de que aquela categoria foi deletada com sucesso do banco de dados e assim nao será mais listada_:</li>

![Captura de Tela (130)](https://user-images.githubusercontent.com/119543591/215330922-4735f76a-bd0c-4712-b023-18dd29030dfe.png)

<li>Por fim, temos o link categorias no header da página, cujo link irá nos redirecionar para uma rota que exibe a quantidade de categorias e o nome de cada uma delas_:</li>

![Captura de Tela (135)](https://user-images.githubusercontent.com/119543591/215330999-4fc4dc8f-d206-4b2b-bf6a-f3c0053e2d63.png)


<h3>Como rodar no servidor local</h3>
<p>Para voce rodar essa aplicação em sua maquina, te darei duas formas, sendo a primeira mais simples e a segunda um pouco mais complexo. Vamos la?!</p>

<ol>
<li> Para voce rodar essa aplicação na sua maquina/no seu repositório local, voce irá entrar aqui no repositório dessa aplicação e vai no diretorio principal onde está armazenado todos os outros diretórios. Acima dos diretorios, voce verá essa parte que esta marcada em vermelho do botao Code do repositório, na imagem abaixo.

![Captura de Tela (136)](https://user-images.githubusercontent.com/119543591/215285210-cca1e003-7e6d-4e51-89a7-ac87512fa3f8.png)

<p> Após clicar nesse botao, irá abrir uma pequena aba, em baixo dessa aba tem esse campo marcado em vermelho da imagem abaixo, que se chama DOWNLOAD ZIP, voce simplismente clica, e vai baixar toda aplicação em formato ZIP, e então voce vai no diretorio de downloads do seu desktop e extraia esse diretorio para uma pasta normal, e após extrair, basta voce abrir esse diretorio em seu editor de codigo. </p>

![Captura de Tela (137)](https://user-images.githubusercontent.com/119543591/215286043-ebc3d187-0244-47f9-bb11-420d7f3f5d43.png)

<p> Apos abrir em seu editor de código o diretorio dessa aplicação, voce terá que ir ate esse diretorio pelo seu CMD(prompt de comando) e vai digitar o comando NODEMON, e o servidor será aberto. Após isso, voce vai no seu navegador e digita localhost://8081, e a aplicação irá rodar.</p></li>

<li>Segunda forma de voce rodar essa aplicação em seu servidor local é clonar esse repositório por meio do seu CMD, onde, na pasta que voçe quiser que esse repositório seja clonado em seu desktop, voce irá digitar o comando: <strong> git clone https://github.com/jefferson-Felipy/Customer_Registration_System.git</strong>. E apos isso, basta abrir essa pasta onde foi clonado o repositório no seu editor, além de digitar o comando NODEMON no seu cmd na pasta desse diretorio,e então voce vai abrir o seu navegador e digitar o mesmo endereço da rota principal da aplicação,e estará rodando.</li>
</ol>

<h4>Desenvolvido por Jeffeson Felipe</h4>

