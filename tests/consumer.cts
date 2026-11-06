import * as api from '@lp-labs/common-word-prefix';
import { commonWordPrefix } from '@lp-labs/common-word-prefix';
console.log(commonWordPrefix(['interview', 'internet', 'internal']));
// @ts-expect-error invalid argument must be rejected by declarations
api.commonWordPrefix('words');
