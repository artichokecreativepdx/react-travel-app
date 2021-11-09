import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('http://127.0.0.1:8000/dataset');
        setData(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};
  export default useFetchData;