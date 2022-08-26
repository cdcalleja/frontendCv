// import { useEffect, useState } from "react";
// import axios from "axios";


// const useAxios = async () => {
        
// const [data, setData] = useState([]);

//     useEffect(() => {
//         axios("http://localhost:3080/experiencias/ver").then(res => {
//             setData(res.data)
//             console.log(res.data)
//         })
//     }, [])

//     return {data}
// }

// export default useAxios

// export function useAxios(url) {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios(url)
//         .then(res => setData(res.data))
//     }, [])
// }


// export function useAxios(url) {
//     const [data, setData] = useState([]);
    
//   useEffect(() => {
//     axios(url)
//       .then(res => setData(res.data))
//   }, []);
//   return {data};
// };