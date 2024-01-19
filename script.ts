#!/usr/bin/env -S node --loader @swc-node/register/esm
import p from './package.json' assert { type: 'json' }

console.log(p)
