import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const DetallePoke = () => {
    const [image, setImage] = useState([]);
    const [stats, setStats] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const getAPI = async () => {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const datos = await resp.json();
            if (resp && datos) {
                setImage(datos.sprites.other["official-artwork"].front_default)
                setStats(datos.stats)
            }
        }
        getAPI()
    }, [name])

    return (
        <div className="container2">
            <Card.Img variant="bottom" src={image} alt="" />
            <Card style={{ width: '18rem' }}>
                <Card.Body> <h3>{name} </h3></Card.Body>
                <ul>{stats.map((s) => (
                    <li key={s.stat.name}>{s.stat.name}: {s.base_stat}</li>
                ))}
                </ul>
            </Card>
        </div>
    )
}

export default DetallePoke