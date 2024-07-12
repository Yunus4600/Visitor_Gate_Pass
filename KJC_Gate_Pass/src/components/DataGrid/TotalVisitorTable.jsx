// TotalVisitorTable.jsx

import React, { useState } from 'react';
import TableHeader from './TableHeader.jsx';
import TableRow from './TableRow.jsx';
import './DataGrid.css';

const TotalVisitorTable = ({ visitors }) => {
    const [filterText, setFilterText] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const filteredVisitors = visitors.filter(visitor =>
        visitor.name.toLowerCase().includes(filterText.toLowerCase()) ||
        visitor.phone_number.includes(filterText)
    );

    const sortedVisitors = filteredVisitors.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    return (
        <div className='data-grid-table'>
            <h2>Visitor Data Grid</h2>
            <input
                type="text"
                placeholder="Filter by name or phone number"
                value={filterText}
                onChange={handleFilterChange}
            />
            <table>
                <TableHeader onSort={handleSort} sortConfig={sortConfig} />
                <tbody>
                    {sortedVisitors.map(visitor => (
                        <TableRow key={visitor.id} visitor={visitor} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TotalVisitorTable;
