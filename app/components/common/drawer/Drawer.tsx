'use client'

import React, { useRef, useEffect } from "react";
import { Portal } from "react-portal";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { fadeInRight } from "@/utils/motion/fade-in-right";
import { zoomOutIn } from "@/utils/motion/zoom-out-in";
import { fadeInOut } from "@/utils/motion/fade-in-out";
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
	const { closeDrawer, drawerView } = useUI();
	const drawerRootRef = useRef() as DivElementRef;
	const drawerInnerRef = useRef() as DivElementRef;
	useOnClickOutside(drawerInnerRef, () => closeDrawer());

    const handleCloseDrawer = () => {
        onClose()
    }

    useEffect(() => {
        console.log(open)
    }, [open])

	return (
		<Portal>
			<AnimatePresence mode="sync">
                    {open ? (
                        <motion.div
                            ref={drawerRootRef}
                            key={drawerView}
                            initial="from"
                            animate="to"
                            exit="from"
                            variants={fadeInOut(0.5)}
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
                                    className="drawer__inner-wrapper"
                                    ref={drawerInnerRef}
                                >
                                    {children}
                                    <div className="drawer__close" onClick={handleCloseDrawer}>
                                        <IoClose size={25} />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : null}
			</AnimatePresence>
		</Portal>
	);
};

export default Drawer;
