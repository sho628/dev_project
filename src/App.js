import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // API 호출을 수행하는 함수
    const fetchData = async () => {
      try {
        const response = await axios.get('http://15.164.253.191:3000/auth');

        // 응답 데이터를 responseData state에 저장
        setResponseData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // responseData에 데이터가 있을 경우 출력
  return (
    <div>
      {responseData ? (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;