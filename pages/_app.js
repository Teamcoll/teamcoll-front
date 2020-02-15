import React from 'react';
import Head from 'next/head';
import { DefaultLayout } from '../components/Layout';

export default function Teamcoll({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Teamcoll</title>
			</Head>
			<DefaultLayout>
				<Component {...pageProps} />
			</DefaultLayout>
		</>
	);
}
