import React, { useState } from "react";
import styles from "../styles/SideBar.module.scss";
import { Button, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

export default function SideBar() {
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
			<div className={styles.sidebar}>
				<div className={styles.logo}>my-sample-panel</div>
				<div className={styles.seperator}></div>
				<div className={styles.title}>general</div>
				<div className={styles.linkcontainer}>
					<LightbulbOutlinedIcon className={styles.icon} />
					<Button className={styles.button}>Services</Button>
				</div>

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
			</div>
		</>
	);
}
