import React from "react";
import styles from "../styles/Table.module.scss";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Image from "next/image";
import bitcoin from "../public/image/svg/coins/bitcoin.svg";
import tron from "../public/image/svg/coins/tron.svg";
import tether from "../public/image/svg/coins/tether.svg";
import ethereum from "../public/image/svg/coins/ethereum.svg";
import graph from "../public/image/svg/coins/graph.svg";
import bnb from "../public/image/svg/coins/bnb.svg";

const columns: GridColDef[] = [
	{
		field: "name",
		headerName: "Name",
		flex: 1,
		minWidth: 160,
		renderCell: (params: GridRenderCellParams) => {
			return (
				<div className="grid-cell-new">
					<Image
						src={params.row.image}
						priority={true}
						alt="Logo"
						className="image"
					/>
					<div className="text">
						{params.row.name}{" "}
						<span className="secondary">{params.row.abr}</span>
					</div>
				</div>
			);
		},
	},
	{
		field: "price",
		headerName: "Price",
		flex: 1,
		renderCell: (params: GridRenderCellParams) => {
			return (
				<div className="grid-cell-new">
					<div className="text">${params.row.price}</div>
				</div>
			);
		},
	},
	{
		field: "h1",
		headerName: "1h%",
		flex: 1,
		maxWidth: 100,
		renderCell: (params: GridRenderCellParams) => {
			return (
				<div className="grid-cell-new">
					<div className="text">{params.row.h1}</div>%
				</div>
			);
		},
	},
	{
		field: "h24",
		headerName: "24h%",
		flex: 1,
		maxWidth: 80,
		renderCell: (params: GridRenderCellParams) => {
			return (
				<div className="grid-cell-new">
					<div className="text">{params.row.h24}</div>%
				</div>
			);
		},
	},
	{
		field: "d7",
		headerName: "7d%",
		flex: 1,
		maxWidth: 80,
		renderCell: (params: GridRenderCellParams) => {
			return (
				<div className="grid-cell-new">
					<div className="text">{params.row.d7}</div>%
				</div>
			);
		},
	},
	{
		field: "cap",
		headerName: "Market Cap",
		flex: 1,
		renderCell: (params: GridRenderCellParams) => {
			return (
				<div className="grid-cell-new">
					<div className="text">${params.row.cap}</div>
				</div>
			);
		},
	},
	{
		field: "volume",
		headerName: "Volume (24h)",
		flex: 1,
		renderCell: (params: GridRenderCellParams) => {
			return (
				<div className="grid-cell-new">
					<div className="text">
						${params.row.volume}
						<div className="secondary-small">
							{params.row.volumec} {params.row.abr}
						</div>
					</div>
				</div>
			);
		},
	},
	{
		field: "circulting",
		headerName: "Circulating S.",
		minWidth: 150,
		flex: 1,
		renderCell: (params: GridRenderCellParams) => {
			return (
				<div className="grid-cell-new">
					<div className="text">
						<div className="accent">
							{params.row.circulating} {params.row.abr}
						</div>
					</div>
				</div>
			);
		},
	},
];

const rows = [
	{
		id: 1,
		name: "Bitcoin",
		image: bitcoin,
		abr: "BTC",
		price: "21,890.67",
		h1: "- 0.01",
		h24: "0.90",
		d7: "6.40",
		cap: "422,259,223,046",
		volume: "14,336,368,187",
		volumec: "700.975",
		circulating: "19,288,581",
	},
	{
		id: 2,
		name: "Tron",
		image: tron,
		abr: "TRX",
		price: "0.0256",
		h1: "2.36",
		h24: "- 4.10",
		d7: "8.79",
		cap: "150,459,113",
		volume: "6,789,352",
		volumec: "297,543",
		circulating: "5,888,987",
	},
	{
		id: 3,
		name: "Tether",
		image: tether,
		abr: "USDT",
		price: "1.00",
		h1: "- 0.03",
		h24: "0.02",
		d7: "0.06",
		cap: "62,431,322,995",
		volume: "95,342,120,987",
		volumec: "93,543,623",
		circulating: "62,412,548,983",
	},
	// Add more rows for other cryptocurrencies
	{
		id: 4,
		name: "Ethereum",
		image: ethereum,
		abr: "ETH",
		price: "1,900.25",
		h1: "- 0.89",
		h24: "1.23",
		d7: "5.78",
		cap: "250,438,562,987",
		volume: "18,736,298,365",
		volumec: "4,598.28",
		circulating: "131,238,765",
	},
	{
		id: 5,
		name: "Graph",
		image: graph,
		abr: "GRT",
		price: "0.897",
		h1: "1.45",
		h24: "- 3.79",
		d7: "9.12",
		cap: "84,234,789",
		volume: "3,298,475",
		volumec: "5,754",
		circulating: "93,567,908",
	},
	{
		id: 6,
		name: "BNB",
		image: bnb,
		abr: "BNB",
		price: "298.45",
		h1: "- 0.21",
		h24: "2.78",
		d7: "3.45",
		cap: "34,219,734,567",
		volume: "1,934,678,345",
		volumec: "438,798",
		circulating: "113,782,123",
	},
];

export default function Table() {
	return (
		<div className={styles.container}>
			<div className="grid-container">
				<DataGrid
					sx={{ border: "none", color: "#dedede", width: "930px" }}
					rows={rows}
					rowHeight={58}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 6,
							},
						},
					}}
					pageSizeOptions={[6]}
					disableRowSelectionOnClick
				/>
			</div>
		</div>
	);
}
