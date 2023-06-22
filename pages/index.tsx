import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Head from "next/head";
import * as React from "react";

export default function Home() {
	return (
		<>
			<Head>
				<title>Sample Panel - Welcome</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<main className="main">
				<div className="sidebar">
					<SideBar />
				</div>
				<div className="panel">
					<Header />
				</div>
			</main>
		</>
	);
}
