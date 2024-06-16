import { test } from '../fixtures/garagePageFixture';
import {expect} from '@playwright/test'

test.only('basic test', async ({garagePage}) => {  
    expect(await garagePage.btnLogOut.isVisible()).toBeTruthy();
});