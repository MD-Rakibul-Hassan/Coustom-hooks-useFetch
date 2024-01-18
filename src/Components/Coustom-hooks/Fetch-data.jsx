import useFetch from "./useFetch";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FetchData = () => {
    const handleClick = () => {
        toast("Hello world!")
    }
    const {data,error,isLoding} = useFetch ('https://jsonplaceholder.typicode.com/photos');

    const isLoginData = isLoding && <p>Please wait some moment</p>;
    const isError = error && <h1>{error}</h1>;
    return (
        <div>
            {
                isError
            }
            {
                isLoginData 
            }
            {
                data && data.map((item) => console.log(item))
            }
            <button onClick={handleClick}>Add Data</button>
            <ToastContainer />
        </div>
    )

}
export default FetchData;