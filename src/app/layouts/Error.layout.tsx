import { NextSeo } from 'next-seo';

import { useSeoProps } from 'src/app/lib';

import type { WithChildren, WithProps } from 'src/app/types';

interface DefaultLayoutProps extends WithChildren {
	seo?: Partial<WithProps<typeof NextSeo>>;
}

export function ErrorLayout({ children, seo }: DefaultLayoutProps): JSX.Element {
	const seoProps = useSeoProps({
		title: 'nuro ─ Whoops!',
		...seo,
	});

	return (
		<>
			<NextSeo {...seoProps} />
			<main className="flex flex-col justify-center px-8">
				<div className="relative h-screen pt-24 sm:pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
					{children}
				</div>
			</main>
		</>
	);
}
