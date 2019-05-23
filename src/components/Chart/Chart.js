import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


const Chart = (props) => {



    console.log(props.StoreArray)

    const obj = {}

    props.StoreArray.forEach(item => {
if (!obj[item]) return obj[item] = 1
obj[item] = obj[item] + 1;
})

const arrayOfArrays = Object.entries(obj)

arrayOfArrays.sort((a,b) => a[1] > b[1] ? -1 : 1 )

const labels = [];
const data = [];

arrayOfArrays.forEach(item => {
labels.push(item[0])
data.push(item[1])
})

console.log("labels: ", labels)
console.log("data: ", data)



    
        const chartData = {
            labels: labels,
            datasets: [{
                // label: false,
                data: data,
                backgroundColor: [
                    'rgba(242, 125, 125, 1)',
                    'rgba(239, 206, 97, 1)',
                    'rgba(125, 242, 197, 1)',
                    'rgba(172, 242, 125, 1)',
                    'rgba(139, 125, 242, 1)',
                ]
            }],
            
           
        }
    

        return (
            <div>

                <Bar 
                    data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: "Most Reviewed Businesses"
                        },
                        legend: {
                            display: false,
                            position: 'right'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                        
                    }}
                />

            </div>
        )
    
}

export default Chart