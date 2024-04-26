import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const navigate = useNavigate();

    const gamjaFarmMeaning = () => {
        const botMessage1 = createChatBotMessage('감: 감자는 맛이 좋고');
        const botMessage2 = createChatBotMessage('자: 자기계발에 좋습니다');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage1, botMessage2],
        }));
	};

    const movieName = () => {
        navigate('/login');
    };

    const movieNew = () => {
        navigate('/boxoffice/monthly');
    };

    const movieLike = () => {
        navigate('/mypage');
    };

    const pythonAi = () => {
        navigate('/mypage');
    };

	const handleHello = () => {
        const botMessage = createChatBotMessage('저도 반가워요');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleOptions = () => {
        const botMessage = createChatBotMessage('당첨되셨습니다. 팀장을 찾아주세요.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleUnknownMessage = () => {
        const botMessage = createChatBotMessage('죄송해요 무슨 말씀이신지 잘 모르겠어요 ㅜㅜ');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: { gamjaFarmMeaning, movieName, movieNew, movieLike, pythonAi, handleHello, handleOptions, handleUnknownMessage },
                });
            })}
        </div>
    );
};

export default ActionProvider;
