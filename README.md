## 🗣️클러비(cluvie)

### **`클러비(cluvie)`**

1. 프로젝트 주제: 관심 있는 영화에 대해 이야기할 수 있는 모임을 주선하는 서비스
2. 엔드유저에게 보이는 웹 서비스 타이틀 및 한 줄 소개: 영화 보고 친해져요!
3. 팀 구성원

| 이름 | 역할 | 담당 부분 | GitHub |
| --- | --- | --- | --- |
| 장소영 | 팀장, 백엔드  | - 클럽 스키마 설계 - 클럽 관련 API 작성 - 무한 스크롤 API 작성 - Flask API 연결 | 링크 |
| 유수지 | 백엔드 | - 데이터 테이블 구상
- 회원가입 및 로그인 API 작성
- 메인페이지 API 작성
- 필터링에 맞는 sql문 작성하여 데이터 select
- 찜하기 및 신청하기 기능 API 작성 | 링크 |
| 이시은 | 프론트엔드 | - 와이어프레임 제작
- 메인
- 로그인 및 회원가입
- 전체 클럽 목록
- 클럽 생성 (기본 정보 작성) | 링크 |
| 신가현 | 프론트엔드 | - 와이어프레임 제작
- 헤더
- 내 클럽 목록
- 마이페이지
- 클럽 상세
- 클럽 생성 (상세 정보 작성, 인공지능 API 연동, 미리보기) 및 수정 | 링크 |
| 성기환 | 인공지능 | - Flask API 작성
- 요약문 생성, 혐오 표현 탐지, 키워드 추출, 개체명인식 AI 모델 전이학습 | 링크 |

### **`서비스 설명`**

#### **1. 기획 의도**

🤔 **문제 인식 -** 새로운 인간관계의 필요, 나와 취향이 비슷한 사람과 모일 수는 없을까?

- 많은 사람들이 평소 다양한 모임에 참여해야 할 필요성을 느낌
- 그중에서 **취향과 관심사에 의한 불특정 다수와의 모임**이 필요하다는 의견도 기존 인간관계에 의한 모임만큼 많은 비율을 차지
- 모임 앱을 통해 사람을 만나고, 모임에 참여하고자 하는 의향도 비교적 높은 편이었으며, 특히 20~30대 젊은 세대가 모임 앱 이용에 거부감이 적은 편이었음
- 향후 참여해 보고 싶은 모임의 종류 중 영화 모임은 낮지 않은 비율을 차지

💰 **시장 가능성** - 팬데믹으로 몸집이 부푼 OTT 시장, 엔데믹으로 다시 회복 중인 극장가

👉 **영화**에 관심 있는 사람들끼리 온/오프라인 **모임**을 만들고 **소통**할 수 있는 서비스 제공

#### **2. 기술스택**

**💻 프론트엔드**

| 스택 | 사용 이유 |
| --- | --- |
| React  | 컴포넌트 기반이므로 UI 재사용성이 높고, 공통적으로 익숙한 기술 스택이면서 커뮤니티가 활성화되어 있기 때문에 러닝 커브가 적었음 
| Typescript | 타입을 명시해주어 코드의 의도를 명확히 할 수 있으므로, 잠재적인 오류를 방지할 수 있고 협업에 용이함 |
| React Query | 서버 데이터와 클라이언트 데이터를 구분하기 좋고, 캐싱 및 로딩 처리에 편리함 |
| Recoil | React Hook과 유사한 사용 방식으로 복잡하지 않고, 코드를 깔끔하게 쓸 수 있음, Context API와 다르게 전역 상태를 쓰지 않는 곳은 리렌더링 되지 않음 |
| Emotion | CSS in JS로, 컴포넌트 형식으로 스타일을 작성할 수 있어 코드 통일성과 재사용성이 좋음 |
| MUI | 다양한 컴포넌트를 제공받아 빠르게 UI를 제작할 수 있음 |
| React Quill | 쉽게 텍스트 에디터를 처리할 수 있음 |

**🖥️ 백엔드**

| 스택 | 사용 이유 |
| --- | --- |
| Node.js & Express | 코드의 양을 줄여 주고, 추후에 유지 보수에 용이 |
| MySQL | 관계형 데이터베이스로 데이터 간 관계를 파악하기 좋고, 빠르게 처리할 수 있음 |
| AWS S3 | 로컬에 저장할 필요 없이 많은 데이터를 보관할 수 있음 |

**🖥️ 인공지능**

| 스택 | 사용 이유 |
| --- | --- |
| Python/Flask | 웹 프레임워크 쉬운 end point 작성 |
| Transformers | 언어 모델 학습을 위한 라이브러리 |
| Bert, Bart, Electra, sRoberta | 프리 트레인 모델 |

**🖥️ 배포**
| --- |
| Docker Nginx |

#### **3. 웹 서비스의 최종적인 메인 기능과 서브 기능 설명**

a. **메인 페이지**

    - 배너에 영화 이미지 infinite carousel
    - 기준에 따라 일부 클럽 모집글 최대 10개씩 표시
        
b. **로그인 페이지**

    - 이메일 아이디 및 비밀번호 유효성 검사
    - JWT(Access Token, Refresh Token) 이용

c. **회원가입 페이지**

    - 각 input의 유효성 검사
    - 인증 메일 발송 및 확인
        
d. **클럽 생성 페이지**

    - 인공지능을 활용한 키워드 및 요약문 추출(해시태그와 한줄소개에 적용 가능)
    - 이미지 업로드
    - React Quill 텍스트 에디터를 이용한 상세 모집글 작성
    - 작성 시 보여질 상세 페이지 미리보기 가능

e. **전체 클럽 목록 페이지**

    - 무한 스크롤로 모든 클럽 모집글 카드 확인
    - 클럽 필터링
    - 클럽 검색
    - 클럽 찜하기
    - 하나의 카드 클릭 시 해당 클럽 모집글 상세 페이지로 이동
    - (+) 버튼 클릭 시 클럽 생성 페이지로 이동

f. **클럽 상세 페이지**

    - 클럽 기본 카드

        - 클럽 이미지 및 기본 정보
        - [현재 가입된 인원/최대 모집 인원] 확인 가능
        - 클럽 신청하기/찜하기/공유하기
        - 클럽 수정/삭제(클럽장만 가능)
 
    - 클럽 정보 탭

        - 클럽 생성 시 작성한 기본 정보 및 상세 정보 표시

    - 클럽 리뷰 탭

        - 모집이 마감된 클럽에 한하여, 해당 클럽의 클럽원들은 참여 후기 작성 가능
        - 참여 후기 확인
        - 평균 별점 확인

g. **클럽 수정 페이지**

    - 기존에 작성한 클럽 정보 확인 가능
    - 인공지능을 활용한 키워드 및 요약문 추출(해시태그와 한줄소개에 적용 가능)
    - 이미지 업로드
    - React Quill 텍스트 에디터를 이용한 상세 모집글 작성
    - 작성 시 보여질 상세 페이지 미리보기 가능

h. **내 클럽 목록 페이지**

    - 내가 클럽장인 클럽 탭

        - 클럽에 가입 신청한 회원 목록 확인 가능
        - 모집이 마감되지 않았을 시 클럽원 수락/수락 해제 가능
        - 모집 마감
        - 모집 마감된 클럽의 클럽원 목록 확인 가능

    - 내가 클럽원인 클럽 탭

        - 가입된 클럽 중 모집마감된 클럽의 클럽장 및 클럽원 목록 확인 가능
    
i. **마이페이지**

    - 프로필 카드

        - 회원가입 시 작성한 프로필 확인
        - 프로필 수정 가능

    - 가입 신청한 클럽 탭

        - 가입 신청한 클럽 목록 확인
        - 가입 신청한 클럽의 승인 상태 확인 가능 (수락 시 내 클럽 리스트에 표시)
        - 가입 신청 취소

    - 찜한 클럽 탭

        - 찜한 클럽 목록 확인
        - 클럽 찜하기/찜해제

#### **4. 프로젝트 구성**

- 와이어프레임: [Figma](https://www.figma.com/file/lBGeWRcJnkiAPIFfQIxaWM/3%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0%3A1)
- API 명세서: [API](https://www.notion.so/3acbc365292748fdafd8978f945cbf1b?v=ff0ae52f70e54e4c80397cab0118f604)
- Table 구상도: [ER Diagram](https://www.notion.so/table-7431f13d13604dcab21f66242ab97b60)
- 스토리보드 및 유저 시나리오

#### **5. 프로젝트 평가 기준**
- 메인 기능의 완성도
- 각 파트의 기술 스택 활용도
- 일정에 잘 맞춰서 진행되었는지
