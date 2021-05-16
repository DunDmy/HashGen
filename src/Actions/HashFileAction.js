var CryptoJS = require("crypto-js");


const setHashFile = (data) => ({
    type: 'UPLOAD',
    payload: data
})

const setResetFile = (data) => ({
    type: 'RESET',
    payload: data
})

export const rest_file = (dispatch) =>{
    return dispatch(setResetFile('RESET'));
}

export const hash_file = (hash_type, file) => {
    return function (dispatch) {

        var reader = new FileReader();

        var hash_obj = {
            type: "",
            hash_value: "",
            file_info: {
                name: '',
                size: '',
                type: '',
                lastModifiedDate: ''
            }
        }

        var hash_value = '';
        var type = '';
        var text = '';
        
        if (hash_type === 'md5') {
            console.log(file);
            reader.onloadend = function () {
                text = (reader.result);
                hash_value = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(text));
                type = hash_type.toUpperCase() + " HASH: ";
                hash_obj = action_dispatch_builder(type, hash_value.toString(), hash_obj, file);
                dispatch(setHashFile(hash_obj));
            }

            if( file !== undefined ){
                reader.readAsBinaryString(file);
            }

        } else if (hash_type === 'sha1') {
            reader.onloadend = function () {
                text = (reader.result);
                hash_value = CryptoJS.SHA1(CryptoJS.enc.Latin1.parse(text));
                type = hash_type.toUpperCase() + " HASH: ";
                hash_obj = action_dispatch_builder(type, hash_value.toString(), hash_obj, file);
                dispatch(setHashFile(hash_obj));
            }

            if( file !== undefined ){
                reader.readAsBinaryString(file);
            }

        } else if (hash_type === 'sha3') {
            reader.onloadend = function () {
                text = (reader.result);
                hash_value = CryptoJS.SHA3(CryptoJS.enc.Latin1.parse(text));
                type = hash_type.toUpperCase() + " HASH: ";
                hash_obj = action_dispatch_builder(type, hash_value.toString(), hash_obj, file);
                dispatch(setHashFile(hash_obj));
            }

            if( file !== undefined ){
                reader.readAsBinaryString(file);
            }

        } else if (hash_type === 'sha224') {
            reader.onloadend = function () {
                text = (reader.result);
                hash_value = CryptoJS.SHA224(CryptoJS.enc.Latin1.parse(text));
                type = hash_type.toUpperCase() + " HASH: ";
                hash_obj = action_dispatch_builder(type, hash_value.toString(), hash_obj, file);
                dispatch(setHashFile(hash_obj));
            }

            if( file !== undefined ){
                reader.readAsBinaryString(file);
            }

        } else if (hash_type === 'sha256') {
            reader.onloadend = function () {
                text = (reader.result);
                hash_value = CryptoJS.SHA256(CryptoJS.enc.Latin1.parse(text));
                type = hash_type.toUpperCase() + " HASH: ";
                hash_obj = action_dispatch_builder(type, hash_value.toString(), hash_obj, file);
                dispatch(setHashFile(hash_obj));
            }

            if( file !== undefined ){
                reader.readAsBinaryString(file);
            }

        } else if (hash_type === 'sha384') {
            reader.onloadend = function () {
                text = (reader.result);
                hash_value = CryptoJS.SHA384(CryptoJS.enc.Latin1.parse(text));
                type = hash_type.toUpperCase() + " HASH: ";
                hash_obj = action_dispatch_builder(type, hash_value.toString(), hash_obj, file);
                dispatch(setHashFile(hash_obj));
            }

            if( file !== undefined ){
                reader.readAsBinaryString(file);
            }


        } else if (hash_type === 'sha512') {
            reader.onloadend = function () {
                text = (reader.result);
                hash_value = CryptoJS.SHA512(CryptoJS.enc.Latin1.parse(text));
                type = hash_type.toUpperCase() + " HASH: ";
                hash_obj = action_dispatch_builder(type, hash_value.toString(), hash_obj, file);
                dispatch(setHashFile(hash_obj));
            }

            if( file !== undefined ){
                reader.readAsBinaryString(file);
            }

        } else if (hash_type === 'ripemd160') {
            reader.onloadend = function () {
                text = (reader.result);
                hash_value = CryptoJS.RIPEMD160(CryptoJS.enc.Latin1.parse(text));
                type = hash_type.toUpperCase() + " HASH: ";
                hash_obj = action_dispatch_builder(type, hash_value.toString(), hash_obj, file);
                dispatch(setHashFile(hash_obj));
            }

            if( file !== undefined ){
                reader.readAsBinaryString(file);
            }

        }

    }
    
}


function action_dispatch_builder(type, hash_value, hash_obj, file) {
    hash_obj["type"] = type;
    hash_obj["hash_value"] = hash_value;
    hash_obj["file_info"]["name"] = file["name"];
    hash_obj["file_info"]["size"] = Math.round(file["size"]  / 1024);
    hash_obj["file_info"]["type"] = file["type"];
    // used to handle the erro on the iOS
    if(file["lastModifiedDate"]  === undefined){
        hash_obj["file_info"]["lastModifiedDate"] = "no date available";
    }else{
        hash_obj["file_info"]["lastModifiedDate"] = file["lastModifiedDate"].toDateString();
    }
    return hash_obj;
}

