const StylesCSS = {
  container: {
    flex: 1,
    marginTop: 45,
  },
  group: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  groupTitle: {
    marginTop: 25,
    fontSize: 22,
    color: "#000",
  },
  groupInner: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  plusBtn: {
    borderRadius: 50,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}

export default StylesCSS;