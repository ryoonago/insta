import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPaperPlane, faBookmark } from "@fortawesome/fontawesome-free-regular";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";




const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid black;
  margin-bottom: 60px;
`;
const Wrapper = styled.div`
  width: 100%;
  // max-width: 650px;
`;
const FeedHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  height: 70px;
`;
const UserPfofileContainer = styled.div`
  display: flex;
  padding: 3px;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 30px;
`;
const UserProfileName = styled.span`
  width: 50px;
  margin-left: 10px;
  font-size: 20px;
  text-decoration: underline;
  margin-top: 12px;

`;
const UserPfofileImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 50%
`;

const FeedImg = styled.img`
  width: 100%;
  max-width: 630px;
  height: 100%;
  
`;

const FeedActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const FeedActions = styled.div`
  margin-left: 13px;
  width: 110px;
  display: flex;
  justify-content: space-between;
`;
const Bookmark = styled.div`
  margin-right: 10px;
`;

const CommentWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
padding: 10px 15px;
`;
const CommentsContainer = styled.div`
 margin-bottom: 10px;
 font-weight: 600;
`;
const CommentLike = styled.div`
`;
const CommentAuthor = styled.div`
`;
const CommentContent = styled.div`
`;
const CommentList = styled.div`
`;



function Home() {
  return ( 
      <FeedContainer>
        <Wrapper>
          <FeedHeader>
            <UserPfofileContainer>
                <UserPfofileImg sizes="3x" src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMTc5/MDAxNTIwMDQxNzQwODYx.qQDg_PbRHclce0n3s-2DRePFQggeU6_0bEnxV8OY1yQg.4EZpKfKEOyW_PXOVvy7wloTrIUzb71HP8N2y-YFsBJcg.PNG.osy2201/1_%2835%ED%8D%BC%EC%84%BC%ED%8A%B8_%ED%9A%8C%EC%83%89%29_%ED%9A%8C%EC%83%89_%EB%8B%A8%EC%83%89_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_180303.png?type=w800" >
                </UserPfofileImg>
                <UserProfileName>Ryoona</UserProfileName>
            </UserPfofileContainer>
          </FeedHeader>
          <FeedImg src="https://cdn.discordapp.com/attachments/1105405586440470583/1131410065916706968/9ba2f093ae431b5c.jpg"></FeedImg>
          <FeedActionsContainer>
            <FeedActions>
              <FontAwesomeIcon style={{color: "tomato"}} size="2x" icon={ false ? SolidHeart : far.faHeart} />
              <FontAwesomeIcon size="2x" icon={faComment} />
              <FontAwesomeIcon size="2x" icon={faPaperPlane} />
            </FeedActions>
            <Bookmark>
              <FontAwesomeIcon size="2x" icon={faBookmark} />
            </Bookmark>

          </FeedActionsContainer>
            <CommentWrapper>
              <CommentsContainer>
                <CommentLike>0 likes</CommentLike>
              </CommentsContainer>
              <CommentsContainer>
                <CommentAuthor>작성자</CommentAuthor>
                <CommentContent>123</CommentContent>
              </CommentsContainer>
              <CommentsContainer>
                <CommentList>댓글 0개 모두 보기</CommentList>
              </CommentsContainer>
                <CommentsContainer>
                <CommentAuthor>작성자</CommentAuthor>
                <CommentContent>123</CommentContent>
              </CommentsContainer>
              </CommentWrapper>
        </Wrapper>
      </FeedContainer>
   
  );
}

export default Home;
