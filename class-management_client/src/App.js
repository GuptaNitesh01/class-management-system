import React from 'react';
import ReactDOM from 'react-dom/client';

import { Outlet } from 'react-router-dom';
import { SidebarComp } from './component/SidebarComp';

console.log("React",React);
console.log("ReactDom",ReactDOM);   

export default function App() {
  return (
    <div>
    <div className="intro">
    <h1>Welcome to Class Management</h1>
    </div>
    <SidebarComp/>
    <Outlet/>
    </div>
  );
}
