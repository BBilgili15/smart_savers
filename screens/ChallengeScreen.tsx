import {ScrollView} from 'react-native'


// Import Components
import AnswerContainer from '../components/ChallengeScreen/AnswerContainer';
import QuestionContainer from '../components/ChallengeScreen/QuestionContainer';


  type ChallengeScreenProps = {
    route:any;
    navigation:any;
    
  };

  const ChallengeScreen = ({route, navigation}: ChallengeScreenProps) => {
    const { currentUser, setCurrentUser } = route.params;
   

    console.log("CURRENT USER: ", currentUser)
    
    
  return (
    <ScrollView>
        <QuestionContainer question={"Tom receives £5 as his weekly pocket money. He wants to save up to buy a video game that costs £30. How many weeks will it take for Tom to save enough money to buy the game?"}/>
        <AnswerContainer currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </ScrollView>
  )
}

export default ChallengeScreen;