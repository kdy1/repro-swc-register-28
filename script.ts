#!/usr/bin/env -S SWCRC=1 node --loader @swc-node/register/esm
import p from './package.json' with { type: 'json' }

console.log(p)
