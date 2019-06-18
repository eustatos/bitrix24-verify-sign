# bitrix24-verify-sign
[![npm version](http://img.shields.io/npm/v/bitrix24-verify-sing.svg?style=flat)](https://npmjs.org/package/bitrix24-verify-sign "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/bitrix24-verify-sing.svg?style=flat)](https://npmjs.org/package/bitrix24-verify-sign "View this project on npm")
[![Build Status](https://travis-ci.org/eustatos/bitrix24-verify-sign.svg?branch=master)](https://travis-ci.org/eustatos/bitrix24-verify-sign)
[![codecov](https://codecov.io/gh/eustatos/bitrix24-verify-sign/branch/master/graph/badge.svg)](https://codecov.io/gh/eustatos/bitrix24-verify-sign)



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
    member_id: <member_id>,
    secret_id: <secret_id>,
    signature: <signature>
};
console.log( bitrix24VerifySign(data) );
```
