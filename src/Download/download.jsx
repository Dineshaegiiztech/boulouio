import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './download.css';
import axios from "axios";
import API_CONFIG from "../apiConfig";
import { useDispatch } from "react-redux";
import { showCredit } from "../redux/creditSlice";

const Downloads = () => {
    const navigate = useNavigate();

    const [Savedata, setSavedata] = useState([])
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    function encryptCode(code) {
        return btoa(unescape(encodeURIComponent(code)));
    }

    useEffect(() => {

        fetch("https://www.boulou.io/Blulou-backend/csrf-token")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));

        async function Fetching() {

            const userId = localStorage.getItem("user_id");

            const encryptedCode = encryptCode(userId);

            const responsecredit = await axios.get(`${API_CONFIG.BASE_URL}/check_credit_amount/` + encryptedCode, userId, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            const credit_amount = responsecredit.data.credit_amount

            console.log(userId, "userIf profile");

            const response = await axios.get(`${API_CONFIG.BASE_URL}/get_credit_plans/` + encryptedCode, userId, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            console.log(response, "download search");
            setSavedata(response.data.data)

            dispatch(showCredit(credit_amount));
        }
        Fetching()
    }, [])

    // const savedSearches = [
    //     { id: "1", name: "Search 1", date: "2024-03-25", filters: { location: ["USA"], jobTitle: ["Engineer"], industry: ["IT"] } },
    //     { id: "2", name: "Search 2", date: "2024-03-20", filters: { location: ["UK"], jobTitle: ["Manager"], industry: ["Finance"] } },
    //     { id: "3", name: "Search 3", date: "2024-03-15", filters: { location: ["Canada"], jobTitle: ["Analyst"], industry: ["Healthcare"] } },
    // ];

    const downloadFile = async (filename) => {
        const fileUrl = `${API_CONFIG.BASE_URL}/${filename}`;

        try {
            const response = await axios.get(fileUrl, {
                responseType: 'blob',
            });

            const href = URL.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = href;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        } catch (error) {
            console.error('Download failed:', error);
        }
    };


    return (
        <div className="table-container">
            <h3 style={{ textAlign: "center" }}>Downloads</h3>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Data</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Savedata.length > 0 ? (
                        Savedata.map((search, index) => {
                            const createdAt = new Date(search.created_at);
                            const now = new Date();
                            const diffInDays = (now - createdAt) / (1000 * 60 * 60 * 24);
                            const isExpired = diffInDays > 15;

                            return (
                                <tr key={search.id}>
                                    <td>{index + 1}</td>
                                    <td>{search.length}</td>
                                    <td>{search.created_at}</td>
                                    <td>
                                        {isExpired ? (
                                            <>
                                                <button className="downloadbtn" disabled style={{ cursor: 'not-allowed', opacity: 0.5 }}>
                                                    Expired
                                                </button>
                                                <div style={{ fontSize: '12px', color: 'red' }}>Download expired after 15 days</div>
                                            </>
                                        ) : (
                                            <>
                                                <a href={`${API_CONFIG.BASE_URL}/${search.file}`} download>
                                                    <button className="downloadbtn">Download</button>
                                                </a>
                                                <div style={{ fontSize: '12px', color: 'gray' }}>Download expires after 15 days</div>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>No Downloads Data found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>


    );
};

export default Downloads;
