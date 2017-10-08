import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

//hàm 
function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber,
  };
  //thêm 1 thuộc tính vào data là place_name
  data[key] = value;
  //querystring được tạo thành từ các cặp key = value cách nhau bởi dấu & 
  const querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');
  //https://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=london
  return 'https://api.nestoria.co.uk/api?' + querystring;
}

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "london",
      isLoading: false,
      message: '',
    }
  }

  //sự kiện onTextChanged được gọi mỗi khi TextInput thay đổi.
  _onSearchTextChanged = (event) => {
    // console.log('_onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    // console.log('Current: ' + this.state.searchString + ', Next: ' + event.nativeEvent.text);
  };


  //thực thi phương thức HTTP truy vấn json
  _executeQuery = (query) => {
    console.log(query);
    this.setState({ isLoading: true });
    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error =>
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
        }));
  };


  _handleResponse = (response) => {
    this.setState({ isLoading: false, message: '' });
    if (response.application_response_code.substr(0, 1) === '1') {
      //Router flux sử dụng Actions để điều hướng nếu có tham số truyền vào có thể truyền params sang component khác.
      Actions.result({ listings: response.listings });
    } else {
      this.setState({ message: 'Mã không hợp lệ.Hãy thử lại!!' });
    }
  };


  _onSearchPressed = () => {
    const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  };

  render() {
    // khai báo spinner trả về một ActivityIndicator (tương tự như ProgressBar)
    const spinner = this.state.isLoading ?
      <ActivityIndicator size='large' /> : null;
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Tìm nhà để mua !
        </Text>
        <Text style={styles.description}>
          Hãy điền mã vào đây :
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this._onSearchTextChanged}
            placeholder='Search via name or postcode' />
          <TouchableOpacity onPress={this._onSearchPressed}
            color='red'
            title='Go'>
            <View >
              <Text style={{ color: "red" }}>GO</Text>
            </View>
          </TouchableOpacity >
        </View>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        />
        {spinner}
        <Text style={styles.description}>{this.state.message} </Text>
      </View >
    );
  }
}


const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    //chiến hiếm chỗ trống còn lại
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
  },
});