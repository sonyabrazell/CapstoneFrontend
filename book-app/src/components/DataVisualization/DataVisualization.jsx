// // data visualization to display on dashboard
// // books read by month
// // works read by month
// // year to date books read
// // year to date words read
// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
// import { Container } from 'react-bootstrap';


// const DataVisualization = () => {

//     const readByMonthOptions = {
//         responsive: true,
//         plugins: {
//         legend: {
//         position: 'top',
//         },
//         title: {
//             display: true,
//             text: 'Chart.js Line Chart',
//             scales: {
//                 x: {
//                     stacked: true,
//                 },
//                 y: {
//                     stacked: true
//                 }}
//         },},
//     };

//     const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//     const readByMonthData = {
//             // // data: labels.map(() => readBooks.datatype.number({ min: 0, max: 500 })),
//             // borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             },
//             {
//             label: 'Read Works',
//             // data: labels.map(() => readWork.datatype.number({ min: 0, max: 500 })),
//             // borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//                 },
//         ],
//     };

//     const wordsByMonthData = {
        
//         monthLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December'],
//         datasets: [
//             {
//                 label: 'Words Read by Month',
//                 // data: labels.map(()=> wordCount.datatype.number({min:0, max: 1000000000})),
//                 backgroundColor: [
//                     '#f23a29',
//                     '#f2acb9',
//                     '#8c2108',
//                     '#400101',
//                     '#f46153',
//                     '#f7cdd5',
//                     '#a34d39',
//                     '#794d4d',
//                     '#f7887e',
//                     '#fbe6ea',
//                     '#c59083',
//                     '#b29999',
//                 ]
//             }
//         ]
//     }




// return (
//     <React.Fragment>
//         <h3 align="left">Hey there, reader.</h3>
//         <div style={{paddingTop:'20%'}}/>
//         <ResponsiveContainer width="100%" height="100%">
//             <PieChart width={400} height={400}>
//                 <Pie
//                     dataKey="value"
//                     isAnimationActive={false}
//                     data={data01}
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={80}
//                     fill="#8884d8"
//                     label
//                 />
//             <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
//                 <Tooltip />
//             </PieChart>
//         </ResponsiveContainer>
//     );
//     </React.Fragment>
// )}

// export default DataVisualization;
