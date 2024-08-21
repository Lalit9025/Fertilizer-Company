import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getPieData, getPieDataLeast } from '../../utils';
import './Barchart.css'


export const getTopProducts = (data, key, least) => {
  return data
    .sort((a, b) => least ? a[key] - b[key] : b[key] - a[key])
    .slice(0, 5)
    .map(item => ({
      name: item.product,
      value: item[key]
    }));
};

export const CustomBarChart = ({ data, title, dataKey, least }) => {
  let chartData = least ? getPieDataLeast(data, dataKey) : getPieData(data, dataKey);

  return (
    <div className='barchart'>
      <h3 className='barchart_title'>{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" width={'8'} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};