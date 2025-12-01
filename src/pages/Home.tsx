import MainTitle from "../components/MainTitle";
import Square from "../components/Square";
import diversityOfItems from "../assets/diversityOfItems.svg";
import totalInventory from "../assets/totalInventory.svg";
import recentItems from "../assets/recenteItems.svg";
import itemsRunningOut from "../assets/itemsRunningOut.svg";
import SimpleButton from "../components/SimpleButton";
import Page from "../components/Page";
const Home = () => {
  return (
    <Page>
      <MainTitle text="Relatório de " strong="Vendas" />
      <div className="flex gap-5">
        <Square text="Diversidade de Items" icon={diversityOfItems} value={2} />
        <Square text="Inventário Total" icon={totalInventory} value={40} />
        <Square text="Items Recentes" icon={recentItems} value={2} />
        <Square text="Items Acabando" icon={itemsRunningOut} value={1} />
      </div>
      <div className="flex gap-5">
        <Square>
          <table className="w-full mt-4">
            <thead>
              <tr className="border-b border-purple-base">
                <th className="text-left text-purple-base font-semibold py-2">
                  Items Recentes
                </th>
                <th className="text-right text-purple-base font-semibold py-2">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-purple-base py-2">Produto A</td>
                <td className="text-right text-purple-base py-2">
                  <SimpleButton />
                </td>
              </tr>
              <tr>
                <td className="text-purple-base py-2">Produto B</td>
                <td className="text-right text-purple-base py-2">
                  <SimpleButton />
                </td>
              </tr>
            </tbody>
          </table>
        </Square>
        <Square>
          <table className="w-full mt-4">
            <thead>
              <tr className="border-b border-purple-base">
                <th className="text-left text-purple-base font-semibold py-2">
                  Items Acabando
                </th>
                <th className="text-right text-purple-base font-semibold py-2">
                  QTD
                </th>
                <th className="text-right text-purple-base font-semibold py-2">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-purple-base py-2">Eletrônicos</td>
                <td className="text-right text-purple-base py-2">15</td>
                <td className="text-right text-purple-base py-2">
                  <SimpleButton />
                </td>
              </tr>
              <tr>
                <td className="text-purple-base py-2">Roupas</td>
                <td className="text-right text-purple-base py-2">8</td>
                <td className="text-right text-purple-base py-2">
                  <SimpleButton />
                </td>
              </tr>
            </tbody>
          </table>
        </Square>
      </div>
    </Page>
  );
};

export default Home;
