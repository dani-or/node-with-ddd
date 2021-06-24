
import { expect } from 'chai';
import { getCreditService } from '../../../../src/useCases/credit/getCredit';
import { Credit } from '../../../../src/entities/Credit';

describe('getCredit', () => {
    it('getCredit success', async() => {        
        const credit: Credit = await getCreditService.execute({"debenture":"87100001189","customerId":"CC-1026755666"});
        expect(credit.value).to.equal(100000);       
    });
});