'use client'

import Drawer from "./Drawer";
import { useRouter } from "next/router";
// import { getDirection } from "@utils/get-direction";
import { useUI } from "@/app/context/ui.context";
import CartView from "./views/CartView";
  


const ManagedDrawer: React.FC = () => {
	const { displayDrawer, closeDrawer, drawerView } = useUI();

	return (
		<Drawer open={displayDrawer} onClose={closeDrawer}>
            {drawerView === "CART_VIEW" && <CartView />}
		</Drawer>
	);
};

export default ManagedDrawer;
