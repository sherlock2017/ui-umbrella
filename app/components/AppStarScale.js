import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import AppStar from "./AppStar";
import DefaultStyles from "../configs/Styles";
import { setStatusBarStyle } from "expo-status-bar";

function AppRatingsScale({ totalPoints = 2, ratings, size, ...otherProps }) {
  const [point, setPoint] = useState(0);
  const [rating, setRating] = useState([]);
  const [originalRatings, setOriginalRatings] = useState([]);
  const [elementArray, setElementArray] = useState([]);
  useEffect(() => {
    let starsArray = [];
    for (let x = 1; x <= totalPoints; x++)
      starsArray.push({
        id: Math.floor(Math.random() * 100 + 1),
        point: 0,
      });
    console.log(starsArray);
    setRating(starsArray);
    setOriginalRatings(starsArray);
  }, []);

  const handleClick = (rate) => {
    const point = rate.point;
    if (point == 0) {
      let index = rating.indexOf(rate);
      let newStars = [...originalRatings];
      for (let y = index; y >= 0; y--) {
        y == index
          ? (newStars[y] = { id: y, point: 0.5 })
          : (newStars[y] = { id: y, point: 1 });
      }
      setRating(newStars);
      calculateRatings(newStars);
    }
    if (point == 0.5) {
      let index = rating.indexOf(rate);
      let newStars = [...originalRatings];
      for (let y = index; y >= 0; y--) {
        newStars[y] = { id: y, point: 1 };
      }
      setRating(newStars);
      calculateRatings(newStars);
    }
    if (point == 1) {
      let index = rating.indexOf(rate);
      let newStars = [...originalRatings];
      for (let y = 0; y <= index - 1; y++) {
        newStars[y] = { id: y, point: 1 };
      }
      setRating(newStars);
      calculateRatings(newStars);
    }
  };

  const calculateRatings = (newRatings) => {
    let finalRating = 0;
    for (let z = 0; z < rating.length; z++) {
      finalRating += newRatings[z].point;
    }
    ratings(finalRating);
  };

  const handlePoint = () => {
    if (point == 0) setPoint(0.5);
    if (point == 0.5) setPoint(1);
    if (point == 1) setPoint(0);
  };

  return (
    <View style={[{ height: size }]} {...otherProps}>
      <FlatList
        horizontal={true}
        data={rating}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppStar
            point={item.point}
            size={size}
            onPress={() => handleClick(item)}
          />
        )}
      />
    </View>
  );
}

export default AppRatingsScale;

const styles = StyleSheet.create({});
