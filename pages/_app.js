import React from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout';

export default function Teamcoll({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Teamcoll</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="reset/normalize.css" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
