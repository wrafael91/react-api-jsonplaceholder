import React from "react";


export default function DatatableTwo({dataTwo}) {
  const columns = dataTwo[0] && Object.keys(dataTwo[0]);
  return (<table cellPadding={0} cellSpacing={25}>
    <thead>
        <tr>{dataTwo[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
    </thead>
    <tbody>
      {dataTwo.map((row) => (
        <tr>
            {columns.map((column) => (
              <td key={dataTwo.id}>{row[column]}</td>
            ))}
        </tr>
      ))}
    </tbody>
  </table>);  
}