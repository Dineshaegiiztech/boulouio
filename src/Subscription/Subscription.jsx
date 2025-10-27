import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCredits, increaseCredits, showCredit } from "../redux/creditSlice";
import Swal from "sweetalert2";
import "./Subscription.css";
import API_CONFIG from "../apiConfig";
import axios from "axios";
import { Slider, Typography, CircularProgress } from "@mui/material";



import { loadStripe } from "@stripe/stripe-js"

const priceMap = {
    10: "price_1RUiK2EQIDoiSACmwKOEitGL",
    20: "price_1RUiJeEQIDoiSACmzsBTGMk0",
    30: "price_1RUiJJEQIDoiSACmnEzseNpg",
    40: "price_1RUiIuEQIDoiSACmDkM6BclE",
    50: "price_1RUiI9EQIDoiSACms7zRZCzP",
};

const SubscriptionPlans = () => {
    const dispatch = useDispatch();
    const creditsLeft = useSelector((state) => state.credit.creditsLeft);
    const [selectedPlan, setSelectedPlan] = useState("");
    const [disabledPlan, setDisabledPlan] = useState(null);
    const [products, setProducts] = useState([]);
    const [loadingPlan, setLoadingPlan] = useState(null);

    const [dollars, setDollars] = useState(30);

    const [Loading, setLoading] = useState(false);

    const getCredits = (value) => value * 2;

    const handleSliderChange = (event, newValue) => {
        setDollars(newValue);
    };

    const handleBuyNow = async () => {
        setLoading(true);
        const stripe = await getStripe();

        localStorage.setItem("selectedDollars", dollars);
        const additional = dollars * 2
        localStorage.setItem("selectedPlan", additional);

        const item = {
            price: priceMap[dollars],
            quantity: 1,
        };

        console.log(item, "dollars");

        const checkoutOptions = {
            lineItems: [item],
            mode: "payment",
            successUrl: `${window.location.origin}/success`,
            cancelUrl: `${window.location.origin}/cancel`,
        };

        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        if (error) {
            console.error("Stripe Checkout Error:", error);
        }
    };

    let stripePromise

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(API_CONFIG.REACT_APP_STRIPE_KEY)
        }
        return stripePromise
    }

    // const checkoutoptions = {
    //     lineItems: [item],
    //     mode: "subscription",
    //     successUrl: `${window.location.origin}/success`,
    //     cancelUrl: `${window.location.origin}/cancel`
    // }

    // const redirectToCheckout = async () => {

    //     setLoading(true)

    //     console.log("redirect checkout")

    //     const stripe = await getStripe()

    //     const { error } = await stripe.redirectToCheckout(checkoutoptions)

    //     console.log("stripe checkout error", error)

    //     if (error) {
    //         setStripeError(error.message)
    //         setLoading(false)
    //     }

    //     if (Striprerror) {
    //         alert(Striprerror)
    //     }
    // }


    function encryptCode(code) {
        return btoa(unescape(encodeURIComponent(code)));
    }

    useEffect(() => {

        fetch(`${API_CONFIG.BASE_URL}/Blulou-backend/csrf-token`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));

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
            console.log(response, "response my profile");

            const SubscribedPlanCredits = response.data.subscribe_plan;

            const matchedPlan = plans.find(plan => plan.credits == SubscribedPlanCredits);

            console.log(matchedPlan, "match");

            console.log(response.data.credit_amount, "amount")

            const credit_amount = response.data.credit_amount

            if (matchedPlan) {
                setSelectedPlan(matchedPlan.id);
                setDisabledPlan(matchedPlan.id);
            }
            dispatch(showCredit(credit_amount));
        }
        Fetching()
    }, [])

    const plans = [
        {
            id: "subscription_basic",
            title: "Basic",
            company: "Boulou Limited",
            price: "$49",
            credits: 250,
            sub: "price_1RUiHnEQIDoiSACmIGKwid3E",
            features: ["All features in Free Plan", "Unlimited habit tracking", "Calendar Integration"],
        },
        {
            id: "subscription_Professional",
            title: "Professional",
            company: "Boulou Limited",
            price: "$79",
            credits: 500,
            sub: "price_1RUiHQEQIDoiSACm0BEmU50D",
            features: ["All features in Free Plan", "Unlimited habit tracking", "Calendar Integration"],
        },
        {
            id: "subscription_Organization",
            title: "Organization",
            company: "Boulou Limited",
            price: "$119",
            credits: 1000,
            sub: "price_1RUiGHEQIDoiSACm5buQjJLv",
            features: ["All features in Free Plan", "Unlimited habit tracking", "Calendar Integration"],
        },
        {
            id: "free",
            title: "Selling with Boulou",
            company: "Boulou Blue Limited",
            price: "Free",
            credits: 50,
            features: ["All features in Free Plan", "Unlimited habit tracking", "Calendar Integration"],
        },
    ];

    const handlePlanSelect = (plan) => {
        Swal.fire({
            title: "Confirm Subscription",
            text: `Do you want to subscribe to ${plan.title}?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Subscribe",
            cancelButtonText: "Cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                setSelectedPlan(plan.id);
                setDisabledPlan(plan.id);
                setLoadingPlan(plan.id);
                const amount = plan.credits
                const selectedplan = plan.price

                localStorage.setItem("selectedDollars", amount);

                localStorage.setItem("selectedPlan", selectedplan);

                const item = {
                    price: plan.sub,
                    quantity: 1
                }

                console.log(item, "items");


                const checkoutoptions = {
                    lineItems: [item],
                    mode: "payment",
                    successUrl: `${window.location.origin}/success`,
                    cancelUrl: `${window.location.origin}/cancel`
                }


                const stripe = await getStripe()

                const { error } = await stripe.redirectToCheckout(checkoutoptions)
                // Swal.fire("Subscribed!", `You have subscribed to ${plan.title}.`, "success");

                // const userId = localStorage.getItem("user_id");
                // const creditsupdate = plan.credits

                // dispatch(increaseCredits(creditsupdate));

                // var arr = [userId, creditsupdate];

                // console.log(arr, "arr values");

                // const encryptedCode = encryptCode(arr);

                // const response = await axios.get(`${API_CONFIG.BASE_URL}/subscription_plan/` + encryptedCode, arr, {
                //     headers: {
                //         "Content-Type": "application/json",
                //         "X-CSRF-Token": products.csrf_token,
                //     },
                //     withCredentials: true,
                // });

                // console.log(response, "updated profile");
            }
            else {
                setLoadingPlan(null); // reset if canceled
            }
        });
    };

    return (
        <div className="container-plans">

            {/* <button onClick={redirectToCheckout} disabled={Loading}>{Loading ? "Loading..." : "checkout"}</button> */}
            <h1 style={{ textAlign: "center" }}>Subscription Plans</h1>

            <div style={{ width: 300, margin: "50px auto", textAlign: "center" }}>
                <Typography variant="h6">
                    ${dollars} → {getCredits(dollars)} Credits
                </Typography>
                <Slider
                    value={dollars}
                    onChange={handleSliderChange}
                    step={10}
                    min={10}
                    max={50}
                    sx={{ color: "red" }} // Red slider
                />
                <div style={{ marginTop: "20px" }}>
                    <button className="paynow" onClick={handleBuyNow} disabled={Loading}>
                        {Loading ? (
                            <CircularProgress size={24} style={{ color: "white" }} />
                        ) : (
                            "Pay Now"
                        )}
                    </button>
                </div>
            </div>



            {/* <h3 style={{ textAlign: "center" }}>Credits Left: {creditsLeft}</h3> */}
            <div className="plans">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`card-plans ${selectedPlan === plan.id ? "selected" : ""}`}
                    >
                        <div className="card-header">
                            <h3>{plan.title}</h3>
                            <input
                                type="radio"
                                name="plan"
                                value={plan.id}
                                checked={selectedPlan === plan.id}
                                disabled={disabledPlan === plan.id} // Disable active plan
                            // onChange={() => handlePlanSelect(plan)}
                            />
                        </div>
                        <p className="company">{plan.company}</p>
                        <h2 className="price">{plan.price}</h2>
                        <h2 className="price">Credits: {plan.credits}</h2>
                        <ul className="features">
                            {plan.features.map((feature, index) => (
                                <li key={index}>✔ {feature}</li>
                            ))}
                        </ul>
                        {plan.id !== "free" && (
                            <button
                                className="choose-btn"
                                onClick={() => {
                                    setLoadingPlan(plan.id); // mark loading
                                    handlePlanSelect(plan);
                                    // redirect or async logic inside handlePlanSelect
                                }}
                                disabled={loadingPlan === plan.id}
                            >
                                {loadingPlan === plan.id ? "Processing..." : "Choose Method"}
                            </button>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionPlans;
