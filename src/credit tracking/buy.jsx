import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showCredit } from "../redux/creditSlice";
import API_CONFIG from "../apiConfig";

const Creditsbuy = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    function encryptCode(code) {
        return btoa(unescape(encodeURIComponent(code)));
    }

    useEffect(() => {

        async function fetching() {

            const userId = localStorage.getItem("user_id");
            const encryptedCode = encryptCode(userId);

            const responsetable = await axios.get(`${API_CONFIG.BASE_URL}/get_credit_plans/` + encryptedCode, userId, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            const value = responsetable.data.data
            setData(value)
            console.log(responsetable, "responsetable");

            const responsecredit = await axios.get(`${API_CONFIG.BASE_URL}/check_credit_amount/` + encryptedCode, userId, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            console.log(responsecredit, "responsecredit");

            const credit_amount = responsecredit.data.credit_amount

            dispatch(showCredit(credit_amount));

        }
        fetching()

    }, [])

    return (
        <div>
            <br />
            <h2 style={{ textAlign: "center" }}>Credits Tracking</h2>
            <br />
            <table border="1" cellPadding="8" cellSpacing="0">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Date</th>
                        <th>Purchased Data</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.created_at}</td>
                                <td>{item.length}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">Loading...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Creditsbuy;
