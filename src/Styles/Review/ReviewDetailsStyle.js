import styled from "styled-components";
import { Link } from "react-router-dom";

export const Comment = styled.div`
  background-color: #212529;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 55px;
`;

export const CommentBox = styled.div`
  width: 1320px;
  margin: 18px 0 16px;
`;

export const BoxTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin-bottom: 18px;
`;

export const User = styled(Link)`
  display: flex;
  align-items: center;
  color: rgb(20, 20, 20);
  font-size: 13px;
  text-decoration: none;
`;

export const UserImage = styled.img`
  border: 1.5 solid #ededed;
  border-radius: 50%;
  background-color: #b9babe;
  margin-right: 5px;
  width: 18px;
  height: 18px;
`;

export const UserName = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #ededed;
`;

export const MovieName = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-top: 3px;
  color: white;
`;

export const MovieRate = styled.div`
  display: flex;
  align-items: center;
  color: #ededed;
  background-color: rgb(74, 74, 74);
  border: solid 1px rgb(234, 234, 234);
  border-radius: 13px;
  padding: 0 8px;
  margin-top: 5px;
`;

export const RateImage = styled.img`
  width: 16px;
  height: 16px;
`;

export const UserRate = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin-left: 4px;
`;

export const RightsideContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UpdateBtn = styled.button``;

export const DeleteBtn = styled.button``;
export const PosterLink = styled(Link)``;

export const Poster = styled.img`
  width: 70px;
  height: 104px;
  margin-right: 8px;
`;

export const UserComment = styled.div`
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 22px;
  color: #ededed;
`;

export const Cnt = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-top: 32px;
  color: #ededed;
`;

export const LikeCnt = styled.div`
  font-size: 12px;
  margin-right: 18px;
`;

export const UserCommentCommentCnt = styled.div`
  font-size: 12px;
  margin-right: 18px;
`;

export const ActiveArea = styled.div`
  column-gap: 1px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 43px;
  border-top: solid 1px rgb(240, 240, 240);
  border-bottom: solid 1px rgb(240, 240, 240);
`;

export const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 15px;
  margin: 3px;
  cursor: pointer;

  &:hover {
    color: #292a32;
    background-color: #eeeeef25;
  }

  &::after {
    /* 가상 요소의 스타일 */
    content: "";
    display: block;
    width: 1px;
    height: 14px;
    background-color: rgb(240, 240, 240);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const LikeImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const LikeWord = styled.div`
  color: #ededed;
  font-size: 15px;
  font-weight: 400;
`;

export const UserCommentComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 15px;
  margin: 3px;
  cursor: pointer;

  &:hover {
    color: #292a32;
    background-color: #eeeeef25;
  }

  &::after {
    /* 가상 요소의 스타일 */
    content: "";
    display: block;
    width: 1px;
    height: 14px;
    background-color: rgb(240, 240, 240);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const UserCommentCommentImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const UserCommentCommentWord = styled.div`
  color: #ededed;
  font-size: 15px;
  font-weight: 400;
`;

export const NoCommentsBox = styled.div`
  margin-top: 35px;
  padding: 16px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentIcon = styled.img`
  width: 72px;
  height: 72px;
`;

export const CommentInfo = styled.div`
  color: rgb(160, 160, 160);
  font-size: 15px;
  font-weight: 400;
  margin-top: 12px;
`;
export const WrapUserCommentCommentBox = styled.div``;

export const UserCommentCommentBox = styled.div`
  margin-top: 35px;
  display: flex;
  padding: 12px 0;
  position: relative;
  /* 
  
  flex-direction: column;
  align-items: center; */

  &::after {
    /* 가상 요소의 스타일 */
    content: "";
    display: block;
    width: 1320px;
    height: 1px;
    background-color: rgb(240, 240, 240);
    position: absolute;
    left: 50%;
    bottom: -10px; /* 하단에 위치하도록 설정 */
    transform: translateX(-50%);
  }
`;

export const CommentUser = styled.div``;

export const CommentUserImage = styled.img`
  border: 1.5 solid #ededed;
  border-radius: 50%;
  background-color: #b9babe;
  width: 32px;
  height: 32px;
`;
export const CommentUserContent = styled.div`
  margin-left: 8px;
`;
export const CommentUserName = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: white;
`;
export const CommentContent = styled.div`
  font-size: 15px;
  font-weight: 400;
  margin: 2px 0 9px;
  color: #ededed;
`;
export const CommentLike = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: rgb(126, 126, 126);
`;

export const CommentLikeWord = styled.div`
  font-size: 14px;
  margin-right: 12px;
`;

export const CommentLikeIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-top: 2px;
  margin-right: 5px;
`;

export const CommentLikeCnt = styled.div``;
