import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import './success.css';
import API_CONFIG from "../apiConfig";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function success() {

  const [amountPaid, setAmountPaid] = useState(null);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();


  function encryptCode(code) {
    return btoa(unescape(encodeURIComponent(code)));
  }

  // useEffect(async () => {

  // fetch("https://www.boulou.io/Blulou-backend/csrf-token")
  //   .then((response) => response.json())
  //   .then((data) => setProducts(data))
  //   .catch((error) => console.error("Error fetching products:", error));

  //   async function Fetching() {

  //     const userId = localStorage.getItem("user_id");
  //     const storedAmount = localStorage.getItem("selectedDollars");
  //     const storedPlan = localStorage.getItem("selectedPlan");

  //     var arr = [userId, storedAmount, storedPlan]
  //     const encryptedCodes = encryptCode(arr);

  //     console.log(userId, storedPlan, storedAmount, "payment response");

  //     const response = await axios.get(`${API_CONFIG.BASE_URL}/updatesubscribe/` + encryptedCodes, arr, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-CSRF-Token": products.csrf_token,
  //       },
  //       withCredentials: true,
  //     });

  //     if (response.status == 200) {
  //       setAmountPaid(storedAmount);
  //       console.log("Stripe payment successful! Amount paid:", storedAmount);
  //       navigate("/prospect-search");
  //     }

  //     console.log(response,"API RESPONSE");
  //     // setAmountPaid(storedAmount);
  //     // console.log("Stripe payment successful! Amount paid:", storedAmount);
  //   }
  //   Fetching()

  //   localStorage.removeItem("selectedDollars");
  //   localStorage.removeItem("selectedPlan");

  // }, []);

  useEffect(() => {

    fetch("https://www.boulou.io/Blulou-backend/csrf-token")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));

    const fetchData = async () => {
      try {
        // Get CSRF token
        // const res = await fetch(`${API_CONFIG.BASE_URL}/Blulou-backend/csrf-token`);
        // const data = await res.json();
        // setProducts(data); // Save token to state

        const userId = localStorage.getItem("user_id");
        const storedAmount = localStorage.getItem("selectedDollars");
        const storedPlan = localStorage.getItem("selectedPlan");

        const arr = [userId, storedAmount, storedPlan];
        const encryptedCodes = encryptCode(arr);

        const response = await axios.get(`${API_CONFIG.BASE_URL}/updatesubscribe/` + encryptedCodes, arr, {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": products.csrf_token,
          },
          withCredentials: true,
        });

        if (response.status === 200) {
          setAmountPaid(storedAmount);
          console.log("Stripe payment successful! Amount paid:", storedAmount);

          Swal.fire({
            title: 'Payment Successful!',
            text: 'Please wait while we redirect you...',
            icon: 'success',
            showConfirmButton: false,
            timer: 4000, // 2 seconds
            didOpen: () => {
              Swal.showLoading();
            }
          });

          setTimeout(() => {
            navigate("/prospect-search");
          }, 4000);
        }

        console.log(response, "API RESPONSE");

        // Clear localStorage
        localStorage.removeItem("selectedDollars");
        localStorage.removeItem("selectedPlan");
      } catch (error) {
        console.error("Error fetching or subscribing:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
    </>
    // <div className="container-success">
    //   <div className="card-success">
    //     <CheckCircle className="icon-success" />
    //     <h1>${amountPaid}</h1>
    //     <h2 className="title-success">Payment Successful</h2>
    //     <p className="message-success">Thank you! Your payment has been processed successfully.</p>
    //   </div>
    // </div>
  );
}
