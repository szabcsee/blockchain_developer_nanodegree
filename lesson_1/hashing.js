import sha256 from 'crypto-js/sha256.js';
import hmacSHA512 from 'crypto-js/hmac-sha512.js';

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
};

/**
 * Step 3: Add code to the `generate hash function
 * Function that generates the SHA256 Hash
 * @param {*} obj 
 */

function generateHash(obj) {
	return sha256(JSON.stringify(obj))
}
console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);