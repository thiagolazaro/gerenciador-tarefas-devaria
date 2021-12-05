import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../constants/Colors";

export default loginStyles = StyleSheet.create({
  form: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: RFValue(30),
    width: RFValue(196),
    resizeMode: "contain",
  },
  icone: {
    marginTop: RFValue(-18),
    marginRight: RFValue(10),
    width: RFValue(20),
    resizeMode: "contain",
  },
  inputView: {
    padding: RFValue(10),
  },
  input: {
    display: "flex",
    width: RFValue(240),
    marginBottom: RFValue(12),
    fontSize: RFValue(16),
    fontFamily: "biennale-regular",
    alignItems: "center",
    letterSpacing: RFValue(0.01),
    color: colors.primaryColor,
    borderRadius: 0,
    paddingBottom: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: colors.mediumGreyColor,
    borderBottomWidth: RFValue(1),
  },
  button: {
    marginTop: RFValue(12),
    width: RFValue(272),
    height: RFValue(56),
    backgroundColor: colors.primaryColor,
    borderRadius: RFValue(12),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.lightGreyColor,
    fontSize: RFValue(16),
    fontFamily: "biennale-regular",
    fontWeight: "bold",
  }
});
