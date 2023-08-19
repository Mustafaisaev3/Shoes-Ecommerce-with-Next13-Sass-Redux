import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";
import Counter from "../common/Counter";
import { fadeInOut } from "@/utils/motion/fade-in-out";
import { generateCartItemName } from "@/utils/generate-cart-item-name";

type CartItemProps = {
	item?: any;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {

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
					src={item?.image ?? "/images/HeroSlider/air1.png"}
					width={112}
					height={112}
					loading="eager"
					alt={item.name || "Product Image"}
					className="bg-gray-300 object-cover"
				/>
				<div
					className="cart-item__delete"
					onClick={() => {}}
					role="button"
				>
					<IoIosCloseCircle color="white" className="relative text-white text-2xl transform md:scale-0 md:opacity-0 transition duration-300 ease-in-out md:group-hover:scale-100 md:group-hover:opacity-100" />
				</div>
			</div>

			<div className="cart-item__main">
				<Link
					href={`/`}
					className="cart-item__link"
				>
					{generateCartItemName("Nike AirMax", {name: 'alex', size: 'XXL'})}
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
						500$
					</span>
				</div>
			</div>
		</motion.div>
	);
};

export default CartItem;
