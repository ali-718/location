import React, { Component } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Logo from "./images/maxresdefault.jpg";

export default class Login extends Component {
  state = {
    Firstname: "",
    Surname: "",
    Username: "",
    Password: "",
    Passport: ""
  };

  Register = () => {
    const FirstName =
      this.state.Firstname !== "" ? this.state.Firstname.trim() : "";
    const Surname = this.state.Surname !== "" ? this.state.Surname.trim() : "";
    const Username =
      this.state.Username !== "" ? this.state.Username.trim() : "";
    const Password =
      this.state.Password !== "" ? this.state.Password.trim() : "";
    const Passport =
      this.state.Passport !== "" ? this.state.Passport.trim() : "";

    if (
      FirstName === "" ||
      Surname === "" ||
      Username === "" ||
      Password === "" ||
      Passport === ""
    ) {
      alert("Kindly fill all fields");
    } else {
      var PermissionFirstName = false;
      var PermissionSurName = false;
      var PermissionUserName = false;
      var PermissionPassowrd = false;
      var PermissionPassport = false;

      const SplittedFirstname = FirstName.split("");
      SplittedFirstname.map(item => {
        if (
          item === "{" ||
          item === "}" ||
          item === "[" ||
          item === "]" ||
          item === "=" ||
          item === "+" ||
          item === "(" ||
          item === ")" ||
          item === "-" ||
          item === "_" ||
          item === "|" ||
          item === "/" ||
          item === "." ||
          item === ","
        ) {
          alert(`Firstname must be string only no Splecial characters allowed`);
        } else {
          PermissionFirstName = true;
        }
      });

      const SplittedSurname = Surname.split("");
      SplittedSurname.map(item => {
        if (
          item === "{" ||
          item === "}" ||
          item === "[" ||
          item === "]" ||
          item === "=" ||
          item === "+" ||
          item === "(" ||
          item === ")" ||
          item === "-" ||
          item === "_" ||
          item === "|" ||
          item === "/" ||
          item === "." ||
          item === ","
        ) {
          alert(`Surname must be string only no Splecial characters allowed`);
        } else {
          PermissionSurName = true;
        }
      });

      const SplittedUsername = Username.split("");

      if (SplittedUsername.length > 8) {
        SplittedUsername.map(item => {
          if (
            item === "{" ||
            item === "}" ||
            item === "[" ||
            item === "]" ||
            item === "=" ||
            item === "+" ||
            item === "(" ||
            item === ")" ||
            item === "-" ||
            item === "_" ||
            item === "|" ||
            item === "/" ||
            item === "." ||
            item === ","
          ) {
            alert(
              `Username must be string only no Splecial characters allowed`
            );
          } else {
            PermissionUserName = true;
          }
        });
      } else {
        alert("Username must be atleast 8 characters long");
      }

      const SplittedPassword = Password.split("");

      if (SplittedPassword.length > 8) {
        SplittedUsername.map(item => {
          if (!isNaN(item)) {
            console.log("it is working");
          } else {
            alert("password must be alphanumeric");
          }
          if (item !== "'" || item !== '"' || item !== "," || item !== ".") {
            alert(`Password must contain one special character`);
          } else {
            PermissionPassowrd = true;
          }
        });
      } else {
        alert("Username must be atleast 8 characters long");
      }

      const SplittedPassport = Passport.split("");

      if (SplittedPassport.length > 8) {
        SplittedPassport.map(item => {
          if (
            item === "{" ||
            item === "}" ||
            item === "[" ||
            item === "]" ||
            item === "=" ||
            item === "+" ||
            item === "(" ||
            item === ")" ||
            item === "-" ||
            item === "_" ||
            item === "|" ||
            item === "/" ||
            item === "." ||
            item === ","
          ) {
            alert(`Passport must not contain any Splecial characters allowed`);
          } else {
            PermissionPassport = true;
          }
        });
      } else {
        alert("Passport Number must be atleast 8 characters long");
      }
    }

    if (
      PermissionFirstName === true &&
      PermissionSurName === true &&
      PermissionUserName === true &&
      PermissionPassowrd === true &&
      PermissionPassport === true
    ) {
      alert("data saved successfully");
    }
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image source={Logo} style={{ width: "100%", height: 150 }} />
        <View style={{ width: "100%", marginTop: 50, alignItems: "center" }}>
          <TextInput
            onChangeText={val => {
              this.setState({ Firstname: val });
            }}
            value={this.state.Email}
            style={{
              borderWidth: 1,
              width: "80%",
              borderRadius: 5,
              backgroundColor: "rgba(220,220,220,0.3)",
              marginTop: 10,
              height: 50,
              fontSize: 20,
              paddingLeft: 10
            }}
            placeholder="Firstname"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            onChangeText={val => {
              this.setState({ Surname: val });
            }}
            value={this.state.Email}
            style={{
              borderWidth: 1,
              width: "80%",
              borderRadius: 5,
              backgroundColor: "rgba(220,220,220,0.3)",
              marginTop: 10,
              height: 50,
              fontSize: 20,
              paddingLeft: 10
            }}
            placeholder="Surname"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            onChangeText={val => {
              this.setState({ Username: val });
            }}
            value={this.state.Email}
            style={{
              borderWidth: 1,
              width: "80%",
              borderRadius: 5,
              backgroundColor: "rgba(220,220,220,0.3)",
              marginTop: 10,
              height: 50,
              fontSize: 20,
              paddingLeft: 10
            }}
            placeholder="Username"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            onChangeText={val => {
              this.setState({ Password: val });
            }}
            value={this.state.Email}
            style={{
              borderWidth: 1,
              width: "80%",
              borderRadius: 5,
              backgroundColor: "rgba(220,220,220,0.3)",
              marginTop: 10,
              height: 50,
              fontSize: 20,
              paddingLeft: 10
            }}
            placeholder="Password"
            placeholderTextColor="#A9A9A9"
          />
          <TextInput
            onChangeText={val => {
              this.setState({ Passport: val });
            }}
            value={this.state.Email}
            style={{
              borderWidth: 1,
              width: "80%",
              borderRadius: 5,
              backgroundColor: "rgba(220,220,220,0.3)",
              marginTop: 10,
              height: 50,
              fontSize: 20,
              paddingLeft: 10
            }}
            placeholder="Passport Number"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <View style={{ marginTop: 20, width: "100%", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => this.Register()}
            style={{
              backgroundColor: "#3498F1",
              width: "80%",
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
