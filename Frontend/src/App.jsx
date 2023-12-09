import React, { useState, useEffect } from 'react';
import Cart from './pages/Cart';
import { getStripeApiKey } from "./api/stripeApi";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    getStripeApiKeyData();
  }, []);

  const getStripeApiKeyData = async () => {
    try {
      const { data } = await getStripeApiKey();
      setStripeApiKey(data.stripeApiKey);
      console.log(data.stripeApiKey);
    } catch (error) {
      console.error("Error fetching Stripe API key:", error);
    }
  };

  return (
    <Router>
      <Routes>

        <Route
          path="cart"
          element={
            stripeApiKey && (
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Cart />
              </Elements>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
