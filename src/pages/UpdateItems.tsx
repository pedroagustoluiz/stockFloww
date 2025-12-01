import Input from "../components/Input";
import MainTitle from "../components/MainTitle";
import Page from "../components/Page";
import Square from "../components/Square";

const UpdateItems = () => {
  return (
    <Page>
      <MainTitle text="Atualizar items: " strong="7 Wonders" />
      <Square>
        <form>
          <div className="flex gap-5">
            <Input text="Nome" />
            <Input text="Quantidade" type="number" />
            <Input text="Preço" type="number" />
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="text-purple-base">
                Categoria
              </label>
              <select
                name="category"
                id="category"
                className="w-full border-2 p-2.5 text-purple-base border-purple-base rounded-lg"
              >
                <option value="test">teste</option>
                <option value="test2">test2</option>
                <option value="test3">test3</option>
              </select>
            </div>
          </div>

          <textarea
            name=""
            id=""
            className="mt-5 w-full min-h-52 border-2 p-2.5 text-purple-base border-purple-base rounded-lg"
            placeholder="Descrição:"
          ></textarea>
          <button className="bg-purple-base text-white-100 py-2 px-7 rounded-lg w-full font-black">
            Salvar
          </button>
        </form>
      </Square>
    </Page>
  );
};

export default UpdateItems;
