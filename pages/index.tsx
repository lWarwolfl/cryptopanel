import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Table from "@/components/Table";
import Head from "next/head";
import * as React from "react";

export default function Home() {
	return (
		<>
			<Head>
				<title>Crypto Panel - $</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<main className="main">
				<div className="sidebar">
					<SideBar />
				</div>
				<div className="panel">
					<Header />
					<div className="analytics">
						<Analytics />
					</div>
					<Table />
				</div>
			</main>
		</>
	);
}
