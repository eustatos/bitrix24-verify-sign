# bitrix24-verify-sign
[![npm version](http://img.shields.io/npm/v/bitrix24-verify-signature.svg?style=flat)](https://npmjs.org/package/bitrix24-verify-signature "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/bitrix24-verify-signature.svg?style=flat)](https://npmjs.org/package/bitrix24-verify-signature "View this project on npm")
[![Build Status](https://travis-ci.org/eustatos/bitrix24-verify-sign.svg?branch=master)](https://travis-ci.org/eustatos/bitrix24-verify-sign)
[![codecov](https://codecov.io/gh/eustatos/bitrix24-verify-sign/branch/master/graph/badge.svg)](https://codecov.io/gh/eustatos/bitrix24-verify-sign)


A this function verify signature for Bitrix24 application. 
[Read more...](https://training.bitrix24.com/rest_help/rest_sum/security.php)


## Install

```bash
npm i -S bitrix24-verify-signature
```
If you use `yarn`
```bash 
yarn add bitrix24-verify-signature
```

## Usage
```javascript
import {bitrix24VerifySign} from 'bitrix24-verify-signature';

const data = {
    member_id: 'ef4a6c2c25c2aca2dc6a05d93b950d8d',
    secret_id: 'MY7KfVucXPjTHv7XlXOtkynoQ3NCRjOz2BM6SjcBaWwr54i4gP',
    signature: 'eyJJRCI6IjEiLCJFTUFJTCI6ImFzdGFzaGtpbmF2QGdtYWlsLmNvbSIsIk5BTUUiOiJcdTA0MTBcdTA0M2JcdTA0MzVcdTA0M2FcdTA0NDFcdTA0MzBcdTA0M2RcdTA0MzRcdTA0NDAiLCJzdGF0ZSI6IjEyMzQ1NiJ9.j75GjLjjDVEP3q1ZjSv6y+oG1DQcINX7TtPjJsrPrpc='
};
console.log( bitrix24VerifySign(data) ); // {sign: true, state: "123456"}
```
## CDN

```html
<script src="https://unpkg.com/bitrix24-verify-signature@latest/lib/index.js"></script>
<script>
const data = {
    member_id: 'ef4a6c2c25c2aca2dc6a05d93b950d8d',
    secret_id: 'MY7KfVucXPjTHv7XlXOtkynoQ3NCRjOz2BM6SjcBaWwr54i4gP',
    signature: 'eyJJRCI6IjEiLCJFTUFJTCI6ImFzdGFzaGtpbmF2QGdtYWlsLmNvbSIsIk5BTUUiOiJcdTA0MTBcdTA0M2JcdTA0MzVcdTA0M2FcdTA0NDFcdTA0MzBcdTA0M2RcdTA0MzRcdTA0NDAiLCJzdGF0ZSI6IjEyMzQ1NiJ9.j75GjLjjDVEP3q1ZjSv6y+oG1DQcINX7TtPjJsrPrpc='
};
console.log( bitrix24VerifySign(data) ); // {sign: true, state: "123456"}
</script>