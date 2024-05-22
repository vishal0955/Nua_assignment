import { toast } from "react-toast";
import { setLoading, setBookData } from "../../Slices/BookSlice";
import { apiConnector } from "../Connector";
import { BookEndpoint } from "../APIS";

const {GET_BOOKS} = BookEndpoint


// export function login(data) {
//     return async (dispatch) => {
//         try {
//             dispatch(setLoading(true));
//             const response = await apiConnector("POST", LOGIN_API, data);
//             if (!response.data.success) throw new Error(response.data.message);
//             toast("Login Successfull");
//             dispatch(setLoading(false));
//             dispatch(setToken(response.data.data.token));
//             localStorage.setItem("auth", response.data.data.token);
//             return true;
//         } catch (error) {
//             toast.error(error.response.data.message);
//             dispatch(setLoading(false));
//             return false;
//         }
//     }
// };

export function getBooks() {
    return async(dispatch) => {
        try {
            dispatch(setLoading(true));
            const response = await apiConnector("GET", GET_BOOKS);
            console.log('response: ', response);
            dispatch(setLoading(false));
            dispatch(setBookData(response));
            return true;
        } catch (error) {
            toast.error(error);
            dispatch(setLoading(false));
            return false;
        }
    }
}
 
 