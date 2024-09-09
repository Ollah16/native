import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  icon: React.ReactElement; // Expecting SVG component
  color: string;
  name: string;
  focused: boolean;
}

const TabBarIcon: React.FC<Props> = ({ icon, color, name }) => {
  const IconWithColor = React.cloneElement(icon, { color });

  return (
    <View style={styles.container}>
      {IconWithColor}
      <Text style={[styles.text, { color }]}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3,
  },
  text: {
    textDecorationLine: 'none',
    fontSize: 12,
    marginTop: 5,
  },
});

export default TabBarIcon;
