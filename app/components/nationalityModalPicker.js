import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

//* icon
import Icon from "react-native-ico-flags";

const NATIONS = ["MX", "US", "CO", "BR", "AR"];
const NATIONALITY = [
  "Mexico",
  "United States of America",
  "Colombia",
  "Brazil",
  "Argentina",
];
const ICONS = [
  "mexico",
  "united-states-of-america",
  "colombia",
  "brazil",
  "argentina",
];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function NationalityModalPicker(props) {
  const onPressItem = (optionSelected) => {
    let icon = "";
    let nation = "";
    switch (optionSelected) {
      case "Mexico":
        icon = "mexico";
        nation = NATIONS[0];
        break;
      case "United States of America":
        icon = "united-states-of-america";
        nation = NATIONS[1];
        break;
      case "Colombia":
        icon = "colombia";
        nation = NATIONS[2];

        break;
      case "Brazil":
        icon = "brazil";
        nation = NATIONS[3];

        break;
      case "Argentina":
        icon = "argentina";
        nation = NATIONS[4];
    }
    props.setData(nation, icon);
    props.changeModalVisibility(false);
  };

  const options = NATIONALITY.map((nation, index) => {
    return (
      <View key={index}>
        <View style={styles.separator} />
        <TouchableOpacity
          style={styles.option}
          onPress={() => onPressItem(nation)}
        >
          <Icon name={ICONS[index]} />
          <Text style={styles.text}>{nation}</Text>
        </TouchableOpacity>
      </View>
    );
  });
  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={styles.modal}>
        <ScrollView>
          <View style={{ alignItems: "center", marginBottom: 25 }}>
            <Text style={styles.heading}>Countries</Text>
          </View>
          {options}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  modal: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "dodgerblue",
    borderRadius: 18,
    width: WIDTH - 20,
    height: HEIGHT * 0.4,
  },
  option: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 25,
  },
  separator: {
    backgroundColor: "#fffa",
    marginBottom: 5,
    marginLeft: 25,
    height: 1,
    width: WIDTH - 70,
  },
  text: {
    marginBottom: 20,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "normal",
  },
});
