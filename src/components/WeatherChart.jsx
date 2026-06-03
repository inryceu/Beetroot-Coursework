import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WeatherChart = ({ title, data, dataKey, color }) => {
  return (
    <div className="mb-5" style={{ height: 300 }}>
      <h5 className="text-muted mb-3">{title}</h5>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;