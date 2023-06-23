import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import styles from "../styles/Analytics.module.scss";
import StyledCard from "./StyledCard";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import tron from "../public/image/svg/coins/tron.svg";
import Image from "next/image";

export default function Analytics() {
	const [copied, setCopied] = useState(false);
	const walletAddress = "0xAbCdEfGh1234567890iJkLmNoPqRsTuVwXyZ";

	const handleCopyAddress = () => {
		navigator.clipboard.writeText(walletAddress);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<>
			<div className={styles.addressbox}>
				<div className={styles.address}>
					<span className={styles.text}>
						{copied ? "Copied to clipboard" : walletAddress}
					</span>
				</div>
				<IconButton className={styles.iconbutton} onClick={handleCopyAddress}>
					<ContentCopyIcon className={styles.icon} />
				</IconButton>
			</div>

			<StyledCard className={styles.card}>
				<div className={styles.title}>
					exchange
					<InfoOutlinedIcon className={styles.icon} />
				</div>

				<div className={styles.exchange}>
					<div className={styles.from}>
						<span className={styles.regular}>$</span>
						<span contentEditable="true">567</span>
						<span className={styles.secondary}>.</span>
						<span className={styles.secondary} contentEditable="true">
							000
						</span>
					</div>
					<SwapHorizRoundedIcon className={styles.icon} />
					<div className={styles.to}>
						8779<span className={styles.secondary}>.902</span>{" "}
						<span className={styles.regular}>TRX</span>
					</div>
				</div>

				<div className={styles.footer}>
					<div className={styles.text}>
						Min: <div className={styles.accent}>$50</div>
					</div>
					<div className={styles.text}>
						Max: <div className={styles.accent}>$10000</div>
					</div>
				</div>
			</StyledCard>

			<StyledCard className={styles.troncard}>
				<div className={styles.data}>
					<Image
						src={tron}
						priority={true}
						alt="Tron"
						className={styles.image}
					/>

					<div className={styles.coin}>
						tron
						<div className={styles.abr}>trx</div>
					</div>

					<div className={styles.accent}>+ 0.90%</div>
				</div>
				<div className={styles.chart1}></div>
			</StyledCard>

			<StyledCard className={styles.card}>
				<div className={styles.title}>
					analytics
					<InfoOutlinedIcon className={styles.icon} />
				</div>
				<div className={styles.chart2}></div>
			</StyledCard>
		</>
	);
}
