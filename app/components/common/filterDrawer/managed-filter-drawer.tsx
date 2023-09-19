'use client'

import { useUI } from "@/app/context/ui.context";
import FilterDrawer from "./FilterDrawer";

const ManagedFilter: React.FC = () => {
	const { displayFilter, closeFilter } = useUI();

	return (
        <FilterDrawer open={displayFilter} onClose={closeFilter} />
	);
};

export default ManagedFilter;
