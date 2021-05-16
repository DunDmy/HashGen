import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { hash_file, rest_file } from '../Actions/HashFileAction.js';
import Grid from '@material-ui/core/Grid';
import '../CSS/FileSelectorCSS.css';

const mapStateToProps = state => {
    return {
        hash_ob: state["updateFile"]
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onFileChange: event => dispatch(hash_file(document.getElementById("hash_type_file").options[document.getElementById("hash_type_file").selectedIndex].value, 
        event.target.files[0])),
        resetFile: () => dispatch(rest_file)
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
                    <p>File Size: {Math.round(this.props.hash_ob["file_info"]["size"] / 1024)} Kilobytes</p>
                    <p>
                        Last Modified:{" "}
                        {this.props.hash_ob["file_info"]["lastModifiedDate"].toDateString()}
                    </p>
                </div>
            );
        } 
    };

    fileChangedHandler = (event) => {
        // no file has been passed
        if(event.target.files[0] === undefined){
            return 0;
        }
        let file_size = event.target.files[0].size;
        // clear text when file is uploaded
        document.getElementById("hash_text").value = "";
        // check file size
        if(file_size > 10485760){
            this.props.resetFile();
            return alert("File is too large!");      
        }else{
            this.props.onFileChange(event)
        }
    };
    
    render() {
        return (
            <Grid container spacing={0} container spacing={0} justify="center"
            alignItems="center">
                <Grid item xs={12} >
                    <span>Please select the hash algorithm </span>
                    <select className="drop_down_file" name="hash_type_file" id="hash_type_file" >
                        <option value="md5">md5</option>
                        <option value="sha1">sha1</option>
                        <option value="sha3">sha3</option>
                        <option value="sha224">sha224</option>
                        <option value="sha256">sha256</option>
                        <option value="sha384">sha384</option>
                        <option value="sha512">sha512</option>
                        <option value="ripemd160">ripemd160</option>
                    </select>
                    <span> and then choose a file (less than 10MB) </span>
                    <input name="input_file" id="input_file" type="file" onChange={this.fileChangedHandler}/>
                    {this.fileData()}
                </Grid>
            </Grid>
            
        );
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(FileSelectorComponent);