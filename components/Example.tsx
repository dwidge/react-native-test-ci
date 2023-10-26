import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useDebouncedCallback} from 'use-debounce';

export function Example() {
  const [name, setUser] = React.useState('');
  const [show, setShow] = React.useState(false);
  console.log('Example1', name);

  return (
    <View>
      <TextInput
        defaultValue={name}
        onChangeText={useDebouncedCallback(setUser, 500)}
        testID="input"
      />
      <Button
        title="Print Username"
        onPress={() => {
          // let's pretend this is making a server request, so it's async
          // (you'd want to mock this imaginary request in your unit tests)...
          setTimeout(() => {
            setShow(true);
          }, 500);
        }}
      />
      {show && <Text testID="printed-username">{name}</Text>}
    </View>
  );
}
