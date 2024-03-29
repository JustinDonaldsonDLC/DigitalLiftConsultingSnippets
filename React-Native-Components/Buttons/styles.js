export const styles = StyleSheet.create({
    viewContainer: {
        //Here for customization purposes
    },
    ModalXBtn: {
      width: 40,
      height: 40,
    },
    viewContainerTight: {
      maxWidth: 30,
      maxHeight: 30,
      margin: 2,
      paddingTop: 3,
    },
    imageBtnView: {
  
  
    },
    imageBtnContainer: {
      width: 30,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderRadius: 4,
      backgroundColor: colorPallette.button_edit,
    },
    saveImageBtnContainer: {
      width: 30,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderRadius: 4,
      backgroundColor: colorPallette.button_add,
    },
    confirmIconContainer: {
      width: 30,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderRadius: 4,
      backgroundColor: colorPallette.primary_white,
    },
    cancelBtnIconContainer: {
      width: 30,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      padding: 3,
      borderRadius: 4,
      backgroundColor: colorPallette.primary_white,
      borderColor: colorPallette.button_delete,
      borderWidth: 2,
    },
    containerDelete: {
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderRadius: 4,
      backgroundColor: colorPallette.button_delete,
    },
    containerDeleteTextBtn: {
      minWidth: 100,
      minHeight: 30,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderRadius: 4,
      backgroundColor: colorPallette.button_delete,
    },
    containerCustomTextBtn: {
      minWidth: 100,
      minHeight: 30,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderRadius: 4,
      backgroundColor: colorPallette.button_edit,
    },
    hoverCustom: {
      backgroundColor: colorPallette.highlight_edit,
    },
    hoverDelete: {
      backgroundColor: colorPallette.highlight_delete,
    },
    containerCancel: {
      minWidth: 100,
      minHeight: 30,
      alignItems: "center",
      justifyContent: "center",
      padding: 3,
      borderRadius: 4,
      backgroundColor: colorPallette.primary_white,
      borderColor: colorPallette.button_delete,
      borderWidth: 2,
    },
    hoverCancel: {
      borderColor: colorPallette.highlight_delete,
      borderWidth: 3,
      padding: 2,
    },
    cancelText: {
      fontSize: Platform.OS == "web" ? 15 : scale(15),
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: colorPallette.button_delete,
      textAlign: "center",
      padding: 5,
    },
    containerAdd: {
      minWidth: 100,
      minHeight: 30,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderRadius: 4,
      backgroundColor: colorPallette.button_add,
    },
    hoverAdd: {
      backgroundColor: colorPallette.highlight_add,
    },
    containerEdit: {
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderRadius: 4,
      backgroundColor: colorPallette.button_edit,
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      borderRadius: 4,
      backgroundColor: colorPallette.button_edit,
    },
    containerTight: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      backgroundColor: "#1ecfea",
      padding: 4,
    },
    buttonText: {
      fontSize: Platform.OS == "web" ? 15 : scale(15),
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: colorPallette.primary_white,
      textAlign: "center",
      padding: 5,
    },
    image: {
      width: 20,
      height: 20,
    },
  });

export const CheckboxStyles = StyleSheet.create({
    viewContainer: {
        maxWidth: 30,
        maxHeight: 30,
        margin: 10,
    },
    viewContainerTight: {
        maxWidth: 30,
        maxHeight: 30,
        margin: 2,
        paddingTop: 3,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: colorPallette.lightBlue,
    },
    containerTight: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        padding: 4,
    },
    image: {
        width: 20,
        height: 20,
    },
});

// Path: React-Native-Components/Buttons/styles.js
// This is our main stylesheet for the buttons
// This colors can be changed to fit the theme of whichever application you are developing
export const colorPallette = {
    primary_red: "#B22222",
    primary_orange: "#ED5829",
    accent_color: "#09ABF0",
    text_color: "#4C504E",
    button_pressed: "#898989",
    accent_green: "#2BB549",
    lightBlue: "#1ecfea",
    light_grey: "#e5e5e5",
    placeholderText: "#a7a7a7",
    cal_prev: "#e6e6e6",
    cal_current: "#ffffff",
    cal_next: "#ffffff",
    calHead_prev: "#b3b3b3",
    calHead_current: "#ffcc66",
    calHead_next: "#d3d3d3",
    primary_white: "#ffffff",
    primary_platinum: "#E6EAEF",
    primary_silver_blue: "#778DA9",
    primary_medium_blue: "#415A77",
    primary_dark_blue: "#1B263B",
    highlight_color: "#E6EAEF",
    accent_pink: "#A95666",
    accent_yellow: "#B6B55C",
    button_delete: "#C43631",
    highlight_delete: "#B4312D",
    button_edit: "#415A77",
    highlight_edit: "#3A5069",
    button_add: "#339955",
    highlight_add: "#297A44",
  
  };