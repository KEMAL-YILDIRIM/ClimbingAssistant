import React, {Component} from 'react';
import {View} from 'react-native';
import RouteImage from '../components/RouteImage';
import RouteFooter from '../components/RouteFooter';

export default class Body extends Component {
    render() {
        return (
            <View>
                <RouteImage/>
                {/* <RouteFooter/> */}
            </View>
        );
    }
}