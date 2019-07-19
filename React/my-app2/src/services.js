import NetworkHelpers from "./helpers/NetworkHelpers";
import apiUrl from "./configs";
export const getAllBook = () => {
 return NetworkHelpers.getApi(apiUrl + "search?query=redux");
};
