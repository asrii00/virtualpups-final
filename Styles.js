import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dogcard: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        backgroundColor: '#f5f5f5',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10
    },
    dogImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 10
    },
    fave: {
        tintColor: '#f1f1f1',
        opacity: 0.5,
        fontSize: 50
    }, 
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#fff',
        margin: 5
      },
      pet: {
        padding: 10, 
        marginTop: 10, 
        marginBottom: 10, 
        backgroundColor: '#f5f5f5', 
        borderColor:'#ccc', 
        borderWidth: 1, 
        borderRadius: 5, 
        marginLeft: 10, 
        marginRight: 10
      },
      dogname: {
        fontSize: 12, 
        fontWeight: 'bold'
      }
});

export default styles;