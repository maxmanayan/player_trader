import axios from "axios"
import { useEffect, useState } from "react"

const Players = () => {
    const [players, setPlayers] = useState([])

    const getTeams = async () => {
        try {
            let res = await axios.get('/api/all_players')
            setPlayers(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getTeams()
    },[])

    const renderAllPlayers = () => {
        return players.map( player => {
            return(
                <div>
                    <h1>All Players List</h1>
                </div>
            )
        })
    }

    return (
    <h1>All players</h1>
    )
}

export default Players