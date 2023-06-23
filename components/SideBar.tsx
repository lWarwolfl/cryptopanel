import React, { useState } from "react";
import styles from "../styles/SideBar.module.scss";
import { Button, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";
import CandlestickChartRoundedIcon from "@mui/icons-material/CandlestickChartRounded";
import HistoryToggleOffRoundedIcon from "@mui/icons-material/HistoryToggleOffRounded";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

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
				<div className={styles.logo}>sample-panel-$</div>

				<div className={styles.seperator}></div>

				<div className={styles.title}>general</div>
				<div className={styles.linkcontainer}>
					<LightbulbOutlinedIcon className={styles.icon} />
					<div className={styles.link}>Services</div>
				</div>
				<div className={styles.linkcontainer}>
					<CreditCardOutlinedIcon className={styles.icon} />
					<div className={styles.link}>Cards</div>
				</div>

				<div className={styles.title}>cryptocurrency</div>
				<div className={`${styles.linkcontainer} ${styles.active}`}>
					<StorefrontOutlinedIcon className={styles.icon} />
					<div className={styles.link}>Marketplace</div>
				</div>
				<div className={styles.linkcontainer}>
					<TollOutlinedIcon className={styles.icon} />
					<div className={styles.link}>Trading</div>
				</div>
				<div className={styles.linkcontainer}>
					<CandlestickChartRoundedIcon className={styles.icon} />
					<div className={styles.link}>Statistics</div>
				</div>

				<div className={styles.title}>profile</div>
				<div className={styles.linkcontainer}>
					<HistoryToggleOffRoundedIcon className={styles.icon} />
					<div className={styles.link}>History</div>
				</div>
				<div className={styles.linkcontainer}>
					<TextsmsOutlinedIcon className={styles.icon} />
					<div className={styles.link}>Messages</div>
					<div className={styles.new}></div>
				</div>
				<div className={styles.linkcontainer}>
					<SettingsOutlinedIcon className={styles.icon} />
					<div className={styles.link}>Setting</div>
				</div>
				<div className={`${styles.linkcontainer} ${styles.nobottom}`}>
					<SupportRoundedIcon className={styles.icon} />
					<div className={styles.link}>Support</div>
				</div>

				<div className={styles.seperator}></div>

				<div className={styles.socialcontainer}>
					<IconButton className={styles.iconbutton}>
						<InstagramIcon className={styles.icon} />
					</IconButton>
					<IconButton className={styles.iconbutton}>
						<TwitterIcon className={styles.icon} />
					</IconButton>
					<IconButton className={styles.iconbutton}>
						<FacebookIcon className={styles.icon} />
					</IconButton>
					<IconButton className={styles.iconbutton}>
						<TelegramIcon className={styles.icon} />
					</IconButton>
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
