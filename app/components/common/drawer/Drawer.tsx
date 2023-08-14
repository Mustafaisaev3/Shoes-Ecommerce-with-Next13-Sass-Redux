'use client'

import React, { useRef, useEffect } from "react";
import { Portal } from "react-portal";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { fadeInRight } from "@/utils/motion/fade-in-right";
import { zoomOutIn } from "@/utils/motion/zoom-out-in";
import { useUI } from "@/app/context/ui.context";
import useOnClickOutside from "@/app/hooks/useOnClickOitside"


type DrowerProps = {
	open?: boolean;
	children?: React.ReactNode;
	onClose: () => void;
	containerClassName?: string;
	variant?: "center" | "bottom";
};
type DivElementRef = React.MutableRefObject<HTMLDivElement>;


const Drawer: React.FC<DrowerProps> = ({
	children,
	open,
	onClose,
	containerClassName,
	variant = "center",
}) => {
	const { closeDrawer } = useUI();
	const drawerRootRef = useRef() as DivElementRef;
	const drawerInnerRef = useRef() as DivElementRef;
	useOnClickOutside(drawerInnerRef, () => closeDrawer());

	return (
		<Portal>
			<AnimatePresence>
                    {open && (
                        <motion.div
                            key="drawer"
                            initial="from"
                            animate="to"
                            exit="from"
                            variants={fadeInRight()}
                            className='drawer'
                        >
                            <motion.div
                                initial="from"
                                animate="to"
                                exit="from"
                                variants={fadeInRight(0.5)}
                                className="drawer__inner overflow-y-auto h-full flex justify-between"
                            >
                                <div
                                    ref={drawerInnerRef}
                                >
                                    {children}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
			</AnimatePresence>
		</Portal>
	);
};

export default Drawer;
