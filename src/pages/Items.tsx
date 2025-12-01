import Button from "../components/Button";
import MainTitle from "../components/MainTitle";
import Page from "../components/Page";
import Square from "../components/Square";

const Items = () => {
  return (
    <Page>
      <MainTitle text="Items em " strong="Estoque" />
      <Square>
        <table className="w-full mt-4">
          <thead>
            <tr className="border-b border-purple-base">
              <th className="text-left text-purple-base font-semibold py-2">
                ID
              </th>
              <th className="text-left text-purple-base font-semibold py-2">
                Nome
              </th>
              <th className="text-left text-purple-base font-semibold py-2">
                Em Estoque
              </th>
              <th className="text-left text-purple-base font-semibold py-2">
                Categoria
              </th>
              <th className="text-center pl-30 text-purple-base font-semibold py-2">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-purple-base py-2">b-644n4b5-4n47n</td>
              <td className="text-purple-base py-2">7-Wonders</td>
              <td className="text-purple-base py-2">8 unid.</td>
              <td className="text-purple-base py-2">Jogos</td>
              <td className="text-right text-purple-base py-2">
                <Button text="Ver" />
                <Button text="Atualizar" color="text-yellow-100" />
                <Button text="Excluir" color="text-red-base" />
              </td>
            </tr>
          </tbody>
        </table>
      </Square>
    </Page>
  );
};

export default Items;
