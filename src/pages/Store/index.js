import { TripCard } from '../../components/Store/TripCard';
import { Cart } from '../../components/Store/Cart';
import { CartProvider } from 'react-use-cart';

export function Store() {
	return (
		<>
			{/* <div>Cart HERE</div> */}
			<div
				className="container"
				style={{ display: 'flex', flexDirection: 'row' }}
			>
				<CartProvider>
					<div className="tripCard" style={{ width: '70vw', height: '70vh' }}>
						<TripCard />
					</div>
					<div className="cart">
						<Cart />
					</div>
				</CartProvider>
			</div>
		</>
	);
}
