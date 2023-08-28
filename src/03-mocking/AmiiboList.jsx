import {useContext, useEffect, useState} from "react";
import AmiiboApiContext from "./AmiiboApiContext";

export default function AmiiboList() {
    const [amiibos, setAmiibos] = useState({})
    const [error, setError] = useState(false)
    const apiClient = useContext(AmiiboApiContext)

    useEffect(() => {
        apiClient.getAllAmiibos().then(r => {
            setAmiibos(r.data);
            setError(r.error)
        })
    }, []);

    return (
        <>
            {error ? <span>Error fetching data!</span> :
                (amiibos?.amiibo ? amiibos.amiibo.map((amiibo) => {
                return (
                    <div key={amiibo.tail}>
                        {amiibo.gameSeries} - {amiibo.name}
                    </div>
                )
            }) : "Loading....")}

        </>
    )
}