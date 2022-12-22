//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';

// create a component
const Adddailes = () => {
  return (
    <View style={styles.container}>
      <Text>ADD COSTOMER</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginVertical: 15}}>
          <Text
            style={{
              fontSize: 18,
              fontSize: 18,
              padding: 0,
              color: '#000',
            }}>
            Costomer Name
          </Text>
          <TextInput
            placeholder="Plese Enter Costomer Name"
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            Phone No.
          </Text>
          <TextInput
            keyboardType="phone-pad"
            placeholder="Plese Enter your Phone No."
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            Email Id
          </Text>
          <TextInput
            placeholder="Plese Enter your Email"
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            Pan No.
          </Text>
          <TextInput
            placeholder="Plese Enter your Pan Card No"
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <Text style={{color: 'pink'}}>Costomer GST Details</Text>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            GST NO.
          </Text>
          <TextInput
            placeholder="Plese Enter your GST NO."
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            GST State.
          </Text>
          <TextInput
            placeholder="Plese Enter your GST State."
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            GST State Code
          </Text>
          <TextInput
            placeholder="Plese Enter your   GST State Code"
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <Text style={{color: 'pink'}}> Billing Address</Text>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            Address
          </Text>
          <TextInput
            placeholder="Plese Enter your Address"
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            Town/City
          </Text>
          <TextInput
            placeholder="Plese Enter your Address"
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            State
          </Text>
          <TextInput
            placeholder="Plese Enter your Address"
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <Text style={{color: 'pink'}}>
          Shipping Address is same as Billing Address
        </Text>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            Address
          </Text>
          <TextInput
            placeholder="Plese Enter your Address"
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            Town/City
          </Text>
          <TextInput
            placeholder="Plese Enter your Address"
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontSize: 18, fontSize: 18, padding: 0, color: '#000'}}>
            State
          </Text>
          <TextInput
            placeholder="Plese Enter your Address"
            style={{
              borderBottomColor: 'red',
              padding: 0,
              borderBottomWidth: 1,
              height: 39,
              fontSize: 15,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#495C83',
  },
});

//make this component available to the app
export default Adddailes;
