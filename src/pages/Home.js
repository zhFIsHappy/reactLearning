import { useContext } from "react";
import {AppContext} from '../App'
import {useQuery} from '@tanstack/react-query'
import Axios from 'axios';
export const Home =(props) =>{
    // const {data} = useQuery(queryKey : ["cat"], () => {
    //     Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    // });
    // replacing the "data" name
    const { data : catData, isLoading, isError, refetch } = useQuery({
    queryKey: ['cat'],
    queryFn: () =>
      Axios.get("https://catfact.ninja/fact").then((res) => res.data),
    })
    if(isLoading) {
        return <h1>Loading</h1>
    }
    if(isError){
        return <h1>Sry, there's a error</h1>
    }
    return <h1>This is Home Page <p> {catData?.fact}</p>
    <button onClick = {refetch}> Update Data</button>
     </h1>
} 