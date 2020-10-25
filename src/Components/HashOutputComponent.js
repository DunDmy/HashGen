import React from 'react';
import { connect } from 'react-redux';
import '../CSS/HashOutputCSS.css';

const mapStateToProps = state => {
	return {
		hash_text: state.updateHash.hash_value,
		type_text: state.updateHash.hash_type,
		hash_file: state.updateFile.hash_value,
		type_file: state.updateFile.hash_type,
		file_vis: state.updateFile.info_vis
	}
}

class HashOutputComponent extends React.Component {
	render() {
		const { hash_text, type_text, hash_file, type_file, file_vis } = this.props;
		if (file_vis === false) {
			return (
				<div className="HashOutputComponent">
					<p className="hash_title">{type_text}</p>
					<p className="hash_return">{hash_text}</p>
				</div>
			);
		} else {
			return (
				<div className="HashOutputComponent">
					<p className="hash_title">{type_file}</p>
					<p className="hash_return">{hash_file}</p>
				</div>
			);
        }
		
	}
}

export default connect(mapStateToProps)(HashOutputComponent);