import { test} from "@playwright/test";

test('/auth/login/email', async ({ page, context, baseURL, request }) => {

    // const response = await request.post(`https://calday-stage.herokuapp.com/api/v1/auth/login/email`, {data:{
    //         "email": "yuriigospodaryshyn+5@gmail.com",
    //         "password": "123456"
    //     }     });
    // await expect(response.status()).toEqual(200)
    //
    // const responseBody = JSON.parse(await response.text())
    console.log('Workflow is working')
    console.log('test')
});