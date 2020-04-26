import { AsyncStorage } from 'react-native'

import { Meal } from '../../constants/dummyData'

class Drool {
    public async getDrools(): Promise<Meal[]> {
        const drools = await AsyncStorage.getItem('@drools')

        if (!drools) {
            return []
        }

        console.log('Got drools', JSON.parse(drools))
        return JSON.parse(drools) as Meal[]
    }

    public async onDrool(meal: Meal) {
        const drools = await this.getDrools()

        const newDrools = [
            ...drools,
            meal,
        ]

        await AsyncStorage.setItem('@drools', JSON.stringify(newDrools))
    }

    public async reset() {
        await AsyncStorage.setItem('@drools', JSON.stringify([]))
    }
}

export const DroolModel = new Drool()
