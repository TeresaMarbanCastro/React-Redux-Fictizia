/* useEffect se ejecuta siempre que se renderiza algo (cuandos se cambia el estado y
 cuando se cambian las props)

 el array vacío de componentDidmount tiene un array vacío para pasarle lo que queremos
 por ejemplo data... y lo que hace es que sólo se ejecute la primera vez (no cada vez 
 que haya un cambio).

 componentDidUpdate no le pasamos nada porque queremos que se ejecute siempre

 willUnmount, la única diferencia es hacer un return al final del useEffect y le pasamos 
 también [] para que no se ejecute cien mil veces. 

 cada vez que creamos un hook, que empiece por use. --> buenas prácticas


*/

import React, {useState, useEffect, Suspense } from 'react'

// function ChangeLetters(){
//     // const [input, changeAforO] = useState('a')
//     const [ inputValue, changeAforO ] = useState('texto');
//     const changeAforO = (letter) => {
//         return letter === 'a'
//         ? 'o'
//         : letter
//     }

//     useEffect(() => changeAforO(inputValue), [ inputValue ])

//     return (
//         <>
//             <input type="text" onChange={() => changeAforO(inputValue === 'a' ? 'o' : inputValue)}></input>
//             <p>{inputValue}</p>
//         </>
//     )
// }



// function ChangeLetters() {
//   const [value, setValue] = useState('ddd');

//   return (
//     <div>
//       <p>{value}</p>
//       <input type="text" onChange={(value) => setValue(value === 'a' ? 'o' : value)}>
//       </input>
//     </div>
//   );
// }


// export default ChangeLetters


// function useCallAPI(url) {
//     const [data, setData] = useState([])
    

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json)
//         .then (data => setData(data))
//     }, []);


//     return (
//         <div>{JSON.stringify(data)}</div>
//     )
// }

//   export default useCallAPI





const Input = React.lazy(() => import('../components2/Input'));
function Hooks() {
    return (
        <div>
            <Suspense fallback={<div>Loading</div>}>
                <Input />
            </Suspense>
        </div>
    )
}

export default Hooks
