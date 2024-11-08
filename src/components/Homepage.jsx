import { useOutletContext } from "react-router-dom";
import Carousel from "./Carousel";

const Homepage = () => {

const {formatArticle,formatSection,itemsList} = useOutletContext();
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
      <h2 style={{textAlign:'center'}}>Hello from Homepage!</h2>
      <br></br>
      <Carousel arrayCategory={arrayCategory}/>
    </div>
  );
};

export default Homepage;
