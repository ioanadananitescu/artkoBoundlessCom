'use client';

import {useCart} from 'boundless-commerce-components/dist/cart';
import {useState, useEffect} from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout
} from '@stripe/react-stripe-js';
import CircularProgress from "@mui/material/CircularProgress";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripeCheckout() {
	const {cartId} = useCart();
	const [clientSecret, setClientSecret] = useState<string|undefined>();

	useEffect(() => {
		if (cartId) {
			fetch('/api/stripe-checkout', {
				method: 'POST',
				cache: 'no-cache',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({cartId})
			})
				.then((res) => res.json())
				.then((data) => setClientSecret(data.clientSecret));
		}
	}, [cartId]);

	if (!clientSecret) {
		return <CircularProgress />;
	}

	return (
		<div id="checkout">
			<EmbeddedCheckoutProvider
				stripe={stripePromise}
				options={{clientSecret}}
			>
				<EmbeddedCheckout />
			</EmbeddedCheckoutProvider>
		</div>
	);
}
