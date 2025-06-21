
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../components/Dashboard.css';

import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid
} from 'recharts';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const donutData = [
    { name: 'Cost in time frame', value: 41017.77 },
    { name: 'Cost per application', value: 57907.44 },
    { name: 'Cost per sale', value: 21715.29 }
  ];

  const leadsData = [
    { name: 'Abstergo', total: 700, bad: 500 },
    { name: 'Acme Co.', total: 550, bad: 400 },
    { name: 'Barone', total: 400, bad: 200 },
    { name: 'Biffco En...', total: 950, bad: 700 },
    { name: 'Big Kahu...', total: 800, bad: 600 }
  ];

  const COLORS = ['#7EB6FF', '#A4E786', '#FFA94D'];
  const totalCost = donutData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <Navbar toggleSidebar={toggleSidebar} />
      <div style={{ display: 'flex', flex: 1 }}>
        {isSidebarOpen && <Sidebar />}
        <div style={{ flex: 1, padding: '20px' }}>
          <h2 className="dashboard-title">Performance Report</h2>

          <div className="dashboard-controls">
  <button className="add-chart-button">+ Add Chart</button>
  <div className="period-card">
    <span className="period-label">Period</span>
    <span className="period-value">03/27/21 - 04/07/21</span>
  </div>
</div>



          <div className="dashboard-tabs">
  <button className="tab active">Vendors</button>
  <button className="tab">Agents</button>
  <button className="tab">Agent status</button>
  <button className="tab">Deals</button>
  <button className="tab">Commissions</button>
  <button className="tab">Tags</button>
</div>

<div className="dashboard-metrics">
  <div className="metric-card">
    <div className="metric-value">100</div>
    <div className="metric-label">Total leads <span className="metric-change positive">+3.5%</span></div>
    <div className="metric-icon positive-icon">
      <svg width="20" height="20" fill="green"><path d="M5 10l5 5 5-10" /></svg>
    </div>
  </div>
  <div className="metric-card">
    <div className="metric-value">80</div>
    <div className="metric-label">Total called leads <span className="metric-change negative">-15%</span></div>
    <div className="metric-icon negative-icon">
      
      <svg width="20" height="20" fill="red"><path d="M5 10l5 -5 5 10" /></svg>
    </div>
  </div>
  <div className="metric-card">
    <div className="metric-value">120</div>
    <div className="metric-label">Total applications</div>
    <div className="metric-icon">
      <svg width="20" height="20" fill="#ddd"><path d="M5 10h10" /></svg>
    </div>
  </div>
  <div className="metric-card">
    <div className="metric-value">$18,000</div>
    <div className="metric-label">Total sales <span className='metric-change positive'>+2%</span></div>
    <div className="metric-icon positive-icon">
      <svg width="20" height="20" fill="#ddd"><path d="M5 10h10" /></svg>
    </div>
  </div>
</div>


          <div className="charts-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {/* COST DONUT CHART */}
            <div className="chart-card" style={{ flex: 1, minWidth: '300px' }}>
              <div className="chart-header">
                <h3>Costs</h3>
                <p className="subtitle">${totalCost.toLocaleString()} Total costs</p>
              </div>

              <div className="chart-content">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={donutData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={70}
                      outerRadius={100}
                      startAngle={90}
                      endAngle={-270}
                    >
                      {donutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="center-label"
                    >
                      ${totalCost.toLocaleString()} <tspan fontSize="12">Total costs</tspan>
                    </text>
                  </PieChart>
                </ResponsiveContainer>

                <div className="donut-legend square">
                  {donutData.map((item, idx) => {
                    const percent = ((item.value / totalCost) * 100).toFixed(0);
                    return (
                      <div key={idx} className="legend-item">
                        <span
                          className="legend-color square"
                          style={{ backgroundColor: COLORS[idx] }}
                        ></span>
                        {item.name}: <strong>${item.value.toLocaleString()} ({percent}%)</strong>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* LEADS BAR */}
            <div className="chart-card" style={{ flex: 1, minWidth: '300px' }}>
              <div className="chart-header">
                <h3>Leads</h3>
                <p className="subtitle">8,203 Total leads / 3,587 bad leads</p>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={leadsData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis
                    ticks={[0, 300, 600, 1000]}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 1000]}
                  />
                  <Tooltip />
                  <Legend verticalAlign="bottom" iconType="square" height={40} />
                  <Bar dataKey="total" stackId="a" fill="#ADD8E6" name="Total leads" />
                  <Bar dataKey="bad" stackId="a" fill="#468DFF" name="Bad leads" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* TOTAL LEADS*/}
          <div className="chart-card" style={{ width: '100%', marginTop: '20px' }}>
            <div className="chart-header">
              <h3>Total leads</h3>
              <p className="subtitle">8,203 leads / 35 vendors</p>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={leadsData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} 
                tickLine={false} 
                ticks={[ 0 ,100, 200, 300]} 
                domain={[0,200,300]} 
                tickFormatter={(value) => `$${value}`} />
                <Tooltip />
                <Legend verticalAlign="bottom" iconType="square" height={1} />
                <Bar dataKey="total" fill="rgb(116, 203, 243)" name="leads" />
                <Bar dataKey="bad" fill=" #228B22 " name="leads" />
              </BarChart>
            </ResponsiveContainer>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              <div style={{ margin: '0 15px' }}><span style={{ color: '#9DBBFB' }}>📞</span> Call</div>
              <div style={{ margin: '0 15px' }}><span style={{ color: '#A4E786' }}>📧</span> Email</div>
              <div style={{ margin: '0 15px' }}><span style={{ color: '#FFA94D' }}>💬</span> SMS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Button  */}
<button
  className="help-button"
  onClick={() => alert('How can we help you?')}
>
  Help
</button>

    </div>
  );
};

export default Dashboard;
