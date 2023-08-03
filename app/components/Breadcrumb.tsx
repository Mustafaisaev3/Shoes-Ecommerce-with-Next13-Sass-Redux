import React from "react";
import ActiveLink from "./UI/ActiveLink";
import useBreadcrumb, { convertBreadcrumbTitle } from "@/app/hooks/useBreadcrumb";



interface Props {
	children: any;
}

const BreadcrumbItem: React.FC<Props> = ({ children, ...props }) => {
	return (
		<li
			className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading"
			{...props}
		>
			{children}
		</li>
	);
};

const BreadcrumbSeparator: React.FC<Props> = ({ children, ...props }) => {
	return (
		<li className="text-base text-body mt-0.5" {...props}>
			{children}
		</li>
	);
};

export const BreadcrumbItems = (props: any) => {
	let children: any = React.Children.toArray(props.children);

	children = children.map((child: string, index: number) => (
		<BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
	));

	const lastIndex = children.length - 1;

	children = children.reduce((acc: any, child: string, index: number) => {
		const notLast = index < lastIndex;
		if (notLast) {
			acc.push(
				child,
				<BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
					{props.separator}
				</BreadcrumbSeparator>
			);
		} else {
			acc.push(child);
		}
		return acc;
	}, []);

	return (
		<div className="breadcrumb flex items-center">
			<ol className="flex items-center w-full overflow-hidden">{children}</ol>
		</div>
	);
};

const Breadcrumb: React.FC<{ separator?: string }> = ({ separator = "/" }) => {
	const breadcrumbs = useBreadcrumb();

	return (
		<BreadcrumbItems separator={separator}>
			<ActiveLink href={"/"} activeClassName="active-link">
				<a>Home</a>
			</ActiveLink>

			{breadcrumbs?.map((breadcrumb: any) => (
				<ActiveLink
					href={breadcrumb.href}
					activeClassName="active-link"
					key={breadcrumb.href}
				>
					<a className="capitalize">
						{convertBreadcrumbTitle(breadcrumb.breadcrumb)}
					</a>
				</ActiveLink>
			))}
		</BreadcrumbItems>
	);
};

export default Breadcrumb;
