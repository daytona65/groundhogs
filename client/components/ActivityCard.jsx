import React from 'react';
import { NativeBaseProvider, Box, Pressable, HStack, Badge, Spacer, Flex, VStack, Text, Center, Image,Link } from "native-base";
import { StyleSheet, View, TouchableOpacity, ActivityIndicator, FlatList,Linking } from 'react-native';

export default function ActivityCard() {
  return (
    <NativeBaseProvider>
      <VStack space={4} alignItems="center">
        <Box
          alignItems="center"
          borderWidth="3"
          borderColor="coolGray.300"
          shadow="5"
          bg="coolGray.100"
          p="4"
          borderRadius= {10}
          width="97%"
          marginTop={16} // Set the width of the Box component to span from left to right
        >
          <Image
            source={{ uri:'https://groundupinitiative.org/wp-content/uploads/2023/01/1-1.jpg' }}
            alt="Activity Image"
            resizeMode="cover" // Adjust resizeMode as needed
            size="100%" 
            height="40" // Set height to auto to maintain aspect ratio
          />
          <HStack alignItems="center" mt="3">
            <Badge colorScheme= '#057320' _text={{ color: "white" }} variant="solid" rounded="10">
              Streaming Through Nature
            </Badge>
            <Spacer />
            <Text fontSize={14} color="coolGray.800">
              $40.00
            </Text>
          </HStack>
          <Text fontSize={12} color="coolGray.800" mt="2" alignSelf="flex-start"> {/* Added alignSelf="flex-start" to move the text to the left */}
            Dates: 17/24 June
          </Text>
          <Text mt="1" fontSize={12} color="coolGray.700">
          Join us in this guided tour of our chemical-free education farm and explore nature that’s unique in the space. Reconnect yourself with the environment through your 5 senses, get up close to rediscover something new about our food.</Text>
          <Flex>
          <TouchableOpacity onPress={() => {Linking.openURL('https://groundupinitiative.org/product/streaming-through-nature/')}}>
            <Text mt="1" fontSize={12} fontWeight="medium" color="darkBlue.600" textDecoration="underline">
              Read More
            </Text>
            </TouchableOpacity>
          </Flex>
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
}
