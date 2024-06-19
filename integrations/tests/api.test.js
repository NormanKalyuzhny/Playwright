import { test, expect, request } from '@playwright/test';

test.describe('Api tests', async () => {
    let apiContext;
    test.beforeAll(async ()=>{
        apiContext = await request.newContext({
            baseURL: 'https://qauto2.forstudy.space/',
        })
    }) 
    test('Homework 1 - api route', async({page})=>{
        const responseData = {
            "status": "ok",
            "data": {
                "userId": 30000,
                "photoFilename": "default-user.png",
                "name": "Spiritu",
                "lastName": "Interiore"
            }
        }       
        await page.route('https://qauto2.forstudy.space/api/users/profile', (route) => 
            route.fulfill({
                contentType: 'application/json',
                body: JSON.stringify(responseData)
            })
        )
        expect(responseData.status).toBe('ok')
    })
    test('Homework 2 - add car', async({page})=>{
        await test.step('Positive add car', async()=>{
            const response = await apiContext.post('api/cars', {
                data: {
                    carBrandId: 1,
                    carModelId: 1,
                    mileage: 122
                }
            });
            expect(response._initializer.status).toBe(201)
        })
        await test.step('Negative - invalid url', async()=>{
            const response = await apiContext.post('api/car', {
                data: {
                    carBrandId: 1,
                    carModelId: 1,
                    mileage: 122
                }
            });
            expect(response._initializer.status).toBe(404)
        })
        await test.step('Negative - invalid data', async()=>{
            const response = await apiContext.post('api/cars', {
                data: {   
                    carModelId: 1,
                    mileage: 122
                }
            });
            expect(response._initializer.status).toBe(400)
        })
    })
});