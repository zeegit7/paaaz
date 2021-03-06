import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
/*
expected data while creting this component
var data={
    labels: [],
    datasets:[],
    labelName:"Revenue",
    header_text:"Top 10 hotel revenue"
}

*/
class BarChart extends Component{
  constructor(){
    super();
    this.chartColor = [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 99, 132, 0.6)',
      'rgba(57,100,230,0.6)',
      'rgba(57,100,100,0.6)',
      'rgba(100,47,56,0.6)',
    ];
  }

  createBarChartData(data){
    console.log("data :",data);
    var data = {
      labels: data.labels,
      datasets:[
        {
          label:data.labelName,
          data:data.datasets,
          backgroundColor:this.chartColor
        }
      ]
    }
    return data;
  }



  render(){
    console.log("this.props.data",this.props.data);
    return (
      <div className="chart">
        <Bar
          data={this.createBarChartData(this.props.data)}
          options={{
            title:{
              display:true,
              text:this.props.data.header_text,
              fontSize:25
            },
            legend:{
              display:true,
              position:"right"
            }
          }}
        />
        </div>
    )
  }
}

export default BarChart;
