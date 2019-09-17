import React from "react";
import MapView from "react-native-maps";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ width: "100%", flex: 1 }}>
        <MapView
          style={{ width: "100%", height: 200 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    );
  }
}
