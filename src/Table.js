export default function Table({theadData, tbodyData, filter}) {
    return (
        <table>
        <thead>
           <tr>
            {theadData.map(heading => {
              return <th key={heading}>{heading}</th>
            })}
          </tr>
        </thead>
        <tbody>
            {tbodyData.map((row, index) => {
                let quotes = row.Quotes;
                
                let pricesOnly = quotes.map(function(element){
                    return element[filter]
                })
                let maxQuote = Math.max(...pricesOnly);
                let minQuote = Math.min(...pricesOnly);
                
                return <tr key={index}>
                    {theadData.map((key, index) => {
                        let cell;
                    if( index < 4 ){
                         cell = <td key={row[key]}>{row[key]}</td>
                    } else {
                        let price = quotes.reduce(function(result, element) {
                            if (element.Company == key) {
                              result.push(element[filter]);
                            }
                            return result;
                          }, []);
                          let className = "";
                          if( price == minQuote) {
                            className = "min";
                          } else if ( price == maxQuote) {
                            className = "max";
                          }
                          

                       cell =  <td key={price} className={className}>{price}</td> 
                    }
                    return cell;
                    })}
              </tr>;
            })}
        </tbody>
    </table>
    );
  }