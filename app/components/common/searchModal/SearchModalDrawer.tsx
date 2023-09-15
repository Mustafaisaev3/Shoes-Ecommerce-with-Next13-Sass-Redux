'use client'

import React, { useRef, useEffect } from "react";
import { Portal } from "react-portal";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { fadeInRight } from "@/utils/motion/fade-in-right";
import { fromTop } from "@/utils/motion/from-top";
import { fadeInOut } from "@/utils/motion/fade-in-out";
import { useUI } from "@/app/context/ui.context";
import { fadeInLeft } from "@/utils/motion/fade-in-left";
import SearchModal from "./SearchModal";
import useOnClickOutside from "@/app/hooks/useOnClickOitside";



type SearchModalDrawerProps = {
	open?: boolean;
	children?: React.ReactNode;
	onClose?: () => void;
	containerClassName?: string;
	variant?: "center" | "bottom";
};

type DivElementRef = React.MutableRefObject<HTMLDivElement>;


const SearchModalDrawer: React.FC<SearchModalDrawerProps> = ({
	children,
	open,
	onClose,
	containerClassName,
	variant = "center",
}) => {
	const { closeSearch } = useUI();

	const drawerInnerRef = useRef() as DivElementRef;
	useOnClickOutside(drawerInnerRef, () => closeSearch());

	return (
		<Portal>
			<AnimatePresence mode="sync">
                    {open ? (
                        <motion.div
                            key={'search-modal'}
                            initial="from"
                            animate="to"
                            exit="from"
                            variants={fadeInOut(0.5)}
                            className='search-modal'
                        >
                            <motion.div
                                ref={drawerInnerRef}
                                initial="from"
                                animate="to"
                                exit="from"
                                variants={fromTop(0.5)}
                                className="search-modal__inner"
                            >
                                <SearchModal />
                                <div className="search-modal__close" onClick={closeSearch}>
                                    <IoClose size={25} />
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : null}
			</AnimatePresence>
		</Portal>
	);
};

export default SearchModalDrawer;
