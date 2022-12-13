import React from 'react'
import "antd/dist/antd.css";
import { Calendar } from 'antd';
import { useState } from 'react';

export default function App() {
	const [selectedDate, setSelectedDate] = useState(null);

	return (<span className="calendar-container">

		<div style={{
			display: 'block', width: 700, padding: 30
		}}>
			<h4>ReactJS Ant-Design Calendar Component</h4>
			<Calendar
				onSelect={(value) => {
					setSelectedDate(value.format('YYYY-MM-DD'));
				}}
			/>
			{selectedDate && (
				<div>
					You selected: {selectedDate}
				</div>
			)}
		</div>

	</span>
	);
}





