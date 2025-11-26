import MainTitle from "../components/MainTitle";
import Square from "../components/Square";
import diversityOfItems from "../assets/diversityOfItems.svg";
import totalInventory from "../assets/totalInventory.svg";
import recentItems from "../assets/recenteItems.svg";
import itemsRunningOut from "../assets/itemsRunningOut.svg";
const Home = () => {
  return (
    <div className="bg-white-base h-screen w-full p-10">
      <MainTitle />
      <div className="mt-5 flex gap-5">
        <Square text="Diversidade de Items" icon={diversityOfItems} value={2} />
        <Square text="Inventário Total" icon={totalInventory} value={40} />
        <Square text="Items Recentes" icon={recentItems} value={2} />
        <Square text="Items Acabando" icon={itemsRunningOut} value={1} />
      </div>
    </div>
  );
};

export default Home;
