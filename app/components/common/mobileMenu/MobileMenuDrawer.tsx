'use client'

import React, { useRef, useEffect } from "react";
import { Portal } from "react-portal";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { fadeInRight } from "@/utils/motion/fade-in-right";
import { zoomOutIn } from "@/utils/motion/zoom-out-in";
import { fadeInOut } from "@/utils/motion/fade-in-out";
import { useUI } from "@/app/context/ui.context";
import { fadeInLeft } from "@/utils/motion/fade-in-left";
import MobileMenu from "./MobileMenu";


type  MobileMenuDrowerProps = {
	open?: boolean;
	children?: React.ReactNode;
	onClose?: () => void;
	containerClassName?: string;
	variant?: "center" | "bottom";
};


const MobileMenuDrawer: React.FC<MobileMenuDrowerProps> = ({
	children,
	open,
	onClose,
	containerClassName,
	variant = "center",
}) => {
	const { closeMobileMenu } = useUI();

	return (
		<Portal>
			<AnimatePresence mode="sync">
                    {open ? (
                        <motion.div
                            key={'mobile-menu'}
                            initial="from"
                            animate="to"
                            exit="from"
                            variants={fadeInOut(0.5)}
                            className='mobile-menu-drawer'
                        >
                            <motion.div
                                initial="from"
                                animate="to"
                                exit="from"
                                variants={fadeInLeft(0.5)}
                                className="mobile-menu-drawer__inner"
                            >
                                <MobileMenu />
                                <div className="mobile-menu-drawer__close" onClick={closeMobileMenu}>
                                    <IoClose size={25} />
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : null}
			</AnimatePresence>
		</Portal>
	);
};

export default MobileMenuDrawer;
