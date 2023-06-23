import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Table from "@/components/Table";
import Head from "next/head";
import * as React from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { IconButton, Button } from "@mui/material";

export default function Home(): JSX.Element {
	const sidebarRef = React.useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = React.useState(false);

	const handleMenuClick = (): void => {
		setIsOpen(true);
	};

	const handleIconButtonClick = (): void => {
		setIsOpen(false);
	};

	const handleOutsideClick = (event: MouseEvent | TouchEvent): void => {
		if (
			sidebarRef.current &&
			!sidebarRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	React.useEffect(() => {
		document.addEventListener("click", handleOutsideClick);
		document.addEventListener("touchstart", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
			document.removeEventListener("touchstart", handleOutsideClick);
		};
	}, []);

	return (
		<>
			<Head>
				<title>Crypto Panel - $</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<main className="main">
				<div className={`sidebar ${isOpen ? "open" : ""}`} ref={sidebarRef}>
					<SideBar />
					<Button
						className={`menu-button ${isOpen ? "hidden" : ""}`}
						onClick={handleMenuClick}
					>
						Menu <ChevronRightRoundedIcon className="icon" />
					</Button>

					<IconButton
						className={`menu-icon-button ${isOpen ? "" : "hidden"}`}
						onClick={handleIconButtonClick}
					>
						<ChevronLeftRoundedIcon className="icon" />
					</IconButton>
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
