import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../constants/Colors";

import loginStyles from './login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontalView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  alertMgs: {
    fontFamily: "biennale-regular",
    textAlign: 'center',
    color: Colors.alertColor,
    fontWeight: 'bold',
    fontSize: RFValue(14),
    marginBottom: RFValue(5)
  },
});



export { loginStyles, styles };