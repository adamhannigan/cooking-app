import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

// galio components
import {
  Block, Card as GalioCard, Text, Icon, theme
} from 'galio-framework';

const { width } = Dimensions.get('screen');


const Card = props => (
    <GalioCard
        flex
        style={styles.stats}
        borderless
        title="Christopher Moon"
        caption="139 minutes ago"
        avatar="http://i.pravatar.cc/100?id=skater"
        image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
        location={(
        <Block row>
            <Block row middle style={{ marginHorizontal: theme.SIZES.BASE }}>
            <Icon name="eye" family="font-awesome" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.875} />
            <Text
                p
                color={theme.COLORS.MUTED}
                size={theme.SIZES.FONT * 0.875}
                style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
            >
                25.6k
            </Text>
            </Block>
            <Block row middle>
            <Icon name="heart" family="font-awesome" color={theme.COLORS.MUTED} size={theme.SIZES.FONT * 0.875} />
            <Text
                p
                color={theme.COLORS.MUTED}
                size={theme.SIZES.FONT * 0.875}
                style={{ marginLeft: theme.SIZES.BASE * 0.25 }}
            >
                936
            </Text>
            </Block>
        </Block>
        )}
    />
);

const styles = StyleSheet.create({
  stats: {
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    backgroundColor: '#fff',
  },
});

export default Card;