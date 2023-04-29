import { ChangeEvent, FC, useState } from "react";
import { IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


interface ListenerType {
	id: number,
	name: string,
	visit_count: number,
	lastest_visit: string
}

const Header: FC = () => {
	return (
		<div style={{
			width: "100%",
			backgroundColor: "white",
		}}>
			<h1
				style={{
					paddingLeft: "20px",
					backgroundColor: "#8df724ab"
				}}>来場者管理</h1>
		</div>
	)
}

const MainPage: FC = () => {
	const initData: ListenerType[] = [
		{ id: 1, name: "John Doe", visit_count: 1, lastest_visit: "" },
		{ id: 2, name: "Jane Doe", visit_count: 1, lastest_visit: "" },
		{ id: 3, name: "Bob Smith", visit_count: 1, lastest_visit: "" },
		{ id: 4, name: "Alice Johnson", visit_count: 1, lastest_visit: "" },
	];

	const [data, setData] = useState(initData);

	const addListener = (event: any) => {
		if (event.keyCode !== 13) return;
		const name = event.target.value;
		const newListener: ListenerType = {
			id: data.length + 1,
			name,
			visit_count: 1,
			lastest_visit: ""
		}
		const temp = [...data]
		temp.push(newListener)
		setData(temp)
	}

	const addVisitCount = (id: number) => {
		const temp = [...data]
		const found = temp.find((el) => el.id === id)
		if (found == null) return;
		found.visit_count = found.visit_count + 1
		setData(temp)
	}

	return (
		<>
			<Header />
			<Stack spacing={2} style={{ margin: "0 30px" }}>
				<Stack direction="row" spacing={2}>
					<TextField label="新規追加" variant="outlined" onKeyDown={(event) => addListener(event)} />
					<TextField label="検索" variant="outlined" />
				</Stack>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell style={{ width: "20px" }}>ID</TableCell>
							<TableCell style={{ width: "200px" }} align="left">名前</TableCell>
							<TableCell align="left">来場回数</TableCell>
							<TableCell align="left" />
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((item) => (
							<TableRow key={item.id}>
								<TableCell component="th" scope="row">
									{item.id}
								</TableCell>
								<TableCell align="left">{item.name}</TableCell>
								<TableCell align="left">{item.visit_count}</TableCell>
								<TableCell align="left">
									<IconButton onClick={() => addVisitCount(item.id)}>
										<AddIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Stack>
		</>
	);
}

export default MainPage;
