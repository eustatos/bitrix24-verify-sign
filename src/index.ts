import {
    createHash,
    createHmac
} from 'crypto';
export function bitrix24VerifySign(data) {
    const arr = data.signature.split('.');
    const password = createHash('md5')
    .update(
        data.member_id + data.secret_id,
        'utf8'
    )
    .digest('hex');
    const buff = new Buffer(arr[0], 'base64');
    const reqBody = JSON.parse(buff.toString('utf8'));
    // calculate hash at first part signature;
    const hash = createHmac('sha256', password)
    .update(arr[0], 'utf8')
    .digest('base64');
    return {
        sign: (arr[1] === hash),
        state: reqBody.state
    };
}