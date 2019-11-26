import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class AccountPage extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <View>
            <Image
              source={{
                uri: "https://picsum.photos/id/893/200/300"
              }}
              style={{
                width: hp("15%"),
                height: hp("15%"),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column"
            }}
          >
            <Text> </Text>
            <Text style={styles.text}>Welcome back,</Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: hp("3%"),
                marginLeft: 20
              }}
            >
              Jimmy Scott
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 50
          }}
        >
          <View
            style={{
              borderBottom: 10,
              borderBottomWidth: 2,
              borderColor: "#4F4F4F",
              marginLeft: hp("-1%"),
              width: hp("17.5%"),
              height: hp("8%")
            }}
          >
            <Text
              style={{
                color: "#4F4F4F",
                marginBottom: 10
              }}
            >
              First Name
            </Text>
            <Text
              style={{
                color: "#4F4F4F"
              }}
            >
              Jimmy
            </Text>
          </View>
          <View
            style={{
              borderBottom: 20,
              borderBottomWidth: 2,
              borderColor: "#4F4F4F",
              marginLeft: hp("10%"),
              width: hp("17.2%"),
              height: hp("8%")
            }}
          >
            <Text
              style={{
                color: "#4F4F4F",
                marginBottom: 10
              }}
            >
              Last Name
            </Text>
            <Text
              style={{
                color: "#4F4F4F"
              }}
            >
              Scott
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottom: 20,
            borderBottomWidth: 2,
            borderColor: "#4F4F4F",
            marginTop: 30,
            marginRight: hp("1%"),
            width: hp("45%"),
            height: hp("8%")
          }}
        >
          <Text
            style={{
              color: "#4F4F4F",
              marginBottom: 10
            }}
          >
            Phone
          </Text>
          <Text
            style={{
              color: "#4F4F4F"
            }}
          >
            (603) 554-233
          </Text>
        </View>
        <View
          style={{
            borderBottom: 20,
            borderBottomWidth: 2,
            borderColor: "#4F4F4F",
            marginTop: 30,
            marginRight: hp("1%"),
            width: hp("45%"),
            height: hp("8%")
          }}
        >
          <Text
            style={{
              color: "#4F4F4F",
              marginBottom: 10
            }}
          >
            Email
          </Text>
          <Text
            style={{
              color: "#4F4F4F"
            }}
          >
            JimmyS@gmail.com
          </Text>
        </View>
        <View
          style={{
            borderBottom: 20,
            borderBottomWidth: 2,
            borderColor: "#4F4F4F",
            marginTop: 30,
            marginRight: hp("1%"),
            width: hp("45%"),
            height: hp("8%")
          }}
        >
          <Text
            style={{
              color: "#4F4F4F",
              marginBottom: 10
            }}
          >
            Address
          </Text>
          <Text
            style={{
              color: "#4F4F4F"
            }}
          >
            555 Seymour St
          </Text>
        </View>
        <View
          style={{
            borderBottom: 20,
            borderBottomWidth: 2,
            borderColor: "#4F4F4F",
            marginTop: 30,
            marginRight: hp("1%"),
            width: hp("45%"),
            height: hp("8%")
          }}
        >
          <Text
            style={{
              color: "#4F4F4F",
              marginBottom: 10
            }}
          >
            City
          </Text>
          <Text
            style={{
              color: "#4F4F4F"
            }}
          >
            Vancouver
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: hp("3%"),
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 20
  }
});

export default AccountPage;
