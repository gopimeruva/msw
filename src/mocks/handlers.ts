import { http, HttpResponse, HttpResponseInit, JsonBodyType } from 'msw';
import{ directReports } from './mockdata';



const status200Response: HttpResponseInit ={ 
  status: 200,
  statusText: 'ok',
}

const status500Response: HttpResponseInit ={ 
  status: 500,
  statusText: 'ok',
}
// Define the handler for the GET /employees/:managerId endpoint
// export const handlers = [
//   http.get<never, never, 'hello world'>(
//     '/resource',
//     withDelay(250, ({ request }) => {
//       // The "ResponseBodyType" generic type provided
//       // to the "http.get()" request handler propagates
//       // through the custom "withDelay" response resolver.
//       return HttpResponse.text('hello world')
//     })
//   ),
// ]
export const handlers =[
  http.get ('app.ts', () =>{ 
    return HttpResponse.json(directReports, status200Response)}),
];
