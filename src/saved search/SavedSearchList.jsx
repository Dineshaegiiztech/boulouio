import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './SavedSearchList.css';
import axios from "axios";
import API_CONFIG from "../apiConfig";
import { useDispatch } from "react-redux";
import { showCredit } from "../redux/creditSlice";

const SavedSearchList = () => {
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

            const response = await axios.get(`${API_CONFIG.BASE_URL}/get_saved_search/` + encryptedCode, userId, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            console.log(response.data.data, "prospect search");
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

    const handleViewClick = (filters) => {
        console.log(filters,"filters");
        
        navigate("/prospect-search", { state: { filters } });
    };

    const Deletesearch = async (id) => {

        const deleteId = id

        let arr = [deleteId]

        const encryptedCode = encryptCode(arr);

        const response = await axios.get(`${API_CONFIG.BASE_URL}/delete_saved_search/` + encryptedCode, arr, {
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": products.csrf_token,
            },
            withCredentials: true,
        });

        if (response.status === 200) {
            setSavedata((prevData) => prevData.filter((search) => search.id !== id));
        } else {
            console.error("Failed to delete the search");
        }

    };

    return (
        <div className="table-container">
            <h3>Saved Searches</h3>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Savedata.length > 0 ? (
                        Savedata.map((search, index) => (
                            <tr key={search.id}>
                                <td>{index + 1}</td>
                                <td>{search.name}</td>
                                <td>{search.created_at}</td>
                                <td>
                                    <button className="view-btn" onClick={() => handleViewClick(search.filter)}>View</button>
                                    <button className="delete-btn" onClick={() => Deletesearch(search.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>No saved searches found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SavedSearchList;
