var CryptoJS = require("crypto-js");

const setHashField = (data) => ({
    type: 'SUBMIT',
    payload: data
})

export const hash = (hash_type, hash_text) => {

    var hash_obj = {
        type: "",
        hash_value: ""
    }

    var hash_value = '';
    var type = '';

    if (hash_type === 'md5' && hash_text !== '') {
        hash_value = CryptoJS.MD5(hash_text).toString();
        type = hash_type.toUpperCase() + " HASH: ";
    } else if (hash_type === 'sha1' && hash_text !== '') {
        hash_value = CryptoJS.SHA1(hash_text).toString();
        type = hash_type.toUpperCase() + " HASH: ";
    } else if (hash_type === 'sha3' && hash_text !== '') {
        hash_value = CryptoJS.SHA3(hash_text).toString();
        type = hash_type.toUpperCase() + " HASH: ";
    } else if (hash_type === 'sha224' && hash_text !== '') {
        hash_value = CryptoJS.SHA224(hash_text).toString();
        type = hash_type.toUpperCase() + " HASH: ";
    } else if (hash_type === 'sha256' && hash_text !== '') {
        hash_value = CryptoJS.SHA256(hash_text).toString();
        type = hash_type.toUpperCase() + " HASH: ";
    } else if (hash_type === 'sha384' && hash_text !== '') {
        hash_value = CryptoJS.SHA384(hash_text).toString();
        type = hash_type.toUpperCase() + " HASH: ";
    } else if (hash_type === 'sha512' && hash_text !== '') {
        hash_value = CryptoJS.SHA512(hash_text).toString();
        type = hash_type.toUpperCase() + " HASH: ";
    } else if (hash_type === 'ripemd160' && hash_text !== '') {
        hash_value = CryptoJS.RIPEMD160(hash_text).toString();
        type = hash_type.toUpperCase() + " HASH: ";
    }

    hash_obj["type"] = type;
    hash_obj["hash_value"] = hash_value;

    return dispatch => {
        if(hash_obj["hash_value"] !== ''){
            dispatch(setHashField(hash_obj));
        }
    }
}