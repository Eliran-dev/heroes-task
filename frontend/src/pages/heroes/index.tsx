import React, {useState, useEffect} from 'react'
import GetHeroes from './getHeroes'
//import GetHeroes from './getHeroes';

interface Hero extends Document {
    readonly userEmail: String;
    readonly ability: String;
    readonly id:Number;
    readonly creationDate: Date;
    readonly suitColors: String[];
    readonly startingPower: Number;
    readonly currentPower: Number;
}

 const Heroes = () => {
    const [heroes, setHeroes] = useState<Array<Hero>>([])


     //GetHeroes().then(data => {data != heroes ? setHeroes(data): console.log("same")})
     console.log(GetHeroes())
    return (
        <div>
            {/* {
                heroes.map((hero) => (
                    <div>
                        <h1>
                            {"hero.creationDate"}
                        </h1>
                        </div>
                ))
            } */}
            
        </div>
    )
}


export default Heroes;