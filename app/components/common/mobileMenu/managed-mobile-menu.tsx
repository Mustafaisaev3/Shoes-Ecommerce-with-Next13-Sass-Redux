'use client'

import { useUI } from "@/app/context/ui.context";
import MobileMenuDrawer from "./MobileMenuDrawer";
  
const ManagedMobileMenu: React.FC = () => {
	const { displayMobileMenu, closeMobileMenu } = useUI();

	return (
        <MobileMenuDrawer open={displayMobileMenu} onClose={closeMobileMenu} />
	);
};

export default ManagedMobileMenu;
