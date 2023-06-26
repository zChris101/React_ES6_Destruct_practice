import "./styles.css";
import cars from "./components/practice"



const [honda,tesla] = cars;

const {speedStats: { topSpeed: teslaTopSpeed }}= tesla;
const {speedStats: { topSpeed: hondaTopSpeed }}= honda;

const {coloursByPopularity:[teslaTopColour]} = tesla;
const {coloursByPopularity:[hondaTopColour]} = honda;



export default function App() {
  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>   
      </tr>
    </table>
  );
}
