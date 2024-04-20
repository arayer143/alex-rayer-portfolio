import { NextSeo } from 'next-seo';

import { Navbar } from 'src/app/components';
import { useSeoProps } from 'src/app/lib';

import type { ComponentProps, PropsWithChildren } from 'react';

interface BlogLayoutProps {
	seo?: Partial<ComponentProps<typeof NextSeo>>;
}

export function BlogLayout({ children, seo }: PropsWithChildren<BlogLayoutProps>): JSX.Element {
	const seoProps = useSeoProps({
		title: 'nuro ─ blog',
		...seo,
	});

	return (
		<>
			<NextSeo {...seoProps} />
			<Navbar.Standard />
			<main className="flex flex-col justify-center sm:px-8">{children}</main>
		</>
	);
}
