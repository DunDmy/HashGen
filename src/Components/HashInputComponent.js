import React from 'react';
import { connect } from 'react-redux';
import { hash } from '../Actions/HashInputAction.js';
import '../CSS/HashInputCSS.css';

const mapStateToProps = state => {
	return {
		hash_ob : state
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (hash_type, hash_text) => dispatch(hash(document.getElementById("hash_type").options[document.getElementById("hash_type").selectedIndex].value,
			document.getElementById("hash_text").value))
    }
}

class HashInputComponent extends React.Component {
	render() {
		const { onSubmit } = this.props;
		return (
			<div className = "HashInputComponent">
				<div>
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
					<button className="gen_button" onClick={onSubmit}>Generate</button>
				</div>
				<div>
					<textarea className="hash_input" type="text" id="hash_text" autoFocus/>
				</div>
			</div>	
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HashInputComponent);