import { useOutletContext } from "react-router-dom";
import Carousel from "./Carousel";

const Homepage = () => {

const {formatSection,itemsList,name} = useOutletContext();
console.log(itemsList);

const arrayCategory =  uniqueArray(itemsList);

function uniqueArray(itemsList){
  let arrayTemp = itemsList.map((x)=>x['category']);
  return Array.from(
            arrayTemp.reduce((set, e) => set.add(e), new Set())
  )
}

console.log(arrayCategory);

  return (
    <div className={formatSection}>
      <h2 style={{textAlign:'center'}}>In {name} there is always something for you!</h2>
      <br></br>
      <Carousel arrayCategory={arrayCategory}/>
    </div>
  );
};

export default Homepage;
