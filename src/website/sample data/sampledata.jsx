import React, { useEffect, useState } from 'react';
import WebFooter from '../footer';
import WebNavbar from '../navbar';
import Swal from 'sweetalert2';


const industries = ['Finance', 'Healthcare', 'Automotive', 'Education', 'IT'];
const domains = ['Banking', 'Pharma', 'Manufacturing', 'EdTech', 'AI'];
const jobTitles = ['Manager', 'Analyst', 'Technician', 'Developer', 'Engineer'];
const employeeRanges = ['50-100', '100-200', '200-500', '500-1000', '1000+'];
const turnoverRanges = ['1M-5M', '2M-6M', '5M-10M', '10M-50M', '50M+'];
const skillsList = ['Excel', 'Python', 'C++', 'Java', 'React'];

const RealUsersTable = () => {
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState({});
    const [filters, setFilters] = useState({
        name: '',
        location: '',
        industry: '',
    });

    const [exportOption, setExportOption] = useState('selected'); // default option
    const [randomExportCount, setRandomExportCount] = useState(5);

    const PAGE_SIZE = 15;

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=100')
            .then((res) => res.json())
            .then((data) => {
                const transformed = data.results.map((user, index) => ({
                    name: `${user.name.first} ${user.name.last}`,
                    location: user.location.country,
                    industry: industries[index % industries.length],
                    domain: domains[index % domains.length],
                    jobTitle: jobTitles[index % jobTitles.length],
                    headOffice: user.location.city,
                    employeeRange: employeeRanges[index % employeeRanges.length],
                    turnoverRange: turnoverRanges[index % turnoverRanges.length],
                    companyName: `Company ${index + 1}`,
                    peopleName: `${user.name.first}`,
                    skills: skillsList[index % skillsList.length],
                }));
                setUsersData(transformed);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching users:', err);
                setLoading(false);
            });
    }, []);

    const handleCheckboxChange = (index) => {
        setSelectedRows((prev) => {
            const newSelected = { ...prev };
            if (newSelected[index]) {
                delete newSelected[index];
            } else {
                newSelected[index] = true;
            }
            return newSelected;
        });
    };

    const uniqueNames = Array.from(new Set(usersData.map((u) => u.name))).sort();
    const uniqueLocations = Array.from(new Set(usersData.map((u) => u.location))).sort();
    const uniqueIndustries = Array.from(new Set(usersData.map((u) => u.industry))).sort();

    const filteredUsers = usersData.filter((user) => {
        return (
            (filters.name === '' || user.name === filters.name) &&
            (filters.location === '' || user.location === filters.location) &&
            (filters.industry === '' || user.industry === filters.industry)
        );
    });

    const exportToCSV = (dataToExport) => {
        const headers = [
            'Name',
            'Location',
            'Industry',
            'Domain',
            'Job Title',
            'Head Office',
            'Employee Range',
            'Turnover Range',
            'Company Name',
            'People Name',
            'Skills',
        ];

        if (dataToExport.length === 0) {
            Swal.fire({
                icon: 'info',
                title: 'No data to export.',
                timer: 2000,
                showConfirmButton: false,
            });

            return;
        }

        const csvRows = [
            headers.join(','),
            ...dataToExport.map((user) =>
                [
                    user.name,
                    user.location,
                    user.industry,
                    user.domain,
                    user.jobTitle,
                    user.headOffice,
                    user.employeeRange,
                    user.turnoverRange,
                    user.companyName,
                    user.peopleName,
                    user.skills,
                ]
                    .map((field) => `"${field}"`)
                    .join(',')
            ),
        ];

        const csvString = csvRows.join('\n');
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'exported_users.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const exportSelectedToCSV = () => {
        const selectedIndices = Object.keys(selectedRows).map((i) => parseInt(i));
        const selectedData = selectedIndices
            .map((idx) => usersData[idx])
            .filter(Boolean);

        if (selectedData.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Please select at least one row to export.',
                timer: 2000,
                showConfirmButton: false,
            });

            return;
        }

        if (selectedData.length > 10) {
            Swal.fire({
                icon: 'warning',
                title: 'Please log in to download more than 10 records.',
                timer: 2000,
                showConfirmButton: false,
            });

            return;
        }

        exportToCSV(selectedData);
    };

    const exportRandomUsers = () => {
        const n = parseInt(randomExportCount, 10);
        if (isNaN(n) || n <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Please enter a valid positive number.',
                timer: 2000,
                showConfirmButton: false,
            });

            return;
        }
        if (n > usersData.length) {
            Swal.fire({
                icon: 'info',
                title: `Only ${usersData.length} records available.`,
                timer: 2000,
                showConfirmButton: false,
            });

            return;
        }
        if (n > 10) {
            Swal.fire({
                icon: 'info',
                title: `Please log in to download more than 10 records.`,
                timer: 2000,
                showConfirmButton: false,
            });

            return;
        }

        const shuffled = [...usersData].sort(() => 0.5 - Math.random());
        const randomUsers = shuffled.slice(0, n);
        exportToCSV(randomUsers);
    };

    const handleExportClick = () => {
        if (exportOption === 'selected') {
            exportSelectedToCSV();
        } else if (exportOption === 'random') {
            exportRandomUsers();
        }
    };

    if (loading)
        return (
            <p
                style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    textAlign: 'center',
                    marginTop: '50px',
                    color: '#555',
                }}
            >
                Loading real users...
            </p>
        );

    return (
        <>
            <WebNavbar />
            <div
                style={{
                    padding: '30px 40px',
                    margin: '40px auto',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    backgroundColor: '#f9fafb',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
            >
                {/* Filters */}
                <div
                    style={{
                        marginBottom: '20px',
                        display: 'flex',
                        gap: '15px',
                        flexWrap: 'wrap',
                    }}
                >
                    <select
                        value={filters.name}
                        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                        style={{
                            flex: '1 1 200px',
                            padding: '10px 15px',
                            borderRadius: '6px',
                            border: '1.5px solid #ccc',
                            fontSize: '14px',
                            transition: 'border-color 0.3s',
                            outline: 'none',
                            cursor: 'pointer',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                        onBlur={(e) => (e.target.style.borderColor = '#ccc')}
                    >
                        <option value="">All Names</option>
                        {uniqueNames.map((name) => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>

                    <select
                        value={filters.location}
                        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                        style={{
                            flex: '1 1 200px',
                            padding: '10px 15px',
                            borderRadius: '6px',
                            border: '1.5px solid #ccc',
                            fontSize: '14px',
                            transition: 'border-color 0.3s',
                            outline: 'none',
                            cursor: 'pointer',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                        onBlur={(e) => (e.target.style.borderColor = '#ccc')}
                    >
                        <option value="">All Locations</option>
                        {uniqueLocations.map((loc) => (
                            <option key={loc} value={loc}>
                                {loc}
                            </option>
                        ))}
                    </select>

                    <select
                        value={filters.industry}
                        onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                        style={{
                            flex: '1 1 200px',
                            padding: '10px 15px',
                            borderRadius: '6px',
                            border: '1.5px solid #ccc',
                            fontSize: '14px',
                            transition: 'border-color 0.3s',
                            outline: 'none',
                            cursor: 'pointer',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                        onBlur={(e) => (e.target.style.borderColor = '#ccc')}
                    >
                        <option value="">All Industries</option>
                        {uniqueIndustries.map((ind) => (
                            <option key={ind} value={ind}>
                                {ind}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Export option and button */}
                <div
                    style={{
                        marginBottom: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        flexWrap: 'wrap',
                    }}
                >
                    <select
                        value={exportOption}
                        onChange={(e) => setExportOption(e.target.value)}
                        style={{
                            padding: '10px 15px',
                            borderRadius: '6px',
                            border: '1.5px solid #ccc',
                            fontSize: '14px',
                            cursor: 'pointer',
                            minWidth: '210px',
                            transition: 'border-color 0.3s',
                            outline: 'none',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                        onBlur={(e) => (e.target.style.borderColor = '#ccc')}
                    >
                        <option value="selected">Download Selected CSV</option>
                        <option value="random">Download Random Users</option>
                    </select>

                    {exportOption === 'random' && (
                        <input
                            type="number"
                            min="1"
                            max={usersData.length}
                            value={randomExportCount}
                            onChange={(e) => setRandomExportCount(e.target.value)}
                            style={{
                                width: '100px',
                                padding: '10px 12px',
                                borderRadius: '6px',
                                border: '1.5px solid #ccc',
                                fontSize: '14px',
                                outline: 'none',
                                transition: 'border-color 0.3s',
                            }}
                            placeholder="Number"
                            onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
                        />
                    )}

                    <button
                        onClick={handleExportClick}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            border: 'none',
                            borderRadius: '6px',
                            color: '#fff',
                            fontWeight: '600',
                            fontSize: '14px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 8px rgba(0,123,255,0.4)',
                            transition: 'background-color 0.3s, box-shadow 0.3s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#0056b3';
                            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,86,179,0.6)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#007bff';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,123,255,0.4)';
                        }}
                    >
                        Download
                    </button>
                </div>

                {/* Records count */}
                <p
                    style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '15px',
                    }}
                >
                    Total Records: {filteredUsers.length}
                </p>

                {/* Table */}
                <div
                    style={{
                        overflowX: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    }}
                >
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            minWidth: '900px',
                            backgroundColor: '#fff',
                        }}
                    >
                        <thead>
                            <tr
                                style={{
                                    backgroundColor: '#007bff',
                                    fontSize: '14px',
                                }}
                            >
                                <th style={{ padding: '12px', minWidth: '40px' }}></th>
                                <th style={{ padding: '12px', minWidth: '130px' }}>Name</th>
                                <th style={{ padding: '12px', minWidth: '110px' }}>Location</th>
                                <th style={{ padding: '12px', minWidth: '110px' }}>Industry</th>
                                <th style={{ padding: '12px', minWidth: '110px' }}>Domain</th>
                                <th style={{ padding: '12px', minWidth: '120px' }}>Job Title</th>
                                <th style={{ padding: '12px', minWidth: '110px' }}>Head Office</th>
                                <th style={{ padding: '12px', minWidth: '130px' }}>Employee Range</th>
                                <th style={{ padding: '12px', minWidth: '130px' }}>Turnover Range</th>
                                <th style={{ padding: '12px', minWidth: '130px' }}>Company Name</th>
                                <th style={{ padding: '12px', minWidth: '110px' }}>People Name</th>
                                <th style={{ padding: '12px', minWidth: '100px' }}>Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.slice(0, PAGE_SIZE).map((user, idx) => {
                                const originalIndex = usersData.indexOf(user);
                                return (
                                    <tr
                                        key={originalIndex}
                                        style={{
                                            borderBottom: '1px solid #ddd',
                                            transition: 'background-color 0.25s',
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.backgroundColor = '#f1f8ff')
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.backgroundColor = 'transparent')
                                        }
                                    >
                                        <td style={{ textAlign: 'center' }}>
                                            <input
                                                type="checkbox"
                                                checked={!!selectedRows[originalIndex]}
                                                onChange={() => handleCheckboxChange(originalIndex)}
                                                style={{ cursor: 'pointer', transform: 'scale(1.1)' }}
                                            />
                                        </td>
                                        <td style={{ padding: '10px 12px', color: '#222', fontWeight: '600' }}>
                                            {user.name}
                                        </td>
                                        <td style={{ padding: '10px 12px' }}>{user.location}</td>
                                        <td style={{ padding: '10px 12px' }}>{user.industry}</td>
                                        <td style={{ padding: '10px 12px' }}>{user.domain}</td>
                                        <td style={{ padding: '10px 12px' }}>{user.jobTitle}</td>
                                        <td style={{ padding: '10px 12px' }}>{user.headOffice}</td>
                                        <td style={{ padding: '10px 12px' }}>{user.employeeRange}</td>
                                        <td style={{ padding: '10px 12px' }}>{user.turnoverRange}</td>
                                        <td style={{ padding: '10px 12px' }}>{user.companyName}</td>
                                        <td style={{ padding: '10px 12px' }}>{user.peopleName}</td>
                                        <td style={{ padding: '10px 12px' }}>{user.skills}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <WebFooter />
        </>
    );
};

export default RealUsersTable;
