import { View } from 'react-native';

export default function RadioButton(props) {
  return (
      <View style={[{
        height: 48,
        width: 48,
        margin: 10,
        borderRadius: 24,
        borderWidth: 3,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }, props.style]}>
        {
          props.selected ?
            <View style={{
              height: 24,
              width: 24,
              borderRadius: 12,
              backgroundColor: '#000',
            }}/>
            : null
        }
      </View>
  );
}
