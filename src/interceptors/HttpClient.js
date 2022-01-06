import axios from 'axios';

import errorInterceptor from "./error";
import updateHeaderInterceptor from "./updateHeader";
const httpClient = axios.create({
baseURL: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
});
errorInterceptor(httpClient);
// updateHeaderInterceptor(httpClient);
export default httpClient;