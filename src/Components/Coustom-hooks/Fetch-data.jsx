import useFetch from "./useFetch";

const FetchData = () => {
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
        </div>
    )

}
export default FetchData;