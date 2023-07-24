import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/Home';

import { RecSenha1 } from '../screens/RecSenha1';
import { RecSenha2 } from '../screens/RecSenha2';
import { RecSenha3 } from '../screens/RecSenha3';
import { RecSenha4 } from '../screens/RecSenha4';

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
                    title: 'Home',
                    headerShown: false
                }}
                component={Home}
            />
            <Screen
                name='recsenha1'
                options={{
                    title: 'RecSenha1',
                    headerShown: false
                }}
                component={RecSenha1}
            />
            <Screen
                name='recsenha2'
                options={{
                    title: 'RecSenha2',
                    headerShown: false
                }}
                component={RecSenha2}
            />
            <Screen
                name='recsenha3'
                options={{
                    title: 'RecSenha3',
                    headerShown: false
                }}
                component={RecSenha3}
            />
            <Screen
                name='recsenha4'
                options={{
                    title: 'RecSenha4',
                    headerShown: false
                }}
                component={RecSenha4}
            />
        </Navigator>
    )
}