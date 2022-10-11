
import './App.css';
import Table from './Table';
import data from "./data.json";

const getHeadings = () => {
  const headings = Object.keys(data[0]).reduce(function(result, element) {
    if (element !== "Quotes") {
      result.push(element);
    }
    return result;
  }, []);

  const companies = Object.values(data[0]['Quotes']).map(function(element){
    return element.Company;
  })

  return headings.concat(companies);
}

function App() {
  return (
    <div className="App">
      <Table theadData={getHeadings()} tbodyData={data} filter="FinalPrice"/> 
    </div>
  );
}

export default App;
