import {useMemo, useState} from "react";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {MainContent} from "../components/MainContent";
import samplesGame from "../api/samplesGame";

export default function Home(){
    const [totalGames,setTotalGames]=useState(0);
    const [games, setGames] = useState([]);

    const fetchData = async () => {
        const response = await samplesGame.get("/samples");
        setGames(response.data.games_list)
        setTotalGames(response.data.games_list.length)
    };

    const addTodo = useMemo(() => {
        fetchData()
    }, []);
    return (
        <>
        <div>
            <Header/>
            <MainContent games={games}/>
            <Footer totalGames={totalGames}/>
        </div>
        </>
    )
}