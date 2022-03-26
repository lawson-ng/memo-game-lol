import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

// const tasks = [
//   {
//     name: 'bao cao giua ky',
//
//   },
//   {
//     name: 'di ra quan 2 tha dieu',
//   },
// ];

// {
//   name: '123',
//   isDone: false,
// }

// listTask []
// di vung tau => task
// okay => listTask.push({name: task}) => listTask.push({name: 'di vung tau'})
// => listTask [{name: 'di vung tau'}]

const App = () => {
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);
  console.log('🚀 ~ file: App.js ~ line 29 ~ App ~ listTask', listTask);

  const renderTask = () => {
    const data = listTask.filter(task => !task.isDone);

    if (!data.length) {
      return <Text>Chua co viec can lam</Text>;
    }

    return data.map(task => {
      if (!task.isDone) {
        return (
          <TouchableOpacity
            key={task.name}
            style={styles.taskContainer}
            onPress={() => {
              const name = task.name;
              const index = listTask.findIndex(item => item.name === name);

              const newTasks = [...listTask];
              newTasks[index].isDone = true;
              setListTask(newTasks);
            }}>
            <Text style={styles.taskName}>{task.name}</Text>
          </TouchableOpacity>
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO APP</Text>

      <View style={styles.header}>
        <TextInput
          onChangeText={text => setTask(text)}
          placeholder="Nhap task"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setListTask(listTask.concat([{name: task, isDone: false}]));
            setTask('');
          }}>
          <Text style={styles.btnTitle}>Okay</Text>
        </TouchableOpacity>
      </View>

      <Text>{task}</Text>
      <Text>Viec can lam</Text>
      <View style={styles.taskWrapper}>{renderTask()}</View>

      <Text>Viec da lam</Text>
      {listTask.map((task, index) => {
        if (task.isDone) {
          return (
            <TouchableOpacity
              key={task.name}
              style={styles.taskContainer}
              onPress={() => {
                console.log(index);
                // const newTasks = [...listTask];
                // newTasks[index].isDone = true;
                // console.log(newTasks);
                // setListTask(newTasks);
              }}>
              <Text style={styles.taskName}>{task.name}</Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default App;
