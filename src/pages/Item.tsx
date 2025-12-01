import Button from "../components/Button";
import MainTitle from "../components/MainTitle";
import Page from "../components/Page";
import Square from "../components/Square";

const Item = () => {
  return (
    <Page>
      <MainTitle text="Item: " strong="7 Wonders" />
      <Square>
        <div className="my-5 flex gap-5">
          <Square text="Cateegoria: Jogos" />
          <Square text="Quantidade em Estoque: 5" />
          <Square text="Preço: R$455,99" />
        </div>
        <p className="text-purple-base">
          Descrição: O Jogo 7 Wonders foi criado em bla bla bla la bla lbla
          ahshdsu hdugsdu sguidguigsiug dgsuigd igisug dgc sguigdi sugduigc
          igsigdigi sgduiguisg idu suigduigiuxsigdg uxigs
        </p>
        <div className="mt-5 flex items-center">
          <Button text="Atualizar" color="text-yellow-100" />
          <Button text="Excluir" color="text-red-base" />
          <p className="text-purple-base">Cadastrado em: 22/09/2025</p>
        </div>
      </Square>
    </Page>
  );
};

export default Item;
