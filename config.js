/**
 * Original Warm Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 커튼 열림 애니메이션 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "허도재",
    father: "허순강",
    mother: "양연순",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "윤보라",
    father: "윤경용",
    mother: "송경희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-01-16",
    time: "16:40",
    venue: "웨딩시그니처 합정 (아너스홀4F)",
    address: "주소 : 서울 마포구 양화로 87",
    mapLinks: {
      kakao: "https://place.map.kakao.com/803348028",
      naver: "https://naver.me/xqfoQO6l"
    }
  },

  // ── 우리의 이야기 ──
  story: {
    title: "소중한 분들을 초대합니다",
    content: "\n서로 다른 길을 걸어온 두 사람이\n이제 같은 방향을 바라보며\n평생을 함께하고자 합니다.\n\n소중한 날 귀한 걸음 하시어\n저희의 새로운 시작을\n따뜻한 마음으로 축복해 주시면 감사하겠습니다.\n\n"
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "허도재", bank: "하나은행", number: "000-00-000000" }
    ],
    bride: [
      { role: "윤보라", bank: "국민은행", number: "431801-01-1955-95" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "허도재 ♥ 윤보라 결혼합니다",
    description: "2027년 1월 16일, 소중한 분들을 초대합니다.\n\n예식장 규정상 화환 반입이 제한되어 화환은 정중히 사양합니다."
  }
};
