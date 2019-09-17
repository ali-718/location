import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, Button, Platform } from "react-native";
// import { MapView } from "expo";
import MapView, { Marker } from "react-native-maps";

export default class App extends Component {
  state = {
    mapRegion: {
      latitude: 24.919373,
      longitude: 67.092838,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  location = () => {
    // navigator.geolocation.watchPosition(res => console.log(res.coords));
    navigator.geolocation.getCurrentPosition(
      res => {
        console.log(res);
        this.setState({
          mapRegion: {
            ...res.coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
        });
      },
      e => console.log(e)
    );
  };

  render() {
    return (
      <SafeAreaView
        style={{
          width: "100%",
          flex: 1,
          marginTop: Platform.OS == "android" ? 25 : 0
        }}
      >
        <MapView
          showsUserLocation={true}
          style={{ width: "100%", flex: 1 }}
          region={this.state.mapRegion}
          showsMyLocationButton={true}
          showsBuildings
          showsIndoors
          showsCompass
        >
          <Marker coordinate={this.state.mapRegion} />
        </MapView>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button title="Get Your Location" onPress={() => this.location()} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#ecf0f1"
  }
});
