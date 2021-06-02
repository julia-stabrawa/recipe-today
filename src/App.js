import TitleHeader from "./components/atoms/TitleHeader";
import DishForm from "./components/organisms/DishForm";
import ActionBtn from "./components/atoms/ActionBtn";

const App = () => {
  return (
    <>
      <TitleHeader/>
      <div className="content__cnt">
          <h1>Enter information below</h1>
          <DishForm/>
          <ActionBtn/>
      </div>
    </>
  );
}

export default App;
