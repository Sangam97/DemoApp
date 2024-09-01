import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const Dashboard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Generate random data for the chart
    const generateRandomData = () => {
      const randomData = Array.from({length: 6}, () =>
        Math.floor(Math.random() * 100),
      );
      setUserData(randomData);
    };

    generateRandomData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 20}}>
        Dashboard
      </Text>
      <BarChart
        data={{
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          datasets: [
            {
              data: userData, // display generated random data
            },
          ],
        }}
        width={Dimensions.get('window').width - 16} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=" users"
        yAxisInterval={1} // set this to adjust the interval between grid lines
        fromZero={true} // ensures the graph starts from zero
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // orange fill color
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForBackgroundLines: {
            strokeDasharray: '', // solid background lines with no dashes
            stroke: '#e0e0e0', // color for the background lines
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Dashboard;
