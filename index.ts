import { decodeMetadata } from './utils'
import { createReadStream, createWriteStream } from 'fs';
import { parse } from 'JSONStream'
import { pipeline } from "stream/promises"

const inputFile = '../../aws/ddb-onchain-metadata/metadata.json';
const outputFile = '../../aws/ddb-onchain-metadata/metadata.data';

async function getNft() {
	try {
		await pipeline(
			createReadStream(inputFile, { encoding: 'utf8' }),
			parse(['result', true], (res) => JSON.stringify(decodeMetadata(Buffer.from(res?.account?.data[0], 'base64'))) + '\n'),
			createWriteStream(outputFile, { encoding: 'utf8' })
		)

		console.log('Done!');
	} catch (e) {
		console.log(e)
	}
}

getNft()
