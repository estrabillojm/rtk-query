import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  fetchUsers } from '../redux/reducers/userSlice'
import { useGetCharmanderQuery, useGetPokemonByNameQuery } from "../redux/services/pokemon";

const Home = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.users.counter)
    const users = useSelector(state => state.users.users)

    const { data:pokemon ,error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    const { data:charmander ,error:charError, isLoading:charLoading } = useGetCharmanderQuery('charmander')

    console.log("ASHHSASHKJJKFDSA", pokemon)
    console.log("char", charmander)



    return ( 
        <div>
            {charLoading && <h2>Loading Please Wait</h2>}
            {
            charmander && !charLoading && <h3>{charmander.id}</h3>
            }
            <button onClick={() => dispatch(fetchUsers()) }>Increment</button>
        </div>
     );
}
 
export default Home;