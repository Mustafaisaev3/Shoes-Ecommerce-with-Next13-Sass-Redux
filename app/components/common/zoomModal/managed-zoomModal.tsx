'use client'

import { useUI } from "@/app/context/ui.context";
import ZoomModal from "./ZoomModal";

const ManagedModal: React.FC = () => {
	const { displayProductImgZoom, closeProductImgZoom } = useUI();
	return (
		<ZoomModal open={displayProductImgZoom} onClose={closeProductImgZoom}>
			{/* {modalView === "PRODUCT_IMG_ZOOM_VIEW" && <LoginForm />} */}
		</ZoomModal>
	);
};

export default ManagedModal;