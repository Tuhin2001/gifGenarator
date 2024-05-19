import Random from "./components/Random";
import Tag from "./components/Tag";
//  REACT_APP_GIPHY_API_KEY='YVFufFruvrtlDVsPzs26KZa06Gc1DBpb'
export default function App() {
  return(
    <div className="flex flex-col items-center w-full h-full background">
        <h1 className="w-11/12 text-center bg-white rounded-lg mt-[40px] ml-[5px] font-bold
         mr-[5px] px-10 py-2 text-3xl "> Random Gifs </h1>

        <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
          <Random/>
          <Tag/>
        </div>
    </div>
  );
}
