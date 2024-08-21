import { useRoute } from '@react-navigation/native';
import { MoimManagementStack } from 'navigators/constants';
import { MoimManagementRouteProp } from 'navigators/types';
import JoinManageScreen from 'screens/MoimManagementScreens/JoinManageScreen';
import MoimEditInfoScreen from 'screens/MoimManagementScreens/MoimEditInfoScreen';
import MoimManageListScreen from 'screens/MoimManagementScreens/MoimManageListScreen';
import PermissionManageScreen from 'screens/MoimManagementScreens/PermissionManageScreen';

const MoimManagementStackNavigator = () => {
    const route = useRoute<MoimManagementRouteProp>();
    const id = route.params.id;
    
    return (
        <MoimManagementStack.Navigator
            initialRouteName={'MOIM_MANAGE_LIST'}
        >
            <MoimManagementStack.Screen 
                name={'MOIM_MANAGE_LIST'}
                initialParams={{ id }}
                component={MoimManageListScreen}
                options={{
                    headerShown: false,
                }}
            />
            <MoimManagementStack.Screen 
                name={'PERMISSION_MANAGEMENT'}
                component={PermissionManageScreen}
                options={{
                    headerTitle: '권한 수정',
                    headerTintColor: '#000',
                    headerTitleAlign: 'center',
                    headerLeftLabelVisible: false
                }}
            />
            <MoimManagementStack.Screen 
                name={'JOIN_MANAGEMENT'}
                component={JoinManageScreen}
                options={{
                    headerTitle: '가입 관리',
                    headerTintColor: '#000',
                    headerTitleAlign: 'center',
                    headerLeftLabelVisible: false
                }}
            />
            <MoimManagementStack.Screen 
                name={'MOIM_INFO_EDIT'}
                component={MoimEditInfoScreen}
                options={{
                    headerTitle: '모임 정보 수정',
                    headerTintColor: '#000',
                    headerTitleAlign: 'center',
                    headerLeftLabelVisible: false
                }}
            />
        </MoimManagementStack.Navigator>
    );
};

export default MoimManagementStackNavigator;