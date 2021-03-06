import 'mocha';
import { expect } from 'chai';
import { bitrix24VerifySign } from './index';

describe('Verify sign', () => {
    it('should be return object {sign: true, state: \'123456\'}', () => {
        const data = {
            member_id: 'ef4a6c2c25c2aca2dc6a05d93b950d8d',
            secret_id: 'MY7KfVucXPjTHv7XlXOtkynoQ3NCRjOz2BM6SjcBaWwr54i4gP',
            signature: 'eyJJRCI6IjEiLCJFTUFJTCI6ImFzdGFzaGtpbmF2QGdtYWlsLmNvbSIsIk5BTUUiOiJcdTA0MTBcdTA0M2JcdTA0MzVcdTA0M2FcdTA0NDFcdTA0MzBcdTA0M2RcdTA0MzRcdTA0NDAiLCJzdGF0ZSI6IjEyMzQ1NiJ9.j75GjLjjDVEP3q1ZjSv6y+oG1DQcINX7TtPjJsrPrpc='
        };
        const result = bitrix24VerifySign(data);
        const expected = {
            sign: true,
            state: '123456'
        };
        expect(result.sign).to.equal(expected.sign);
        expect(result.state).to.equal(expected.state);
    });
});