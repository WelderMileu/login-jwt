import React from 'react'
import { FaPlus} from 'react-icons/fa'
import { 
	Grid12, 
	Text, 
	BtnLogin, 
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
				<BtnLogin style={{
					backgroundColor:'#FFFFFF',
					color:'#63FF70',
					width: '128px',
					border: '1px solid #63FF70',
					boxShadow: '0px 0px 0px black',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<FaPlus style={{ marginRight: '5px' }}/> Add
				</BtnLogin>
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
			</TableUsersInfo>
		</Grid12>
	)
}

export default TableUsers;
