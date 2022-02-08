import { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import SEO from "../next-seo.config";
import * as gtag from "../lib/gtag";

import "../styles/global.css";
import "../styles/chrome-bug.css";
import { DefaultSeo } from "next-seo";
import Script from "next/script";

declare global {
	interface Window {
		$crisp: any;
		CRISP_WEBSITE_ID: any;
	}
}

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		window.$crisp = [];
		window.CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
		(function () {
			let d = document;
			let s = d.createElement("script");
			s.src = "https://client.crisp.chat/l.js";
			s.async = true;
			d.getElementsByTagName("head")[0].appendChild(s);
		})();

		document.body.classList?.remove("loading");
	}, []);

	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<DefaultSeo {...SEO} />

			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>

			<main className="grid place-items-center">
				<Component {...pageProps} />
			</main>
		</>
	);
};

export default App;
