import React from 'react'
import { FaPlus} from 'react-icons/fa'
import { 
	Grid12, 
	Text, 
	BtnAdd, 
	TableTitle, 
	TableUsersInfo,
	TableUsersTitle,
	TableUsersDados
} from '../../style'

const TableUsers = () => {
	return (
		<Grid12>
			<TableTitle>
				<Text style={{ fontSize: '24px', fontWeight: '500', color:'#7F818C' }}>
					Page Users
				</Text>
				<BtnAdd>
					<FaPlus style={{ marginRight: '5px' }}/> Add
				</BtnAdd>
			</TableTitle>
			<TableUsersInfo>
				<TableUsersTitle>
					<td>ID</td>
					<td>Usuario</td>
					<td>Senha</td>
				</TableUsersTitle>
				<TableUsersDados>
					<td>ID</td>
					<td>Usuario</td>
					<td>Senha</td>
				</TableUsersDados>
				<TableUsersDados>
					<td>ID</td>
					<td>Usuario</td>
					<td>Senha</td>
				</TableUsersDados>
				<TableUsersDados>
					<td>ID</td>
					<td>Usuario</td>
					<td>Senha</td>
				</TableUsersDados>
				<TableUsersDados>
					<td>ID</td>
					<td>Usuario</td>
					<td>Senha</td>
				</TableUsersDados>
				<TableUsersDados>
					<td>ID</td>
					<td>Usuario</td>
					<td>Senha</td>
				</TableUsersDados>
			</TableUsersInfo>
		</Grid12>
	)
}

export default TableUsers;
