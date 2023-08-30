'use client'

import Modal from "./Modal";
import { useUI } from "@/app/context/ui.context";
import Register from "./views/Register";
import Login from "./views/Login";
import Checkout from "./views/Checkout";


import { ModalViewTypes } from "@/app/context/ui.context";

const ManagedModal: React.FC = () => {
	const { displayModal, closeModal, modalView } = useUI();

	return (
		<Modal open={displayModal} onClose={closeModal}>
			{modalView === ModalViewTypes.REGISTER_VIEW && <Register />}
			{modalView === ModalViewTypes.LOGIN_VIEW && <Login />}
			{modalView === ModalViewTypes.CHECKOUT_VIEW && <Checkout />}
		</Modal>
	);
};

export default ManagedModal;
