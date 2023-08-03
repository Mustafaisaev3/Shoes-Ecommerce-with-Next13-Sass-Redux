import { useState, useEffect } from "react";
import { useRouter, usePathname  } from "next/navigation";

export function convertBreadcrumbTitle(string: string) {
	return string
		.replace(/-/g, " ")
		.replace(/oe/g, "ö")
		.replace(/ae/g, "ä")
		.replace(/ue/g, "ü")
		.toLowerCase();
}

export default function useBreadcrumb() {
	const router = usePathname();
	const [breadcrumbs, setBreadcrumbs] = useState<any>(null);

	useEffect(() => {
		if (router) {
			const linkPath = router.split("/");
			linkPath.shift();

			const pathArray = linkPath.map((path, i) => {
				return {
					breadcrumb: path,
					href: "/" + linkPath.slice(0, i + 1).join("/"),
				};
			});

			setBreadcrumbs(pathArray);
		}
	}, [router]);

	return breadcrumbs;
}
