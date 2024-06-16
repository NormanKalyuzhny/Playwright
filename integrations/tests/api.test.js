import { test, expect, request } from '@playwright/test';
import ApiUtils from '../api/apiUtils';

test.describe('Perform POST request using Playwright', async () => {
    const apiUtils = new ApiUtils()
    test('creat user', async()=>{
        await apiUtils.apiGenAcc()
        
    })

    
});