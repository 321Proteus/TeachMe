import { View, StyleSheet, TextInput, Text, FlatList, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import ButtonComponent from '@/components/Buttons';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 


export default function Home() {
    return (
      <View style={styles.container}>
        <View style={{ width: '99%' }}>
          <TextInput
            style={styles.input}
            placeholder="Szukaj"
            placeholderTextColor="gray"
          />
          <Ionicons 
            name="search" 
            size={21} 
            color="gray" 
            style={styles.icon} 
          />
        </View>  
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
          {[
            { name: 'Matematyka', image: require('assets/images/matematyka.png') },
            { name: 'Fizyka', image: require('assets/images/fizyka.png') },
            { name: 'Informatyka', image: require('assets/images/informatyka.png') },
            { name: 'Biologia', image: require('assets/images/biology.png') },
            { name: 'Geografia', image: require('assets/images/geografia.png') },
            { name: 'Chemia', image: require('assets/images/chemia.png') },
            { name: 'J. Angielski', image: require('assets/images/angielski.png') },
            { name: 'J. Hiszpański', image: require('assets/images/hiszpanski.png') },
          ].map((category, index) => 
            (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => router.push({ pathname: '../ads', params: { category: category.name } })}
            >
              <View style={styles.categoryItem}>
                <Image source={category.image} style={styles.image} />
                <Text style={styles.categoryText}>{category.name}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
    
        <Text style={styles.motto}>
          Zacznij teraz i dziel się swoją pasją do{' '}
        <Text style={{ color: '#1c9e92', fontWeight: '600' }}>nauki!</Text>
        </Text>
        <View style={{ bottom:30 }}>
          <ButtonComponent 
            theme="start" 
            label="Dodaj ogłoszenie" 
            onPress={() => router.replace("../create_ad")} 
          />
        </View>
      </View>
    );
  }

  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 18,
    fontSize: 18,
    marginBottom: 20,
    padding: 20,
    width: '99%',
  },
  icon: {
    position: 'absolute',
    right: 17,
    top: 15
  },
  imageScroll: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white',
    margin: 10,
  },
  motto: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    position: 'absolute',
    top: 450,
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  
});
