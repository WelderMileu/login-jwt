import React from 'react';
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'gatsby';

import { View, Text, Grid12, BtnSignIn } from '../../style'


const Nav = () => {
	return (
		
		<Grid12 style={{
			backgroundColor:'#63FF70',
			height: '71px',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
		}}>
			<Text style={{ 
				color:'#FFFFFF',
				gridColumn: '2', 
				position: 'absolute',
				top: '12px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<FaUserCircle style={{ fontSize:'40px', marginRight: '10px' }}/>
				<Text style={{ fontSize: '1.2rem', color: '#FFFFFF' }}>Usuario Admin</Text>
			</Text>

			<View style={{
					position: 'absolute',
					top: '12px',
					gridColumn: '11'
			}}>
				<Link to="/">
					<BtnSignIn>
						SignIn
					</BtnSignIn>
				</Link>
			</View>
		</Grid12>
		
	)
}

export default Nav;
