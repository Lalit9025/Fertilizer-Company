import React from 'react';
import { Tooltip as RechartsTooltip } from 'recharts';
import './CustomToolTip.css'
// Custom Tooltip component
export const CustomTooltip = ({ payload }) => {
  if (payload.length === 0) return null;

  const value = payload[0].value;

  // Format the value to remove unnecessary decimal places
  const formattedValue = Number(value).toFixed(0);

  return (
    <div className="custom-tooltip">
      <p className="label">{`${payload[0].name}: ${formattedValue}`}</p>
    </div>
  );
};
