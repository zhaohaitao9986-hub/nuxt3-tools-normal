import zlib from 'node:zlib';
import { promisify } from 'node:util';

const brotliCompress = promisify(zlib.brotliCompress);
export default defineNitroPlugin((nitro) => {
  // 创建Brotli压缩
  const brotliOptions = {
    params: {
      [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT, // 模式
      [zlib.constants.BROTLI_PARAM_QUALITY]: 4,
    }
  }
  nitro.hooks.hook('render:response', async (response, { event }) => {
    if (typeof response.headers === 'object' && JSON.stringify(response.headers)?.includes('text/html')) {
      const compressedBody = await brotliCompress(Buffer.from(response.body, 'utf-8'), brotliOptions);
      setHeader(event, 'Content-Encoding', 'br');
      send(event, compressedBody);
    }
  })
})