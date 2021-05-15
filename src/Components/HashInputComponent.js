import React from 'react';
import { connect } from 'react-redux';
import { hash } from '../Actions/HashInputAction.js';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import '../CSS/HashInputCSS.css';

const mapStateToProps = state => {
	return {
		hash_ob : state
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: () => dispatch(hash(document.getElementById("hash_type").options[document.getElementById("hash_type").selectedIndex].value,
			document.getElementById("hash_text").value))
    }
}

class HashInputComponent extends React.Component {
	render() {
		const { onSubmit } = this.props;
		return (
			<Box mt={10}>
				<Grid container spacing={0} alignItems="center" >
					<Grid item xs={6} >
						<select className="drop_down" name="hash_type" id="hash_type">
							<option value="md5">md5</option>
							<option value="sha1">sha1</option>
							<option value="sha3">sha3</option>
							<option value="sha224">sha224</option>
							<option value="sha256">sha256</option>
							<option value="sha384">sha384</option>
							<option value="sha512">sha512</option>
							<option value="ripemd160">ripemd160</option>
						</select>
						
					</Grid>		
					<Grid item xs={6}>
						<button className="gen_button" onClick={onSubmit}>Generate</button>
					</Grid>	
					<Grid item xs={12}>
						<textarea className="hash_input" type="text" id="hash_text" autoFocus/>
					</Grid>
				</Grid>
		  	</Box>
			
			
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HashInputComponent);