import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";
import Counter from "../common/Counter";
import { fadeInOut } from "@/utils/motion/fade-in-out";
import { generateCartItemName } from "@/utils/generate-cart-item-name";
import { SafeProduct } from "@/app/types";
import { useCart } from "@/app/context/Cart/cart.context";

type CartItemProps = {
	item?: SafeProduct;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
	const { removeItemFromCart } = useCart()
	return (
		<motion.div
			layout
			initial="from"
			animate="to"
			exit="from"
			variants={fadeInOut(0.25)}
			className={'cart-item'}
			title={item?.name}
		>
			<div className="cart-item__image">
				<Image
					src={item?.images[0] ?? "/images/HeroSlider/air1.png"}
					width={112}
					height={112}
					loading="eager"
					alt={item?.name || "Product Image"}
				/>
				<div
					className="cart-item__delete"
					onClick={() => removeItemFromCart(item?.ID)}
					role="button"
				>
					<IoIosCloseCircle size={30} color="white"/>
				</div>
			</div>

			<div className="cart-item__main">
				<Link
					href={`/`}
					className="cart-item__link"
				>
					{generateCartItemName(item?.name!, item?.options!)}
				</Link>
				<span className="cart-item__unit-price text-sm text-gray-400 mb-2.5">
                    Unit Price: 200$
				</span>

				<div className="cart-item__counter flex items-end justify-between">
					<Counter
						quantity={20}
						onIncrement={() => {}}
						onDecrement={() => {}}
						variant="dark"
					/>
					<span className="cart-item__total font-semibold text-sm md:text-base text-heading leading-5">
						{item?.salePrice ? item?.salePrice : item?.price}$
					</span>
				</div>
			</div>
		</motion.div>
	);
};

export default CartItem;
