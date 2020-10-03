import * as JWT from "jsonwebtoken";
import * as HTTPS from "https";
import { IncomingMessage } from "http";
import { ifError } from "assert";


/**
 * 
 * @param token API Token
 */
export async function Authenticate( token: string, callback?:( res: IncomingMessage )=>{} ): Promise<void>{
	const authOptions = {
		hostname: "comfy.auth.na-ka.us",
		port: 8080,
		path: "/",
		method: "GET"
	}

	const p = new Promise(( resolve: ( res:IncomingMessage )=>void, reject: ()=>void )=>{
		HTTPS.request( authOptions, ( res: IncomingMessage )=>{
			console.warn( res );
			if(callback){
				callback( res );
			}
			resolve( res );
		});
	});

	const res = await p;

	console.log(res);
}