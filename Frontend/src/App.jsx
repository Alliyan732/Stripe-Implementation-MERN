import React, {useState, useEffect} from 'react';
import { getTestData } from './api/testApi';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    getApiData();
  },[])

  const getApiData = async () => {
    try {
      const response = await getTestData();
      setData(response.message)
    } catch (error) {
      console.log(error)
    }
  }

  return <h1 className="text-3xl font-bold underline text-center mt-10">Response from backend: {data}</h1>;
}

export default App;
