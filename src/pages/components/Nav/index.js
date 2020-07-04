import React from 'react';
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'gatsby';

import { 
	Text, 
	Grid12, 
	BtnSignIn, 
	ViewSignIn,
	IconAdmin 
} from '../../style'


const Nav = () => {
	return (
		
		<Grid12 style={{
			backgroundColor:'#2F2E41',
			height: '71px',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
		}}>
			<IconAdmin>
				<FaUserCircle style={{ fontSize:'40px', marginRight: '10px' }}/>
				<Text style={{ fontSize: '1.2rem', color: '#FFFFFF' }}>Usuario Admin</Text>
			</IconAdmin>

			<ViewSignIn>
				<Link to="/">
					<BtnSignIn>
						SignIn
					</BtnSignIn>
				</Link>
			</ViewSignIn>
		</Grid12>
		
	)
}

export default Nav;
