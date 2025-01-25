import React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const App = () => {
  const [email, setEmail] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    // Mock payment success
    setIsPaid(true);
    sendEmail();
  };

  const sendEmail = () => {
    // Mock email logic (to be replaced with SendGrid, etc.)
    alert(
      `An email has been sent to ${email} with the product name and image! Thank you for your purchase.`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-2xl">
        <CardContent className="p-6">
          {!isPaid ? (
            <>
              <h1 className="text-2xl font-bold mb-4 text-center">
                Effective Stretch Mark Solution
              </h1>
              <p className="mb-4 text-gray-600 text-sm text-center">
                Pay £5.99 to receive the name and image of a highly effective
                product for stretch marks. Note: This is based on personal
                research.
              </p>

              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />

              <Button
                onClick={handlePayment}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Pay £5.99
              </Button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Disclaimer: I am not medically trained to make prescriptions. The
                product is recommended based on my research. Please consult your
                dermatologist or doctor before use.
              </p>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4 text-green-600">
                Payment Successful!
              </h2>
              <p className="text-gray-600 mb-4">
                Check your email for the product details. Thank you for your
                purchase!
              </p>
              <Button
                onClick={() => setIsPaid(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Go Back
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
