/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  InsuranceScreen,
  ProductDetailsScreen,
  CalculatePremiumScreen,
  PremiumAmountScreen,
  CompareScreen,
} from '@app/screens';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProfileIcon from '@app/assets/images/ProfileIcon.svg';
import MenuIcon from '@app/assets/images/MenuIcon.svg';
import BackButton from '@app/assets/images/BackButton.svg';
import AppTextinputWithIcons from '@app/components/AppInput';
import Colors from '@app/config/theme/Colors';
import FontSize from '@app/config/theme/FontSize';
// import {RootStackParamList} from '../../types';
// import ChangePasswordScreen from '@app/screens/ForgotPassword/ChangePassword';
// import RegisterScreen from '@app/screens/RegisterScreen/RegisterScreen';
// import {refreshtoken} from '@app/features/UserAuth/reducer';
// import {useAppSelector} from '@app/store/root-reducer';
// import {GenericAppBar} from '@app/components/AppBar';
// import {ExamHeader} from '../components';
// import linking from './LinkingConfiguration';
// import {logout} from '@app/features/UserAuth/index';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useAnalytics} from '@segment/analytics-react-native';
// import {useAppDispatch} from '@app/store';
// import {
//   createDiscussion,
//   createComment,
//   addUnResolvedDiscussionQueue,
//   addUnResolvedCommentQueue,
//   addUnResolvedEditDiscussionQueue,
//   updateDiscussion,
//   addUnResolvedEditCommentQueue,
//   updateSingleComment,
// } from '@app/features';
// import {axios} from '@app/config';
// import RNUxcam from 'react-native-ux-cam';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

type props = {
  isSearchBar?: boolean;
  isHome?: boolean;
  isBack?: boolean;
  title?: string;
};

function GenericAppBar({
  isSearchBar = false,
  isHome = false,
  isBack = true,
  title,
}: props) {
  const navigation = useNavigation();
  return (
    // <View
    //   style={{backgroundColor: isHome ? Colors.primaryMain : Colors.light4}}>
    <View
      style={{
        backgroundColor: isHome ? Colors.primaryMain : Colors.light4,
        alignSelf: 'center',
        width: wp(100),
        minHeight: isHome ? hp(6) : hp(7),
        // alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: wp(5),
        paddingVertical: hp(1),
      }}>
      <View
        style={{
          width: wp(90),
          // backgroundColor: 'red',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            paddingRight: wp(1),
            alignItems: 'center',
          }}>
          {isBack && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackButton stroke={Colors.black} />
            </TouchableOpacity>
          )}
          {!isHome && (
            <Text
              style={{
                marginLeft: hp(1),
                color: Colors.black,
                fontSize: FontSize.L,
              }}>
              {title}
            </Text>
          )}
        </View>

        <View
          style={{
            width: wp(20),
            // backgroundColor: 'red',
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: wp(2),
            paddingVertical: hp(0.5),
            marginBottom: isHome ? hp(1) : 0,
          }}>
          <TouchableOpacity>
            <ProfileIcon stroke={isHome ? Colors.light4 : Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuIcon stroke={isHome ? Colors.light4 : Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
      {isSearchBar && (
        <AppTextinputWithIcons
          containerStyle={{backgroundColor: '#fafafa', marginBottom: hp(0.5)}}
          setText={text => console.log('text', text)}
          placeholder={'Search here'}
          iconRight
        />
      )}
    </View>
    // </View>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'left',
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          header: props => (
            <GenericAppBar
              isBack={false}
              isHome={true}
              isSearchBar={true}
              {...props}
            />
          ),
          headerTitle: 'Home',
        }}
      />
      <Stack.Screen
        name="InsuranceScreen"
        component={InsuranceScreen}
        options={{
          // title: 'Insurance List',
          header: props => (
            <GenericAppBar
              title="Insurance list"
              isSearchBar={false}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          // title: 'Insurance List',
          header: props => (
            <GenericAppBar
              title="Product Details"
              isSearchBar={false}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CalculatePremiumScreen"
        component={CalculatePremiumScreen}
        options={{
          // title: 'Insurance List',
          header: props => (
            <GenericAppBar
              title="Calculate Premium"
              isSearchBar={false}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="PremiumAmountScreen"
        component={PremiumAmountScreen}
        options={{
          // title: 'Insurance List',
          header: props => (
            <GenericAppBar
              title="Calculate Premium"
              isSearchBar={false}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CompareScreen"
        component={CompareScreen}
        options={{
          // title: 'Insurance List',
          header: props => (
            <GenericAppBar
              title="Calculate Premium"
              isSearchBar={false}
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerBackTitleVisible: false,
//         headerTitleAlign: 'left',
//       }}>
//       {isOnboarded === true ? (
//         <>
//           <Stack.Screen
//             name="Root"
//             component={BottomTabNavigator}
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             name="OnboardingScreen"
//             component={OnboardingScreen}
//             options={{
//               title: 'Onboarding',
//               headerShown: false,
//             }}
//           />
//         </>
//       ) : (
//         <>
//           <Stack.Screen
//             name="OnboardingScreen"
//             component={OnboardingScreen}
//             options={{
//               title: 'Onboarding',
//               headerShown: false,
//             }}
//           />
//           <Stack.Screen
//             name="Root"
//             component={BottomTabNavigator}
//             options={{headerShown: false}}
//           />
//         </>
//       )}

//       <Stack.Screen
//         name="AdmissionScreen"
//         component={AdmissionScreen}
//         options={{
//           title: 'Admission Screen',
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="OneToOneScheduleScreen"
//         component={OneToOneScheduleScreen}
//         options={{
//           title: 'Write a Post',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle="OneToOne Schedule Screen"
//               isBackButton
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="QuizHistoryScreen"
//         component={QuizHistoryScreen}
//         options={{
//           title: 'QuizHistoryScreen',
//           header: props => (
//             <GenericAppBar {...props} headerTitle="Quiz History" isBackButton />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="LiveClassesScreen"
//         component={LiveClassesScreen}
//         options={{
//           title: 'LiveClassesScreen',
//           header: props => (
//             <GenericAppBar {...props} headerTitle="Live Classes" isBackButton />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="PurchaseHistoryScreen"
//         component={PurchaseHistoryScreen}
//         options={{
//           title: 'PurchaseHistoryScreen',
//           header: props => (
//             <GenericAppBar {...props} headerTitle="My Purchases" isBackButton />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="SubjectsScreen"
//         component={SubjectsScreen}
//         options={{
//           title: 'SubjectsScreen',
//           header: props => (
//             <GenericAppBar {...props} headerTitle="Subjects" isBackButton />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="AcademicScreen"
//         component={AcademicScreen}
//         options={{
//           title: 'Academic Screen',
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="Professional"
//         component={Professional}
//         options={{
//           title: 'Professional',
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="PracticeQuizScreen"
//         component={PracticeQuizScreen}
//         options={{
//           title: 'Practice Quiz',
//           // headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="GroupScreen"
//         component={GroupScreen}
//         options={{
//           title: 'Group Screen',
//           headerShown: false,
//         }}
//       />

//       <Stack.Screen
//         name="CoursesScreen"
//         component={CoursesScreen}
//         options={{
//           title: 'Courses',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle="Courses"
//               isBackButton
//               isHelp
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="BatchScreen"
//         component={BatchScreen}
//         options={{
//           title: 'Courses',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle={
//                 props?.route?.params?.title
//                   ? props?.route?.params?.title
//                   : 'Course'
//               }
//               isBackButton
//               isHelp
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="ProgressScreen"
//         component={ProgressScreen}
//         options={{
//           title: 'LearningAnalysis',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle="Learning Analysis"
//               isBackButton
//               isHelp
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="BatchGroupScreen"
//         component={BatchGroupScreen}
//         options={{
//           headerShown: false,
//         }}
//       />

//       <Stack.Screen
//         name="WritePostScreen"
//         component={WritePostScreen}
//         options={{
//           title: 'Write a Post',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle={
//                 props?.route?.params?.title
//                   ? props?.route?.params?.title
//                   : 'Write a Post'
//               }
//               isBackButton
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="DiscussionDetailsScreen"
//         component={DiscussionDetailsScreen}
//         options={{
//           title: 'Discussion',
//         }}
//       />
//       <Stack.Screen
//         name="CourseDetailsScreen"
//         component={CourseDetailsScreen}
//         options={{
//           title: 'Courses',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               data={props.route.params}
//               headerTitle={
//                 props?.route?.params?.title
//                   ? props?.route?.params?.title
//                   : 'Courses'
//               }
//               isBackButton
//               isShare
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="MentorPaymentPreferencesScreen"
//         component={MentorPaymentPreferencesScreen}
//         options={{
//           title: 'Mentor Checkout',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle="Mentor Checkout"
//               isBackButton
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="SubjectScreen"
//         component={SubjectScreen}
//         options={{
//           title: 'Subject Screen',
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="AllCoursesScreen"
//         component={AllCoursesScreen}
//         options={{
//           title: 'All Courses',
//           header: props => (
//             <GenericAppBar {...props} headerTitle="All Courses" isBackButton />
//           ),
//         }}
//       />

//       <Stack.Screen
//         name="AllMentorsScreen"
//         component={AllMentorsScreen}
//         options={{
//           title: 'All Mentors',
//           header: props => (
//             <GenericAppBar {...props} headerTitle="All Mentors" isBackButton />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="PaymentPreferencesScreen"
//         component={PaymentPreferencesScreen}
//         options={{
//           title: 'Course Information',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle="Course Information"
//               isBackButton
//             />
//           ),
//         }}
//       />
//       {/* <Stack.Screen
//         name="BkashWebviewScreen"
//         component={BkashWebviewScreen}
//         options={{
//           title: 'Course Information',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle="Pay with Bkash"
//               isBackButton
//             />
//           ),
//         }}
//       /> */}
//       <Stack.Screen
//         name="PaymentWebviewScreen"
//         component={PaymentWebviewScreen}
//         options={{
//           title: 'Payment Screen',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle="Payment Screen"
//               isBackButton
//             />
//           ),
//         }}
//       />

//       <Stack.Screen
//         name="ProcessingScreen"
//         component={ProcessingScreen}
//         options={{
//           title: 'Processing',
//           header: props => (
//             <GenericAppBar {...props} headerTitle="Processing" isBackButton />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="MentorProfileScreen"
//         component={MentorProfileScreen}
//         options={{
//           title: 'Mentor Profile',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle="Mentor Profile"
//               isBackButton
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="ChatScreen"
//         component={ChatScreen}
//         options={{title: 'Faisal Mahmud'}}
//       />
//       <Stack.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{title: 'Profile'}}
//       />
//       <Stack.Screen
//         name="Settings"
//         component={Settings}
//         options={{title: 'Settings'}}
//       />

//       <Stack.Screen
//         name="PasswordScreen"
//         component={PasswordScreen}
//         options={{title: 'Change Password'}}
//       />
//       <Stack.Screen
//         name="ExamDescriptionScreen"
//         component={ExamDescriptionScreen}
//         // options={({ route }) => ({ title: route.params.quizDetails.name })}
//         options={{
//           title: 'ExamDescriptionScreen',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle={
//                 props?.route?.params?.quizDetails?.name
//                   ? props?.route?.params?.quizDetails?.name
//                   : 'Exam Description'
//               }
//               isBackButton
//               isRotate
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="ExamQuestionScreen"
//         component={ExamQuestionScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="SingleQuizScreen"
//         component={SingleQuizScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="ResultScreen"
//         component={ResultScreen}
//         options={() => ({
//           headerLeft: () => null,
//           header: props => (
//             <ExamHeader
//               {...props}
//               title={
//                 props?.route?.params?.quizDetails?.name
//                   ? props?.route?.params?.quizDetails?.name + '-Result'
//                   : 'Quiz result'
//               }
//               isHelp
//             />
//           ),
//         })}
//       />
//       <Stack.Screen
//         name="ExamSolutionScreen"
//         component={ExamSolutionScreen}
//         options={({route}) => ({
//           title: route.params.quizSoltuion.quiz.name
//             ? route.params.quizSoltuion.quiz.name + 'Solution'
//             : 'Quiz Solution',
//         })}
//       />
//       <Stack.Screen
//         name="ChapterLessonsScreen"
//         component={ChapterLessonsScreen}
//         options={{
//           headerShown: false,
//           title: 'Chapter Lessons Screen',
//         }}
//       />

//       <Stack.Screen
//         name="NoteDetailsScreen"
//         component={NoteDetailsScreen}
//         options={{
//           title: 'NoteDetailsScreen',
//           header: props => (
//             <GenericAppBar
//               {...props}
//               headerTitle={
//                 props?.route?.params?.title
//                   ? props?.route?.params?.title
//                   : 'NoteDetailsScreen'
//               }
//               isBackButton
//               isRotate
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="WatchVideoScreen"
//         component={WatchVideoScreen}
//         options={{title: 'Watch Video', headerShown: false}}
//       />
//       <Stack.Screen
//         name="InstitutionSelectionScreen"
//         component={InstitutionSelectionScreen}
//         options={{title: 'Institution'}}
//       />
//       <Stack.Screen
//         name="DistrictScreen"
//         component={DistrictScreen}
//         options={{title: 'District'}}
//       />
//       <Stack.Screen
//         name="DivisionScreen"
//         component={DivisionScreen}
//         options={{title: 'Division'}}
//       />
//       <Stack.Screen
//         name="InstitutionScreen"
//         component={InstitutionScreen}
//         options={{title: 'Institution'}}
//       />
//       <Stack.Screen
//         name="LeaderBoardScreen"
//         component={LeaderBoardScreen}
//         options={{title: 'Leaderboard'}}
//       />
//       <Stack.Screen
//         name="SessionScreen"
//         component={SessionScreen}
//         options={{title: 'Session Screen', headerShown: false}}
//       />
//       <Stack.Screen
//         name="ListOfQuizScreen"
//         component={ListOfQuizScreen}
//         options={{title: 'Session Screen', headerShown: false}}
//       />
//       <Stack.Screen
//         name="ReportFeedbackScreen"
//         component={ReportFeedbackScreen}
//         options={{title: 'সমস্যা রিপোর্ট করুন', headerShown: true}}
//       />
//       <Stack.Screen
//         name="ReferralScreen"
//         component={ReferralScreen}
//         options={{title: 'Refer a friend', headerShown: true}}
//       />
//       <Stack.Screen
//         name="BadgeScreen"
//         component={BadgeScreen}
//         options={{
//           title: 'Badges',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="RewardsScreen"
//         component={RewardsScreen}
//         options={{
//           title: 'Rewards',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="CoinsHistoryScreen"
//         component={CoinsHistoryScreen}
//         options={{
//           title: 'Coin History',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="RewardsFaqScreen"
//         component={RewardsFaqScreen}
//         options={{
//           title: 'How it works',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="BuyCoinsScreen"
//         component={BuyCoinsScreen}
//         options={{
//           title: 'Buy coins',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="RedeemVoucherScreen"
//         component={RedeemVoucherScreen}
//         options={{
//           title: 'Redeem vouchers',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="DeleteAccountScreen"
//         component={DeleteAccountScreen}
//         options={{
//           title: 'Account Delete',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="BatchGroupMoreScreen"
//         component={BatchGroupMoreScreen}
//         options={{
//           title: 'More',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="BatchGroupExamScreen"
//         component={BatchGroupExamScreen}
//         options={{
//           title: 'Exams',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="BatchGroupNoteScreen"
//         component={BatchGroupNoteScreen}
//         options={{
//           title: 'Notes',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="GroupLiveClassScreen"
//         component={GroupLiveClassScreen}
//         options={{
//           title: 'Live Classes',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="CoLearnerScreen"
//         component={CoLearnerScreen}
//         options={{
//           title: 'Co-Learners',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="BatchGroupMentorScreen"
//         component={BatchGroupMentorScreen}
//         options={{
//           title: 'Mentors',
//           headerShown: true,
//         }}
//       />
//       <Stack.Screen
//         name="DoubtSolvingScreen"
//         component={DoubtSolvingScreen}
//         options={{
//           title: 'Doubt Solving',
//           headerShown: true,
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
