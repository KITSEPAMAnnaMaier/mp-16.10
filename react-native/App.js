import * as React from "react";
import {
  Alert,
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity
} from "react-native";

const btnTypes = {
  number: {
    style: 1, // TODO: move to const,
    onPress: () => {}
  }
};

const initState = {
  result: 0,
  allOperations: [],
  currentNumber: 0,
  hex: true, // HEX, false is for DEC
  // btns
  buttons: [
    {
      title: "1",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "2",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "3",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "4",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "5",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "6",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "7",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "8",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "9",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "0",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "A",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "B",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "C",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "D",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "E",
      // disabled: false,
      type: btnTypes.number
    },
    {
      title: "F",
      // disabled: false,
      type: btnTypes.number
    }
  ]
};

const colors = {
  // std colors
  RED: "red",
  BLACK: "black",
  GREY: "grey",
  // --
  CONTAINER_MAIN: "#ecf0f1",
  INPUT_BACKGROUND: "#E6F6FF",
  BUTTON_BG: "#FBFFF3"
};

const CalcBtn = ({ onPress, styleContainer, disabled, title }) => {
  const _style = disabled
    ? {
        ...styleContainer,
        backgroundColor: colors.GREY
      }
    : styleContainer;

  return (
    // <Button
    //   onPress={onPress}
    //   style={style}
    //   disabled={disabled}
    //   title={title}
    // />

    <TouchableOpacity
      onPress={disabled ? () => {} : onPress}
      style={_style}
      activeOpacity={disabled ? 1 : 0.5}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...initState
    };

    // TODO: handle all Operations
    // TODO: current number 0 == nothing
  }

  switchHandler = val => {
    // const { state } = this;
    // this.setState((prevState, props) => {
    this.setState({
      // ...state,
      hex: val,
      currentNumber: 0
    });
  };

  addToCurrentNumber = val => {
    const { currentNumber: _currNumber } = this.state;
    const currentNumber = _currNumber ? _currNumber : "";

    this.setState({
      currentNumber: `${currentNumber}${val}`
    });
  };

  add = () => {
    const { currentNumber, allOperations, hex } = this.state;

    this.setState({
      allOperations: [
        ...allOperations,
        {
          type: hex ? 16 : 10,
          val: currentNumber
        }
      ],
      currentNumber: 0
    });

    Alert.alert("allOperations", JSON.stringify(allOperations));
  };

  clear = () => {
    this.setState({
      allOperations: [],
      currentNumber: 0,
      result: 0
    });
  };

  summarize = () => {
    this.add();
    const { allOperations } = this.state;
    const fred = (val, acc) => parseInt(val.val) + parseInt(acc);

    this.setState({
      result: allOperations.reduce(fred, 0),
      allOperations: []
    });

    Alert.alert("result", allOperations);
  };

  render() {
    const { result, allOperations, currentNumber, buttons, hex } = this.state;
    const resString = result.toString();
    const resCurrentNumber = currentNumber.toString();

    const _allOperations = [];
    allOperations.map(item => {
      if (item.type === 10) {
        _allOperations.push(item.val);
      } else if (item.type === 16) {
        _allOperations.push(`0x${item.val}`);
      }
    });

    const resAllOperations = _allOperations.join(" + ");

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.textStyle}>Result:</Text>
          <TextInput style={styles.inputStyle} value={result} />
          <Text style={styles.textStyle}>All operaions:</Text>
          <TextInput style={styles.inputStyle} value={resAllOperations} />
          <Text style={styles.textStyle}>Current number:</Text>
          <TextInput
            style={styles.inputStyle}
            value={hex ? `0x${resCurrentNumber}` : resCurrentNumber}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.rowButtonContainer}>
            <CalcBtn
              onPress={this.clear}
              title={"AC"}
              styleContainer={{
                ...styles.button,
                backgroundColor: "#83CBFF"
              }}
              // disabled={false}
            />
            <Switch
              value={hex}
              onValueChange={val => this.switchHandler(val)}
            />
            <CalcBtn
              onPress={this.add}
              title={"+"}
              styleContainer={{
                ...styles.button,
                backgroundColor: "#FFF9C0"
              }}
              // disabled={false}
            />
            <CalcBtn
              onPress={this.summarize}
              title={"="}
              styleContainer={{
                ...styles.button,
                backgroundColor: "#FFF9C0"
              }}
              // disabled={false}
            />
          </View>
          <View style={styles.rowButtonContainer}>
            <CalcBtn
              onPress={() => this.addToCurrentNumber(1)}
              title={"1"}
              styleContainer={styles.button}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber(2)}
              title={"2"}
              styleContainer={styles.button}
              // disabled={false}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber(3)}
              title={"3"}
              styleContainer={styles.button}
              // disabled={false}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber(4)}
              title={"4"}
              styleContainer={styles.button}
              // disabled={false}
            />
          </View>
          <View style={styles.rowButtonContainer}>
            <CalcBtn
              onPress={() => this.addToCurrentNumber(5)}
              title={"5"}
              styleContainer={styles.button}
              // disabled={false}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber(6)}
              title={"6"}
              styleContainer={styles.button}
              // disabled={false}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber(7)}
              title={"7"}
              styleContainer={styles.button}
              // disabled={false}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber(8)}
              title={"8"}
              styleContainer={styles.button}
              // disabled={false}
            />
          </View>
          <View style={styles.rowButtonContainer}>
            <CalcBtn
              onPress={() => this.addToCurrentNumber(9)}
              title={"9"}
              styleContainer={styles.button}
              // disabled={false}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber(0)}
              title={"0"}
              styleContainer={styles.button}
              // disabled={false}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber("A")}
              title={"A"}
              styleContainer={styles.button}
              disabled={!hex}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber("B")}
              title={"B"}
              styleContainer={styles.button}
              disabled={!hex}
            />
          </View>
          <View style={styles.rowButtonContainer}>
            <CalcBtn
              onPress={() => this.addToCurrentNumber("C")}
              title={"C"}
              styleContainer={styles.button}
              disabled={!hex}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber("D")}
              title={"D"}
              styleContainer={styles.button}
              disabled={!hex}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber("E")}
              title={"E"}
              styleContainer={styles.button}
              disabled={!hex}
            />
            <CalcBtn
              onPress={() => this.addToCurrentNumber("F")}
              title={"F"}
              styleContainer={styles.button}
              disabled={!hex}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    // paddingsTop: Constants.statusBarHeight,
    backgroundColor: colors.CONTAINER_MAIN,
    padding: 8,
    paddingTop: 25
  },
  headerContainer: {},
  textStyle: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 25
  },
  inputStyle: {
    backgroundColor: colors.INPUT_BACKGROUND,
    fontSize: 16
  },
  buttonsContainer: {
    // height: 200,
    borderColor: colors.BLACK,
    borderWidth: 1
  },
  button: {
    width: 60,
    height: 60,
    borderColor: colors.BLACK,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.BUTTON_BG
  },
  rowButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: 'green',
    // height: 100,
    paddingVertical: 10
  }
});
