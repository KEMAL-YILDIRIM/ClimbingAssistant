import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class Avatar extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.avatar}
                    source={{
                    uri: 'https://lh3.googleusercontent.com/okVPL6SUkJvI7fpzxZpkNjFUfp9yzYXmYawOcxnt87iCaUeoyzy3l3DTbVFe-IoH2gh2yCelCvBy9sQzWr2bkJxH9Nc'
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50
    }
});
