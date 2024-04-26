import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapUserReviewCommentBox = styled.div``;

export const UserReviewCommentBox = styled.div`
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

export const UserReviewComment = styled.div``;

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

export const Btn = styled.div``;

export const UpdateBtn = styled.button``;

export const DeleteBtn = styled.button``;
