import { createChatBotMessage } from 'react-chatbot-kit';
import Buttons from './Buttons';
import botAvatar from "../images/potato_admin.png";
import userAvatar from "../images/logoImage.png";


const MyAvatar = (props) => {
	return (
		<img src={botAvatar} alt="Farm Owner" style={{ width: '20%', height: '20%' }} />
	);
};

const MyCustomAvatar = (props) => {
	return (
		<img src={userAvatar} alt="User" style={{ width: '30%', height: '30%' }} />
	);
};

const ChatConfig = {
	botName: '"감자밭도우미"',
	// initialMessages: [createChatBotMessage(`안녕하세요!!! 저는 ${botName}입니다.`)],
	initialMessages: [
		createChatBotMessage(<span>무엇을 도와드릴까요?</span>, {
			withAvatar: true,
			delay: 500,
			widget: 'widgetButtons',
		}),
	],
	widgets: [
		{
			widgetName: 'widgetButtons',
			widgetFunc: (props) => <Buttons {...props} />,
			props: {
				buttons: [
					{ text: <span>&ensp;&ensp;감자밭이란?&ensp;&ensp;</span>, action: 'gamjaFarmMeaning' },
					{ text: <span>&nbsp;제목검색&nbsp;</span>, action: 'movieName' },
					{ text: <span>최신영화</span>, action: 'movieNew' },
					{ text: <span>찜한영화</span>, action: 'movieLike' },
					{ text: <span>맟춤영화</span>, action: `pythonAi` },
				],
			},
		},
	],
	customComponents: {
		botAvatar: (props) => <MyAvatar {...props} />,
		userAvatar: (props) => <MyCustomAvatar {...props} />,
	},

	// customStyles: {
	// 	botMessageBox: {
	// 		backgroundColor: '#376B7E',
	// 	},
	// 	chatButton: {
	// 		backgroundColor: '#5ccc9d',
	// 	},
	// },

};

export default ChatConfig;



// likeRanking = async () => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}main`);
//       const bookData = response.data.likeCounts.slice(0, 4);

//       let messageContent;

//       if (bookData.length) {
//         const bookMessages = bookData.map(book => (
//           <BookInfo bookData={book} />
//         ));

//         // 여기서 추가 메시지를 배열에 추가합니다.
//         bookMessages.unshift(
//           <span>좋아요 랭킹의 정보 입니다.</span>
//         );


//         messageContent = bookMessages;
//       } else {
//         messageContent = <span>해당 책의 정보를 찾을 수 없습니다.</span>;
//       }

//       const message = this.createChatBotMessage(messageContent, { widget: 'showMore' });

//       this.updateChatbotState(message);
//     } catch (error) {
//       // 에러 처리
//       const errorMessage = this.createChatBotMessage("죄송합니다, 책 정보를 불러오는 데 실패했습니다.",
//         { widget: "showMore" });
//       this.updateChatbotState(errorMessage);
//     }
//   };

