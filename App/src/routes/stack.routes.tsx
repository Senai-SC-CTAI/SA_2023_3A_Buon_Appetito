import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/Home';

export function StackRoutes(){
    return(
        <Navigator
            /*screenOptions={{
                headerShown: false
            }}*/
        >
            <Screen
                name='welcome'
                options={{
                    title: 'Welcome',
                    headerShown: false
                }}
                component={Welcome}
            />
            <Screen
                name='login'
                options={{
                    title: 'Tela A',
                    headerShown: false
                }}
                component={Login}
            />
            <Screen
                name='register'
                options={{
                    title: 'Tela B',
                    headerShown: false,
                }}
                component={Register}
            />
            <Screen
                name='home'
                options={{
                    title: 'Welcome',
                    headerShown: false
                }}
                component={Home}
            />
        </Navigator>
    )
}