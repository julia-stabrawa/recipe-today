import TitleHeader from "./components/atoms/TitleHeader";
import DishForm from "./components/organisms/DishForm";

const App = () => {
  return (
    <>
      <TitleHeader/>
      <div className="content__cnt">
          <h1>Enter information below</h1>
          <DishForm/>
      </div>
    </>
  );
}

export default App;
