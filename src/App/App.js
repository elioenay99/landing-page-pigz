import logo from "C:/Users/ataia/Desktop/landing-page-pigz/src/images/Pigz-Gestão-Logo.svg";
import burguer from "C:/Users/ataia/Desktop/landing-page-pigz/src/images/burguer_2.png";
import grupo1 from "C:/Users/ataia/Desktop/landing-page-pigz/src/images/Grupo 3535.svg";
import grupo2 from "C:/Users/ataia/Desktop/landing-page-pigz/src/images/storefront_black_24dp.svg";
import grupo3 from "C:/Users/ataia/Desktop/landing-page-pigz/src/images/smartphone_black_24dp.svg";
import grupo4 from "C:/Users/ataia/Desktop/landing-page-pigz/src/images/Grupo 3545.svg";
import grupo5 from "C:/Users/ataia/Desktop/landing-page-pigz/src/images/print_black_24dp.svg";
import "./App.css";
import "./Emoji";

function App() {
  return (
    <div class="App">
      <header>
        <div class="Container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Retangulo">
          <p class="texto1"> Já sou parceiro </p>
        </div>
        <div class="box">
          <p class="texto2">
            Pigz: tudo que você precisa pra vender ainda mais!
          </p>
          <img src={burguer} className="Burguer" alt="burguer" />
        </div>
        <div class="text">
          <p class="texto3">
            Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
            Marketplace e deixar sua loja prontinha para iniciar as vendas.
          </p>
        </div>
        <div class="box2">
          <p class="texto4">Quero vender no Pigz</p>
          <p class="texto5">Dê o primeiro passo para aumentar suas vendas</p>
          <p class="nome">Nome</p>
          <div class="box3">
            <p class="texto6">Ataías Elioenay</p>
          </div>
          <p class="email">E-mail</p>
          <div class="box4">
            <p class="texto7">ataiaselioenay99@email.com</p>
          </div>
          <p class="telefone">Telefone</p>
          <div class="box5">
            <p class="texto8">(95) 991588648</p>
          </div>
          <p class="texto9">
            Ao continuar, aceito que a Pigz entre em contato comigo por
            telefone, e-mail ou WhatsApp.
          </p>
          <div class="box6">
            <p class="texto10">Continuar</p>
          </div>
          <img src={grupo1} className="grupo1" alt="logoPigz" />
        </div>
        <p class="texto11">Você tem um novo Pigzdido!</p>
        <div class="box7">
          <img src={grupo2} className="grupo2" alt="Marketplace" />
          <p class="texto12">Marketplace</p>
          <p class="texto13">Pra sua loja vender mais</p>
        </div>
        <div class="box8">
          <img src={grupo3} className="grupo3" alt="smartphone" />
          <p class="texto14">É fácil e rápido</p>
          <p class="texto15">Fazer um pedido no Pigz</p>
        </div>
        <div class="box9">
          <img src={grupo4} className="grupo4" alt="gestao" />
          <p class="texto16">Pigz Gestão</p>
          <p class="texto17">Você no controle, sempre</p>
        </div>
        <div class="box10">
          <img src={grupo5} className="grupo5" alt="impressora" />
          <p class="texto18">Vias de impressão</p>
          <p class="texto19">Personalizáveis</p>
        </div>
        <p class="texto20">Tudo que você precisa por apenas R$199/mês</p>
        <p class="texto21">
          Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão
          por cada venda, sem letrinhas miúdas.
        </p>
      </header>
    </div>
  );
}

export default App;
