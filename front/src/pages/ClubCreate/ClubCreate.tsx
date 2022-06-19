/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React,{ useRef, useState, useMemo, useEffect } from 'react';
import axios, { AxiosError } from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Header from "@/components/Header/Header";
import ClubPreview from "@/components/ClubCreate/ClubPreview/ClubPreview"
import * as Api from "@/utils/api";
import * as Style from './ClubCreateStyle'

function EditorComponent() {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState("");
  const [duplication, setDuplication] = useState(-1);
  const [preview, setPreview] = useState(false);
  const [clubInfo, setClubInfo] = useState({
    name: '이름을 입력해주세요',
    intro: '한줄소개를 입력해주세요',
    description: '상세정보를 입력해주세요',
    head_count: 100,
    duration: 6,
    state: '모집중',
    manager: 4,
    views: 0,
  });

  useEffect(() => {
    if (document.querySelector(".ql-toolbar:nth-child(2)")) setDuplication(1);
    else setDuplication(0)
  },[])
  
  useEffect(() => {
    setClubInfo({...clubInfo, description: contents})
  },[contents])

  // 이미지를 업로드 하기 위한 함수
  const imageHandler = () => {
  	// 파일을 업로드 하기 위한 input 태그 생성
    const input = document.createElement("input");
    const formData = new FormData();
    let url = "";

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

	// 파일이 input 태그에 담기면 실행 될 함수 
    // eslint-disable-next-line consistent-return
    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        formData.append("image", file[0]);

	// 저의 경우 파일 이미지를 서버에 저장했기 때문에
    	// 백엔드 개발자분과 통신을 통해 이미지를 저장하고 불러왔습니다.
        try {
        // axios를 통해 백엔드 개발자분과 통신했고, 데이터는 폼데이터로 주고받았습니다.
        // const res = await axios.post("/api/upload", formData);
        const res = {data:{url:'image'}}

	// 백엔드 개발자 분이 통신 성공시에 보내주는 이미지 url을 변수에 담는다.
          url = res.data.url;

	// 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드 
    	// 해당 DOM의 데이터가 필요하기에 useRef를 사용한다.
          const range = QuillRef.current?.getEditor().getSelection()?.index;
          if (range !== null && range !== undefined) {
            const quill = QuillRef.current?.getEditor();

            quill?.setSelection(range, 1);

            quill?.clipboard.dangerouslyPasteHTML(
              range,
              `<img src='${url}' alt="이미지 태그가 삽입됩니다." />`
            );
          }

          return { ...res, success: true };
        } catch (error) {
          const err = error as AxiosError;
          return { ...err.response, success: false };
        }
      }
    };
  };

// quill에서 사용할 모듈을 설정하는 코드 입니다.
// 원하는 설정을 사용하면 되는데, 저는 아래와 같이 사용했습니다.
// useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀리게 됩니다.
const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );
  
  const handleSubmit = () => {
    Api.post("/clubs", clubInfo)
      .then((res)=> console.log(res))
      .catch((err) => console.log(err));
  }

return (
	<div>
    {duplication === -1 && <Style.CoverDiv />}
    <Style.WholeBox>
      <Header />
      <Style.Title>
        클럽 상세 정보
      </Style.Title>
      <Style.ClubReactQuill
        ref={(element) => {
            if (element !== null) {
            QuillRef.current = element;
            }
        }}
        // eslint-disable-next-line react/no-this-in-sfc
        onChange={setContents}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
        duplicated={duplication}
      />
      {preview && <ClubPreview newClub={clubInfo}/>}
      <Style.ButtonBox>
        <Style.MyButton1>
          취소
        </Style.MyButton1>
        <Style.MyButton2 onClick={() => {setPreview(!preview)}}>
          미리보기
        </Style.MyButton2>
        <Style.MyButton3 onClick={handleSubmit}>
          등록
        </Style.MyButton3>
      </Style.ButtonBox>
      </Style.WholeBox>
	</div>
)}

export default EditorComponent;