import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

export default function Dashboard() {
    const { user } = useContext(UserContext)

    const capitalizeLetter = (data) => {
        return data[0].toUpperCase() + data.slice(1)
    }
    return (
        <div>
            {!!user && (<h2>Hi {capitalizeLetter(user.name)}!</h2>)}
        </div>
    )
}
