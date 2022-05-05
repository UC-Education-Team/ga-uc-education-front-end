
import React from 'react'
// import { useTheme } from '@mui/system'
// import ReactEcharts from 'echarts-for-react'
import {Doughnut} from 'react-chartjs-2';

const state = {
    labels: ['Completed', 'To-Do'],
  datasets: [
    {
      backgroundColor: [
        'green'
      ],
      hoverBackgroundColor: [
      'grey'
      ],
      data: [80, 20]
    }
  ]
}

// test
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Completion',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }}