import { IncomingMessage } from "http";

declare module "comfy"{
	function Authenticate( token: string, callback?: (res: IncomingMessage)=>void ): Promise<void>;	
}