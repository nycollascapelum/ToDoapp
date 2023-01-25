import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ListItem({ data, handleLeft, handleRight }) {
  function LeftActions(progress, dragX) {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.leftAction}>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
          Concluir
        </Animated.Text>
      </View>
    );
  }

  function RightActions({progress, dragX, onPress}) {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rightAction}>
          <Animated.Text
            style={[styles.actionText, { transform: [{ scale }] }]}
          >
            Excluir
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderLeftActions={LeftActions}
        onSwipeableLeftOpen={handleLeft}
        renderRightActions={
          (progress, dragX)=> <RightActions progress={progress} dragX={dragX} onPress={handleRight}/>
        }
      >
        <View style={styles.container}>
          <Text style={styles.text}>{data.tarefa}</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    fontSize: 17,
    color: "#222",
  },
  leftAction: {
    backgroundColor: "#388E3C",
    justifyContent: "center",
    flex: 1,
  },
  rightAction: {
    backgroundColor: "#FF0000",
    justifyContent: "center",
  },
  actionText: {
    fontSize: 17,
    color: "#FFF",
    padding: 20,
  },
});
