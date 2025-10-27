import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Accordion, Card, Dropdown, Form, Button } from "react-bootstrap";
import {
    FaMapMarkerAlt,
    FaFilter,
    FaIndustry,
    FaGlobe,
    FaBriefcase,
    FaBuilding,
    FaUsers,
    FaMoneyBillWave,
    FaCity,
    FaUser,
    FaTools,
    FaStar,
    FaGraduationCap,
    FaPhoneAlt,
    FaMapPin
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Prospect.css";
// import sampleData from "./sample_data.json";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { decreaseCredits, showCredit } from "../redux/creditSlice";

import API_CONFIG from "../apiConfig";
import axios from "axios";
import { useLocation } from "react-router-dom";

const FilterPage = () => {
    const location = useLocation();

    // const [filters, setFilters] = useState({});
    const [filters, setFilters] = useState(location.state?.filters || {});
    const [selectedRows, setSelectedRows] = useState([]);
    const [randomCount, setRandomCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const recordsPerPage = 8;

    const dispatch = useDispatch();
    const creditsLeft = useSelector((state) => state.credit.creditsLeft);
    const [products, setProducts] = useState([]);

    const [sampleData, setsampleData] = useState([])

    const [isFilterChanged, setIsFilterChanged] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [filterOptions, setFilterOptions] = useState({
        location: [],
        industry: [],
        domain: [],
        jobTitle: [],
        headOffice: [],
        employeeRange: [],
        turnoverRange: [],
        companyName: [],
        peopleName: [],
        skills: [],
        score: [],
        degree: [],
        contact: [],
        zipcode: [],
    });


    useEffect(() => {

        if (location.state?.filters) {
            let parsedFilters;

            try {
                parsedFilters = JSON.parse(location.state.filters);
            } catch (error) {
                console.error("Error parsing filters:", error);
                parsedFilters = {};
            }

            if (Object.keys(parsedFilters).length > 0) {
                console.log(parsedFilters, "parsed filters");
                setFilters(parsedFilters);
            } else {
                setFilters({});
            }
        } else {
            setFilters({});
        }


        fetch("https://www.boulou.io/Blulou-backend/csrf-token")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));

        function encryptCode(code) {
            return btoa(unescape(encodeURIComponent(code)));
        }

        async function Fetching() {
            const userId = localStorage.getItem("user_id");

            console.log(userId, "userIf profile");

            const encryptedCode = encryptCode(userId);

            const response = await axios.get(`${API_CONFIG.BASE_URL}/check_credit_amount/` + encryptedCode, userId, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            console.log(response, "prospect search");

            const credit_amount = response.data.credit_amount

            dispatch(showCredit(credit_amount));

            setIsLoading(true);

            const tableshow = await axios.get(`${API_CONFIG.BASE_URL}/api/get_exports_data`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const table = tableshow.data.data
            setsampleData(table)

            if (tableshow.data.success == 200) {
                setIsLoading(false);
            }


            const responsealldata = await axios.get(`${API_CONFIG.BASE_URL}/api/get_all_data`, {
                headers: {
                    "Content-Type": "application/json",
                },

            });

            const Locations = responsealldata.data.locations;
            const Industry = responsealldata.data.industries;
            const Domains = responsealldata.data.domains;
            const Jobtitle = responsealldata.data.job_titles;
            const Headoffice = responsealldata.data.head_officies
            const EmployeeRange = responsealldata.data.employee_ranges
            const TurnoverRange = responsealldata.data.turn_over_ranges
            const CompanyNamevalues = responsealldata.data.company_names
            const PeopleNamesValues = responsealldata.data.people_names
            const SkillsValues = responsealldata.data.skills
            const ScoreValues = responsealldata.data.scores
            const degree = responsealldata.data.degrees
            const contact = responsealldata.data.contacts
            const zipcode = responsealldata.data.zipcodes




            console.log(responsealldata, "raw");


            const locationValues = Locations.map(item => item.location);
            const industryValues = Industry.map(item => item.industry);
            const domainValues = Domains.map(item => item.domain);
            const JobtitleValues = Jobtitle.map(item => item.job_title);
            const headofficeValues = Headoffice.map(item => item.head_office);
            const EmployeeRangeValues = EmployeeRange.map(item => item.employee_range);
            const TurnoverrangeValues = TurnoverRange.map(item => item.turn_over_range);
            const CompanyName = CompanyNamevalues.map(item => item.company_name);
            const PeopleName = PeopleNamesValues.map(item => item.people_name);
            const Skills = SkillsValues.map(item => item.skill);
            const Score = ScoreValues.map(item => item.score);
            const degreeValues = degree.map(item => item.degree);
            const contactValues = contact.map(item => item.contact);
            const zipcodeValues = zipcode.map(item => item.zipcode);



            console.log(industryValues, "locationValues");

            setFilterOptions(prevOptions => ({
                ...prevOptions,
                location: locationValues,
                industry: industryValues,
                domain: domainValues,
                jobTitle: JobtitleValues,
                headOffice: headofficeValues,
                employeeRange: EmployeeRangeValues,
                turnoverRange: TurnoverrangeValues,
                companyName: CompanyName,
                peopleName: PeopleName,
                skills: Skills,
                score: Score,
                degree: degreeValues,
                contact: contactValues,
                zipcode: zipcodeValues
            }));




        }
        Fetching()
    }, [])

    const openSaveSearchModal = () => {
        if (!isFilterChanged) return;

        Swal.fire({
            title: "Save Search",
            input: "text",
            inputPlaceholder: "Enter search name",
            showCancelButton: true,
            confirmButtonText: "Save",
            cancelButtonText: "Cancel",
            preConfirm: async (searchName) => {
                if (!searchName.trim()) {
                    Swal.showValidationMessage("Search name is required!");
                    return false;
                }

                try {
                    const userId = localStorage.getItem("user_id");

                    const encryptedCodes = encryptCode(userId);

                    const savedSearchesResponse = await axios.get(`${API_CONFIG.BASE_URL}/get_saved_search/` + encryptedCodes, userId, {
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-Token": products.csrf_token,
                        },
                        withCredentials: true,
                    });

                    console.log(savedSearchesResponse, "aasdasdsad");

                    const savedSearches = Array.isArray(savedSearchesResponse.data.data) ? savedSearchesResponse.data.data : [];


                    if (savedSearches.some(search => search.name.toLowerCase() === searchName.toLowerCase())) {
                        Swal.showValidationMessage("Search name already exists! Please choose a different name.");
                        return false;
                    }

                    Swal.fire("Saved!", `Search "${searchName}" has been saved.`, "success");

                    const newSearch = {
                        id: Date.now(),
                        name: searchName,
                        filters: { ...filters },
                    };

                    const date = newSearch.id;
                    const searchname = newSearch.name;
                    const selectedfilters = newSearch.filters;

                    const filtersText = JSON.stringify(selectedfilters);

                    let arr = [userId, searchname];

                    const encryptedCode1 = encryptCode(arr);
                    const encryptedCode2 = encryptCode(filtersText);

                    const response = await axios.get(`${API_CONFIG.BASE_URL}/saved_search_details/` + encryptedCode1 + `/` + encryptedCode2, arr, {
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-Token": products.csrf_token,
                        },
                        withCredentials: true,
                    });

                    console.log("Saved Search Data response:", response);
                    setIsFilterChanged(false);

                } catch (error) {
                    console.error("Error fetching saved searches:", error);
                    Swal.fire("Error", "Failed to check existing search names.", "error");
                }
            }
        });
    };


    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };


    const filteredData = sampleData.filter((row) =>
        Object.keys(filters).every((key) =>
            filters[key].length === 0 || filters[key].includes(row[key])
        )
    );


    const offset = currentPage * recordsPerPage;
    const paginatedData = filteredData.slice(offset, offset + recordsPerPage);
    const pageCount = Math.ceil(filteredData.length / recordsPerPage);

    const handleRowSelection = (id) => {
        setSelectedRows((prevSelected) =>
            prevSelected.includes(id) ? prevSelected.filter((rowId) => rowId !== id) : [...prevSelected, id]
        );
    };


    const handleSelectAll = () => {
        const pageIds = paginatedData.map((row) => row.id);
        if (pageIds.every(id => selectedRows.includes(id))) {
            setSelectedRows(selectedRows.filter(id => !pageIds.includes(id)));
        } else {
            setSelectedRows([...new Set([...selectedRows, ...pageIds])]);
        }
    };

    const exportToCSV = async (data) => {
        if (data.length === 0) {
            Swal.fire({
                icon: "warning",
                title: "No Data",
                text: "No data to export.",
                confirmButtonText: "OK",
                confirmButtonColor: "#2d5da3",
            });
            return;
        }

        // CSV generation
        let csvContent = Object.keys(data[0]).join(",") + "\n";
        data.forEach((row) => {
            csvContent += Object.values(row).join(",") + "\n";
        });

        // Trigger download
        const blob = new Blob([csvContent], { type: "text/csv" });
        const file = new File([blob], "exported_data.csv", { type: "text/csv" });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = "exported_data.csv";
        link.click();

        // Prepare for upload
        const formData = new FormData();
        formData.append("file", file);
        const userId = localStorage.getItem("user_id");

        // Optionally add extra fields
        formData.append("user_id", userId);
        formData.append("length", data.length);

        try {
            const response = await axios.post(`${API_CONFIG.BASE_URL}/api/store_downloads`, formData, userId, data.length, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });

            console.log(response, "File Store");

            if (response.data.success === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Export Successful",
                    text: "Your CSV file has been downloaded and uploaded to the server.",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#2d5da3",

                });
            }
        } catch (error) {
            console.error("Upload failed:", error);
            Swal.fire({
                icon: "error",
                title: "Upload Failed",
                text: "There was an error uploading your CSV file.",
                confirmButtonText: "OK",
                confirmButtonColor: "#2d5da3",
            });
        }
    };


    function encryptCode(code) {
        return btoa(unescape(encodeURIComponent(code)));
    }

    const handleExportSelected = async () => {
        const selectedData = sampleData.filter((row) => selectedRows.includes(row.id));
        console.log(selectedData.length, "length");

        const userId = localStorage.getItem("user_id");
        var debit_amount = selectedData.length

        var arr = [userId, debit_amount];

        const my_encryptedCode = encryptCode(arr);

        const response = await axios.get(`${API_CONFIG.BASE_URL}/credit_debit/` + my_encryptedCode, arr, {
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": products.csrf_token,
            },
            withCredentials: true,
        });

        console.log(response, "selected records");

        if (response.data.success === 200) {
            if (debit_amount > response.data["credit value"]) {
                Swal.fire({
                    icon: "error",
                    title: "Insufficient Credits",
                    text: "You do not have enough credits to export this many records.",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#2d5da3",
                });
                return;
            }

            exportToCSV(selectedData);
            dispatch(decreaseCredits(debit_amount));
        }
    };

    const handleExportRandom = async () => {
        const count = parseInt(randomCount, 10);
        if (isNaN(count) || count <= 0) {
            Swal.fire({
                icon: "error",
                title: "Invalid Input",
                text: "Enter a valid number.",
                confirmButtonText: "OK",
                confirmButtonColor: "#2d5da3",
            });
            return;
        }

        const shuffled = [...sampleData].sort(() => 0.5 - Math.random());
        const randomData = shuffled.slice(0, count);

        const userId = localStorage.getItem("user_id");
        var debit_amount = randomData.length

        var arr = [userId, debit_amount];

        const my_encryptedCode = encryptCode(arr);

        const response = await axios.get(`${API_CONFIG.BASE_URL}/credit_debit/` + my_encryptedCode, arr, {
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": products.csrf_token,
            },
            withCredentials: true,
        });

        console.log(response, "selected records");

        if (response.data.success === 200) {
            if (debit_amount > response.data["credit value"]) {
                Swal.fire({
                    icon: "error",
                    title: "Insufficient Credits",
                    text: "You do not have enough credits to export this many records.",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#2d5da3",
                });
                return;
            }

            exportToCSV(randomData);
            dispatch(decreaseCredits(debit_amount));
        }
    };


    // const filterOptions = {
    //     location: ["USA", "UK", "Canada"],
    //     industry: ["IT", "Finance", "Healthcare"],
    //     domain: ["AI", "Banking", "Marketing"],
    //     jobTitle: ["Engineer", "Manager", "Analyst"],
    //     headOffice: ["New York", "London", "Toronto"],
    //     employeeRange: ["50-100", "500-1000", "1000+"],
    //     turnoverRange: ["1M-5M", "10M-50M", "50M+"],
    //     companyName: ["TechCorp", "FinanceWorld", "MediCare"],
    //     peopleName: ["John", "Jane", "Mike"],
    //     skills: ["React", "Excel", "Python"],
    //     score: ["React", "Excel", "Python"],
    //     degree: ["React", "Excel", "Python"],
    //     contact: ["React", "Excel", "Python"],
    //     zipcode: ["React", "Excel", "Python"],
    // };

    const filterIcons = {
        location: <FaMapMarkerAlt />,
        industry: <FaIndustry />,
        domain: <FaGlobe />,
        jobTitle: <FaBriefcase />,
        headOffice: <FaBuilding />,
        employeeRange: <FaUsers />,
        turnoverRange: <FaMoneyBillWave />,
        companyName: <FaCity />,
        peopleName: <FaUser />,
        skills: <FaTools />,
        score: <FaStar />,
        degree: <FaGraduationCap />,
        contact: <FaPhoneAlt />,
        zipcode: <FaMapPin />
    };

    const handleFilterChange = (selectedOptions, field) => {
        setFilters((prev) => ({
            ...prev,
            [field]: selectedOptions ? selectedOptions.map((opt) => opt.value) : [],
        }));
        setIsFilterChanged(true);
    };

    const ResetFilter = () => {
        setFilters({});
        setIsFilterChanged(false);
        if (window.history.replaceState) {
            window.history.replaceState(null, "", window.location.pathname);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2" style={{ padding: "0px" }}>
                    <aside className="filter-sidebar">
                        <Accordion defaultActiveKey="0">
                            {Object.keys(filterOptions).map((key, index) => (
                                <Card key={key} className="filter-card">
                                    <Accordion.Item eventKey={index.toString()}>
                                        <Accordion.Header>
                                            <span className="filter-icon">{filterIcons[key]}</span>
                                            <span className="filter-name">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                                            {filters[key] && filters[key].length > 0 && <FaFilter className="filter-indicator" />}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Select
                                                options={filterOptions[key].map((value) => ({ label: value, value }))}
                                                isMulti
                                                value={(filters[key] || []).map((value) => ({ label: value, value }))}
                                                onChange={(selected) => handleFilterChange(selected, key)}
                                            />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Card>
                            ))}
                        </Accordion>
                    </aside>
                </div>

                <div className="col-lg-10">
                    <main className="table-container">
                        <div className="d-flex" style={{ gap: "25px", paddingTop: "10px" }}>
                            <button disabled={!isFilterChanged} onClick={openSaveSearchModal} className="save-search">Save Search</button>
                            <button onClick={ResetFilter} className="clear-search">Clear Search</button>
                        </div>
                        <Dropdown className="mb-3" style={{ textAlign: "end" }}>
                            <Dropdown.Toggle variant="success">Export</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleExportSelected}>Selected Records</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item
                                    as="div"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Form.Group controlId="randomCount">
                                        <Form.Label>Enter count for random export</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={randomCount}
                                            onChange={(e) => setRandomCount(e.target.value)}
                                            min="1"
                                        />
                                    </Form.Group>
                                    <Button style={{ background: "#2d5da3", color: "w" }} className="mt-2 w-100" onClick={handleExportRandom}>
                                        Export Random
                                    </Button>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="table-container">
                            <table className="custom-table">
                                <thead>
                                    <tr style={{ fontSize: "14px" }}>
                                        <th>
                                            <input
                                                type="checkbox"
                                                checked={paginatedData.length > 0 && paginatedData.every(row => selectedRows.includes(row.id))}
                                                onChange={handleSelectAll}
                                            />
                                        </th>
                                        <th style={{ minWidth: "120px" }}>Name</th>
                                        <th style={{ minWidth: "120px" }}>Location</th>
                                        <th style={{ minWidth: "120px" }}>Industry</th>
                                        <th style={{ minWidth: "120px" }}>Domain</th>
                                        <th style={{ minWidth: "120px" }}>Job Title</th>
                                        <th style={{ minWidth: "120px" }}>Head Office</th>
                                        <th style={{ minWidth: "145px" }}>Employee Range</th>
                                        <th style={{ minWidth: "145px" }}>Turnover Range</th>
                                        <th style={{ minWidth: "145px" }}>Company Name</th>
                                        <th style={{ minWidth: "145px" }}>People Name</th>
                                        <th>Skills</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading ? (
                                        <tr>
                                            <td colSpan="12" style={{ textAlign: "center" }}>
                                                <div className="spinner-border text-primary" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : paginatedData.length > 0 ? (
                                        paginatedData.map((row) => (
                                            <tr key={row.id} style={{ fontSize: "12px" }}>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedRows.includes(row.id)}
                                                        onChange={() => handleRowSelection(row.id)}
                                                    />
                                                </td>
                                                <td>{row.name}</td>
                                                <td>{row.location}</td>
                                                <td>{row.industry}</td>
                                                <td>{row.domain}</td>
                                                <td>{row.jobTitle}</td>
                                                <td>{row.headOffice}</td>
                                                <td>{row.employeeRange}</td>
                                                <td>{row.turnoverRange}</td>
                                                <td>{row.companyName}</td>
                                                <td>{row.peopleName}</td>
                                                <td>{row.skills}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="12">No data found</td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                        </div>

                        <br />

                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                        />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default FilterPage;
