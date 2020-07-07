import React from 'react'
import { FaPlus} from 'react-icons/fa'
import { 
	Grid12, 
	Text,
	ContainerTable, 
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
			</TableUsersInfo>

			<ContainerTable>
				<TableUsersInfo style={{
					position: 'relative',
					marginTop: '0px',
					width: '100%'
				}}>
					<TableUsersDados>
						<td>32</td>
						<td>Antonio</td>
						<td>e344552</td>
					</TableUsersDados>
					<TableUsersDados>
						<td>72</td>
						<td>Marina</td>
						<td>221p21@</td>
					</TableUsersDados>
					<TableUsersDados>
						<td>98</td>
						<td>Fabio</td>
						<td>09w2o1</td>
					</TableUsersDados>
					<TableUsersDados>
						<td>102</td>
						<td>Carlos</td>
						<td>P721sd</td>
					</TableUsersDados>
					<TableUsersDados>
						<td>122</td>
						<td>Silva</td>
						<td>a921j</td>
					</TableUsersDados>
					<TableUsersDados>
						<td>135</td>
						<td>Samuel</td>
						<td>0002ow3</td>
					</TableUsersDados>
					<TableUsersDados>
						<td>183</td>
						<td>Felipe</td>
						<td>w21%ds</td>
					</TableUsersDados>
					<TableUsersDados>
						<td>201</td>
						<td>Camila</td>
						<td>943b72a</td>
					</TableUsersDados>
				</TableUsersInfo>
			</ContainerTable>
		</Grid12>
	)
}

export default TableUsers;
