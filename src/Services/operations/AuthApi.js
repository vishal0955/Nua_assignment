import { toast } from "react-toast";
import { setLoading, setToken } from "../../Slices/AuthSlice";
import { apiConnector } from "../Connector";
import { AuthEndpoints } from "../APIS";


const {  LOGIN_API } = AuthEndpoints;



export function login(data) {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const response = await apiConnector("POST", LOGIN_API, data);
            if (!response.data.success) throw new Error(response.data.message);
            toast("Login Successfull");
            dispatch(setLoading(false));
            dispatch(setToken(response.data.data.token));
            localStorage.setItem("auth", response.data.data.token);
            return true;
        } catch (error) {
            toast.error(error.response.data.message);
            dispatch(setLoading(false));
            return false;
        }
    }
};


 
 