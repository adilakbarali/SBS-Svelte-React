import React, { useState } from 'react';
import JsCrypto from "jscrypto";

const Encrypter = () => {

    const [dataEncryption, setDataEncryption] = useState("");
    const [encMethod, setEncMethod] = useState(0);
    const [outputEncryption, setOutputEncryption] = useState("");
    const [cypher, setCypher] = useState("AES");
    const [dataDecryption, setDataDecryption] = useState("");
    const [outputDecryption, setOutputDecryption] = useState("");

    function changeMethod(mode){
        setEncMethod(mode)
        if(mode == 0){
            setCypher("AES");
        }
        else if(mode == 1){
            setCypher("DES");
        }
        encryptData();
    }

    function updateData(e){
        setDataEncryption(e.target.value);
        encryptData(e.target.value);
    }

    function encryptData(input){
        if(encMethod === 0){
            setOutputEncryption(JsCrypto.AES.encrypt(input, "extraterrestrial").toString());
        }
        else if(encMethod === 1){
            setOutputEncryption(JsCrypto.DES.encrypt(input, "extraterrestrial").toString());
        }
    }

    function decrypt(){
        if(encMethod === 0){
            setOutputDecryption(JsCrypto.AES.decrypt(dataDecryption, "extraterrestrial").toString(JsCrypto.Utf8));
        }
        else if(encMethod === 1){
            setOutputDecryption(JsCrypto.DES.decrypt(dataDecryption, "extraterrestrial").toString(JsCrypto.Utf8));

        }
    }

    function updateDataDecryption(e){
        setDataDecryption(e.target.value);
    }

    return (
        <div>
            <button onClick={() => changeMethod(0)}>AES</button>
            <button onClick={() => changeMethod(1)}>DES</button>
            <input id='input' value={dataEncryption} onChange={updateData} />
            <label for='input'> Encryption Method: {cypher}</label>
            <p>Your Data: {dataEncryption}</p>
            <p>Encrypted value: {outputEncryption}</p>
            <br></br>
            <input value={dataDecryption} onChange={updateDataDecryption}></input>
            <button onClick={() => decrypt()}>Decrypt! (uses above cypher method)</button>
            <p>Decrypted data: {outputDecryption}</p>
        </div>
    );
};

export default Encrypter;