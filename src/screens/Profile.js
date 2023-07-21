import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";





const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderContainer = styled.div`
  border: 1px solid black;
  border-radius: 7px;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: column;
  align-item: center;
  padding: 10px 20px
`;
const HeaderImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;

`;
const HeaderInfo = styled.div`
  margin: 30px 0 0 60px;
`;
const HeaderUsername = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const HeaderFollowInfo = styled.div`
  margin-top: 20px;
  font-size: 15px;
`;
const ContentsContainer = styled.div`
  border-radius: 7px;
  margin-top: 10px;
  width: 100%;
  display: grid;
  grid-template-rows: 300px;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Feed = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  border: 1px solid black;
  position: relative;
`;

const InnerContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  };
  `;
  const Icon = styled.span`
    font-size: 18px;
    display: flex;
    align-items: center;
    margin: 0 5px;
    svg {
      font-size: 14px;
      margin-right: 5px;
    }
  `;


function Profile() {
  return (
    <ProfileContainer>
      <HeaderContainer>
        <HeaderImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMq-rZe6ixEFRa8ODoKuwK2ua_UNRdAdI2PA&usqp=CAU"></HeaderImg>
        <HeaderInfo>
          <HeaderUsername>Ryoona</HeaderUsername>
          <HeaderFollowInfo>56 followers / 50 following</HeaderFollowInfo>
        </HeaderInfo>
      </HeaderContainer>


      

      <ContentsContainer>
        <Feed bg='https://mblogthumb-phinf.pstatic.net/MjAxODA3MDRfMjcx/MDAxNTMwNzEyOTg5NzMx.PrRZTpHMSnLH_eYdCLPOCvHTMg-ISQ2IVhaB0KjgSngg.8KFPwdW1r50cY2m3aKe6Hc5j827g9oFMsvUK8xiDzvwg.JPEG.kiko13/IMG_2729.jpg?type=w800'>
          <InnerContainer>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              좋아요수
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} /> 
              리뷰수
            </Icon>
          </InnerContainer>
        </Feed>

        <Feed bg="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/54sU/image/VxVbJOTHOQHIUP4iyUPVzjVMCmA.jpg">
          <InnerContainer>
        <Icon>
          <FontAwesomeIcon icon={faHeart} />
          좋아요수
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faComment} /> 
          리뷰수
        </Icon>
      </InnerContainer>
        </Feed>
        <Feed bg="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/duLL/image/ab5WFfaaivwUBcC7HyPUz6mYg28.jpg" > 
          <InnerContainer>
        <Icon>
          <FontAwesomeIcon icon={faHeart} />
          좋아요수
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faComment} /> 
          리뷰수
        </Icon>
      </InnerContainer>
        </Feed>
      </ContentsContainer>
    </ProfileContainer>
  );
}

export default Profile;




