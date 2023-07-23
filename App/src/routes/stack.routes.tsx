import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/Home';

import { Passo1 } from '../screens/RecuperarSenha/Passo1';
import { Passo2 } from '../screens/RecuperarSenha/Passo2';
import { Passo3 } from '../screens/RecuperarSenha/Passo3';
import { Passo4 } from '../screens/RecuperarSenha/Passo4';

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
                name='passo1'
                options={{
                    title: 'Passo1',
                    headerShown: false
                }}
                component={Passo1}
            />
            <Screen
                name='passo2'
                options={{
                    title: 'Passo2',
                    headerShown: false
                }}
                component={Passo2}
            />
            <Screen
                name='passo3'
                options={{
                    title: 'Passo3',
                    headerShown: false
                }}
                component={Passo3}
            />
            <Screen
                name='passo4'
                options={{
                    title: 'Passo4',
                    headerShown: false
                }}
                component={Passo4}
            />
        </Navigator>
    )
}