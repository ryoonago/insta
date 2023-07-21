import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';

import {
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { styled } from 'styled-components';

import { Link } from 'react-router-dom';

//헬멧 추가해주기
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  boder: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;

  form {
    display: flex;
    flex-direction: column;
    // margin-top: 10px;
    width: 100%;
    justify-items: center;
    align-items: center;
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;

  a {
    font-weight: 600;
    margin-left: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: #0095f6;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;

const Separator = styled.div`
  width: 100%;
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }

  span {
    margin: 0px 10px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const FacebookLogin = styled.div`
  color: #385285;
  margin-top: 10px;
  width: 100%;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const SubTitle = styled.div`
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  font-weight: 600;
`;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  // console.log(formState.isValid);

  // const { register, handleSubmit} = useForm();

  const onSubmitValid = (data) => {
    //api 호출
    console.log('data valid', data);

    // axios.post("https//oz.com/api/v1/signup", data)
  };
  const onSubmitInvalid = (data) => {
    console.log('data invalid', data);
  };

  return (
    <Container>
      <Helmet>
        <title>Instagram | SignUp</title>
      </Helmet>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <SubTitle>친구들의 사진과 동영상을 보려면 가입하세요</SubTitle>

          <FacebookLogin>
            <Button>
              <FontAwesomeIcon icon={faFacebookSquare} />

              <span>Facebook으로 로그인</span>
            </Button>
          </FacebookLogin>

          <Separator>
            <div></div>
            <span>OR</span>
            <div></div>
          </Separator>

          <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
            <Input
              type="text"
              placeholder="휴대폰 번호"
              {...register('phone', { required: true, minLength: 12 })}
            />
            <Input
              type="text"
              placeholder="성명"
              {...register('name', { required: true, minLength: 3 })}
            />

            {errors.name && errors.name.type === 'required' && (
              <p style={{ color: 'red', fontSize: 7 }}>
                이름은 반드시 입력되어야 합니다.
              </p>
            )}

            {errors.name && errors.name.type === 'minLength' && (
              <p style={{ color: 'red', fontSize: 7 }}>
                이름은 최소 3글자 이상 입력 해주셔야 합니다.
              </p>
            )}
            <Input
              type="text"
              placeholder="사용자 이름"
              {...register('username', { required: true, minLength: 3 })}
            />
            <Input
              type="password"
              placeholder="비밀번호"
              {...register('password', { required: true, minLength: 4 })}
            />
            <Button type="submit" value="SignUp" disabled={!formState.isValid}>
              {/* isValid => 데이터 맞아? 응(true)=> disabled가 비활성화 되어야 됨 false
                아니=> disabled가 활성화 되어야지 클릭이 안되겠지 */}
              가입
            </Button>
          </form>
        </TopBox>

        <BottomBox>
          <span>계정이 있으신가요?</span>
          {/* 홈화면으로 가려면 Link to 안에 /만 남기고 SignUp 지우기 */}
          <Link to="/">로그인</Link>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}

export default SignUp;

// const KakaoLogin = () => {

//   const handleKakaoLogin = () => {

//   if (window.Kakao) {

//   Kakao.init(process.env.REACT_APP_KAKAO_API_KEY); // 카카오 JavaScript SDK 초기화

//   // 카카오톡 로그인 버튼 클릭 시 실행되는 로그인 함수

//   Kakao.Auth.login({

//   success: (response) => {

//   // 로그인 성공 시 처리할 로직
//             const accessToken = response.access_token;

//   console.log('카카오톡 로그인 성공! Access Token:', accessToken);
//           },

//           },

//           },

//   fail: (error) => {

//   // 로그인 실패 시 처리할 로직

//   console.error('카카오톡 로그인 실패!', error);
//           },
//         });
//       }
//     };

//           },
//         });
//       }
//     };

//           },
//         });
//       }
//     };

//           },
//         });

//           },
//         });
//   return (

//       <div>

//       <div>
//         <

//       <div>

//       <div>

//   <div>
//         <button onClick={handleKakaoLogin}>카카오톡으로 로그인하기</button>
//       </div>
//     );
//   };

//   export default KakaoLogin;
