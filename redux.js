// render() {

//   console.log(store.getState());


//   return (
//     <View>
//       <Menu
//         navigation={this.props.navigation}
//       />
//       <Button
//         title="set address"
//         onPress={() => this.props.address('new address')}
//       />
//       <Text>{this.props.placeName}</Text>
//     </View>
//   );
// }


// function mapStateToProps(state) {
// return {
//   placeName: state.placeName
// }
// }

// function mapDispatchToProps(dispatch) {
// return {
//   address: (value) => dispatch({
//     type: 'SET_ADDRESS',
//     placeName: value
//   })
// }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)

