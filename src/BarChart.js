import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My first BarChart',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },


    {
      label: 'My Second Bar Chart',
      backgroundColor: 'rgba(34,34,132,0.2)',
      borderColor: 'rgba(34,343,34,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(234,34,343,0.4)',
      hoverBorderColor: 'rgba(344,344,344,1)',
      data: [65, 59, 80, 43, 56, 44, 40]
    }
  ]
};

function BarChart(){
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
        }

        export default BarChart;