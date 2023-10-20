import { ImageBackground, StyleSheet, Text, View, FlatList, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import TitleText from './components/TitleText';
import AdbIcon from '@mui/icons-material/Adb';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalWelcome, setModalWelcome] = useState(true);
  const [courseGoals, setCourseGoals] = useState([]);
  const image = { uri: 'https://i.pinimg.com/564x/1d/7a/36/1d7a36240e7cc80d4585e9d0eeca916c.jpg' };

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }]);
  };

  function testDimissed() {
    console.log('Dismissed')
  };

  function testOrientation() {
    console.log('Orientation Changed')
  };

  function testRequestClose() {
    console.log('Request Closed')
  };

  function testShow() {
    console.log('Show')
  };

  return (
    <View style={styles.appContainer}>
      <ImageBackground source={image} resizeMode='repeat' style={styles.image}>

        <Pressable
          style={styles.iconContainter}
          onPress={() => setModalWelcome(!modalWelcome)}
        >
          <AdbIcon style={styles.iconStyle}></AdbIcon>
        </Pressable>

        <GoalInput onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <TitleText text={'MY COMPONENT GOALS'} />

          <Modal
            animationType="fade"
            onDismiss={testDimissed}
            onOrientationChange={testOrientation}
            onRequestClose={testRequestClose}
            onShow={testShow}
            visible={modalWelcome}
          >
            <Pressable
              style={styles.welcomeContainer}
              onPress={() => setModalWelcome(!modalWelcome)}>
              <Text style={styles.welcomeText}>WELCOME TO MY APP</Text>
            </Pressable>
          </Modal>

          <Modal
            animationType="slide"
            hardwareAccelerated={true}
            transparent={true}
            visible={modalVisible}
          >
            <ImageBackground source={image} resizeMode='repeat' style={styles.image}>
              <View style={styles.modalContainer}>
                <View style={styles.goalListContainer}>

                  <Pressable
                    style={[styles.button]}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.textStyle}>HIDE LIST</Text>
                  </Pressable>

                  <FlatList
                    data={courseGoals}
                    style={styles.goalList}
                    renderItem={(itemData) => {
                      return (
                        <GoalItem text={itemData.item.text} />
                      )
                    }} />

                </View>
              </View>
            </ImageBackground>
          </Modal>

          <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>SHOW LIST</Text>
          </Pressable>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  textGoal: {
    color: 'black',
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  goalsContainer: {
    flex: 5,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  goalListContainer: {
    flex: 5,
    borderWidth: 2,
    alignItems: 'center',
    padding: 20,
  },
  goalList: {
    marginTop: 10,
    alignSelf: 'stretch',
    borderWidth: 2,
  },
  image: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
  },
  textStyle: {
    color: 'white',
    fontWeight: 600,
  },
  button: {
    height: 30,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#770db5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    color: 'black',
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainter: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});