'use client'

import { useUI } from "@/app/context/ui.context";
import SearchModalDrawer from "./SearchModalDrawer";
  
const ManagedSearchModal: React.FC = () => {
	const { displaySearch, closeSearch } = useUI();

	return (
        <SearchModalDrawer open={displaySearch} onClose={closeSearch} />
	);
};

export default ManagedSearchModal;
