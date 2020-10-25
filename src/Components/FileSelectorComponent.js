import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { hash_file } from '../Actions/HashFileAction.js';
import '../CSS/FileSelectorCSS.css';
import { updateFile } from '../Reducers/HashFileReducer.js';


const mapStateToProps = state => {
    return {
        hash_ob: state["updateFile"]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFileChange: event => dispatch(hash_file(document.getElementById("hash_type_file").options[document.getElementById("hash_type_file").selectedIndex].value, event.target.files[0]))
    }
}


class FileSelectorComponent extends Component {

    // File content to be displayed after 
    // file upload is complete 
    fileData = () => {    
        if (this.props.hash_ob["info_vis"] === true) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.props.hash_ob["file_info"]["name"]}</p>
                    <p>File Type: {this.props.hash_ob["file_info"]["type"]}</p>
                    <p>
                        Last Modified:{" "}
                        {this.props.hash_ob["file_info"]["lastModifiedDate"].toDateString()}
                    </p>
                </div>
            );
        } 
    };

    render() {
        const { onFileChange } = this.props;
        return (
            <div>
                <div>
                    <span>Please select the hash algorithm </span>
                    <select className="drop_down_file" name="hash_type_file" id="hash_type_file">
                        <option value="md5">md5</option>
                        <option value="sha1">sha1</option>
                        <option value="sha3">sha3</option>
                        <option value="sha224">sha224</option>
                        <option value="sha256">sha256</option>
                        <option value="sha384">sha384</option>
                        <option value="sha512">sha512</option>
                        <option value="ripemd160">ripemd160</option>
                    </select>
                    <span> and then choose a file </span>
                    <input type="file" onChange={onFileChange} />
                </div>
                {this.fileData()}
            </div>
        );
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(FileSelectorComponent);