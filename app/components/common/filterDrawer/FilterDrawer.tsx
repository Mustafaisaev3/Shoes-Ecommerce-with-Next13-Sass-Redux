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
import CollectionFilters from "../../collection/CollectionFilters";
import useOnClickOutside from "@/app/hooks/useOnClickOitside";


type FilterDrawerDrowerProps = {
	open?: boolean;
	children?: React.ReactNode;
	onClose?: () => void;
	containerClassName?: string;
	variant?: "center" | "bottom";
};

type DivElementRef = React.MutableRefObject<HTMLDivElement>;


const FilterDrawer: React.FC<FilterDrawerDrowerProps> = ({
	children,
	open,
	onClose,
	containerClassName,
	variant = "center",
}) => {
	const { closeFilter } = useUI();

	const drawerRootRef = useRef() as DivElementRef;
	const drawerInnerRef = useRef() as DivElementRef;
	useOnClickOutside(drawerInnerRef, () => closeFilter());

	return (
		<Portal>
			<AnimatePresence mode="sync">
                    {open ? (
                        <motion.div
                            key={'filter-drawer'}
                            initial="from"
                            animate="to"
                            exit="from"
                            variants={fadeInOut(0.5)}
                            className='filter-drawer'
                        >
                            <motion.div
                                ref={drawerInnerRef}
                                initial="from"
                                animate="to"
                                exit="from"
                                variants={fadeInLeft(0.5)}
                                className="filter-drawer__inner"
                            >   
                                <CollectionFilters />
                                <div className="filter-drawer__close" onClick={closeFilter}>
                                    <IoClose size={25} />
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : null}
			</AnimatePresence>
		</Portal>
	);
};

export default FilterDrawer;