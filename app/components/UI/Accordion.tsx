'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heightCollapse } from "@/utils/motion/height-collapse";
import { FiPlus, FiMinus } from 'react-icons/fi'
import { IconType } from "react-icons";

interface CollapseProps {
	i: number;
	titleKey?: string;
	title?: string;
	content?: any;
	contentKey?: any;
	expanded: number;
	setExpanded: any;
    icon?: IconType;
	variant?: "gray" | "transparent";
};

export const Collapse: React.FC<CollapseProps> = ({
	i,
	expanded,
	setExpanded,
	titleKey,
	title,
	content,
    icon: Icon,
	contentKey,
	variant = "gray",
}) => {
	const isOpen = i === expanded;

	return (
		<div
			className={"colapse rounded-md bg-gray-200"}
		>
			<motion.header
				initial={false}
				onClick={() => setExpanded(isOpen ? false : i)}
				className={"colapse__header cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6"}
			>
                <div className="colapse__header-title">
                    {Icon && <span className="colapse__header-icon"><Icon size={20} /></span>}
                    <h2 className={" text-sm font-semibold leading-relaxed text-heading pe-2"}>
                        {title}
                    </h2>
                </div>
                {isOpen ? (
                    <FiMinus size={15} />
                ) : (
                    <FiPlus size={15} />
                )}
			</motion.header>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
                        className="colapse__content"
						key="content"
						initial="from"
						animate="to"
						exit="from"
						variants={heightCollapse()}
                        
					>
                        <br></br>
						<p
							className={"pb-6 md:pb-7 leading-7 text-sm text-gray-600"}
						>
							{content}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

interface AccordionProps {
	items: {
		titleKey?: string;
		title?: string;
		contentKey?: string;
		content?: string;
        icon: IconType
	}[];
	variant?: "gray" | "transparent";
};

const Accordion: React.FC<AccordionProps> = ({
	items,
	variant = "gray",
}) => {
	const [expanded, setExpanded] = useState<number>(0);

	return (
		<div className="accordion">
			{items?.map((item, index) => (
				<Collapse
					i={index}
					key={item.titleKey}
					title={item.title}
					content={item.content}
					expanded={expanded}
					setExpanded={setExpanded}
					variant={variant}
                    icon={item.icon}
				/>
			))}
		</div>
	);
};

export default Accordion;