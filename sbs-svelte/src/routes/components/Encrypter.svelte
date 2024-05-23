<script>

    import JsCrypto from "jscrypto";

    let dataEncryption = "";
    let outputEncryption = "";
    let encMethod = 0;
    let cypher = "AES";
    let dataDecryption = "";
    let outputDecryption = "";

    function changeMethod(mode){
        encMethod = mode;
        if(mode == 0){
            cypher = "AES";
        }
        else if(mode == 1){
            cypher = "DES";
        }
        encryptData();
    }

    $: if (dataEncryption == ""){
        outputEncryption = "";
    }
    else{
        encryptData();
    }

    function encryptData(){
        if(encMethod === 0){
            outputEncryption = JsCrypto.AES.encrypt(dataEncryption, "extraterrestrial").toString(); 
        }
        else if(encMethod === 1){
            outputEncryption = JsCrypto.DES.encrypt(dataEncryption, "extraterrestrial").toString();
        }
    }

    function decrypt(){
        if(encMethod === 0){
            outputDecryption = JsCrypto.AES.decrypt(dataDecryption, "extraterrestrial").toString(JsCrypto.Utf8);
        }
        else if(encMethod === 1){
            outputDecryption =JsCrypto.DES.decrypt(dataDecryption, "extraterrestrial").toString(JsCrypto.Utf8);
        }
    }

</script>

<div>
    <button on:click={() => changeMethod(0)}>AES</button>
    <button on:click={() => changeMethod(1)}>DES</button>
    <input id='input' type="string" bind:value={dataEncryption}/>
    <label for='input'> Encryption Method: {cypher}</label>
    <p>Your Data: {dataEncryption}</p>
    <p>Encrypted value: {outputEncryption}</p>
    <br>
    <input type ="string" bind:value={dataDecryption} />
    <button on:click={() => decrypt()}>Decrypt! (uses above cypher method)</button>
    <p>Decrypted data: {outputDecryption}</p>
</div>