import React from 'react'
import "antd/dist/antd.css";
import { Calendar } from 'antd';

export default function App() {
return (
	<div style={{
	display: 'block', width: 700, padding: 30
	}}>
	<h4>ReactJS Ant-Design Calendar Component</h4>
	<Calendar onChange={(value) => {
		alert(`Your selected ${value.format('YYYY-MM-DD')}`)
	}} />
	</div>
);
}
