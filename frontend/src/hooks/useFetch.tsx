// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const useFetch = (url: string) => {
//   const [apiData, setApiData] = useState<unknown>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [severError, setSeverError] = useState<unknown>(null);

//   useEffect(() => {
//     setIsLoading(true);

//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url);
//         const data = response?.data;

//         setApiData(data);
//       } catch (error: unknown) {
//         setSeverError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { apiData, isLoading, severError };
// };

// export default useFetch;
