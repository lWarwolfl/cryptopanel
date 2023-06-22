import React, { useState } from "react";
import styles from "../styles/Header.module.scss";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import photo from "../public/image/svg/photo.svg";

export default function Header() {
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
			<div className={styles.header}>
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

				<div className={styles.databox}>
					<IconButton className={styles.iconbutton}>
						<NotificationsRoundedIcon className={styles.icon} />
					</IconButton>

					<div className={styles.usercontainer}>
						<div className={styles.name}>Sina Kheiry</div>
						<Image
							src={photo}
							priority={true}
							alt="My photo"
							className={styles.image}
						/>
					</div>

					<div className={styles.buttoncontainer}>
						<Button className={styles.button}>Exit</Button>
						<IconButton className={styles.iconbutton}>
							<ExitToAppRoundedIcon className={styles.icon} />
						</IconButton>
					</div>
				</div>
			</div>
		</>
	);
}
