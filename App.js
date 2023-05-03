import { useState ,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react-native'

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => { 
      setCounter((t) => t + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (counter === 10) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  }, [counter]);

  return (
    <View style={{flex:1,justifyContent:'center',
    alignContent :'center'}}>
     <Text style={{ 
         color: counter % 2 === 0 ? 'green' : 'red'}}>
         Counter : {counter}
      </Text>
    </View>
  );
}
