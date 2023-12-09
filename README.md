
# MERN Stripe Implementation

This repository contains an example implementation of Stripe payment processing in a MERN (MongoDB, Express.js, React, Node.js) stack.

## Prerequisites

Before you start, make sure you have the following installed:

- Node.js and npm: [Node.js Downloads](https://nodejs.org/en/download/)
- MongoDB: [MongoDB Downloads](https://www.mongodb.com/try/download/community)
- Stripe Account: [Stripe Dashboard](https://dashboard.stripe.com/register)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/Alliyan732/Stripe-Implementation-MERN
    ```

2. Change into the project directory:

    ```bash
    cd <Project folder>
    ```

3. Install dependencies for both the server and the client:

    ```bash
    cd Backend
    npm install
    cd ../Frontend
    npm install
    ```

4. Set up your environment variables:

    Create a `.env` file in the `server` directory with the following content:

    ```env
    PORT=8080
    MONGODB_URI=mongodb://localhost:27017/yourdatabase
    STRIPE_API_KEY= your_stripe_api_key
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

    Replace `your_stripe_secret_key` with your actual Stripe secret key.

5. Start the server and the client:

    In one terminal window, run the server:

    ```bash
    cd Backend
    npm start
    ```

    In another terminal window, run the client:

    ```bash
    cd Frontend
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000` to see the application.

## Stripe API

This project uses the Stripe API for payment processing. Ensure that you have a valid Stripe account and replace the `STRIPE_SECRET_KEY` in the `.env` file with your actual secret key from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys).


Feel free to explore and customize the code according to your project requirements.

## Author

Aalliyan Alvi

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
