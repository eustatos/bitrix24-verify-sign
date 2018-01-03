# bitrix24-verify-sign
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/bitrix24-verify-sing)
[![Build Status](https://travis-ci.org/eustatos/bitrix24-verify-sign.svg?branch=master)](https://travis-ci.org/eustatos/bitrix24-verify-sign)
[![codecov](https://codecov.io/gh/eustatos/bitrix24-verify-sign/branch/master/graph/badge.svg)](https://codecov.io/gh/eustatos/bitrix24-verify-sign)

## Install

```bash
npm i -S bitrix24-verify-sign
```
If you use `yarn`
```bash 
yarn add bitrix24-verify-sign
```

## Usage
```javascript
import {bitrix24VerifySign} from '../src/index';

const data = {
    member_id: <member_id>,
    secret_id: <secret_id>,
    signature: <signature>
};
console.log( bitrix24VerifySign(data) );
```
