헤어 스타일링 지원 스마트 미러 (Smart Mirror Project)
=============
###### 한국산업기술대학교 2019 졸업작품
###### 팀명: Stone Kids 팀원: 노혜민, 주혜원, 문영석
---------------------------------------

구현 목적
-------------
> 헤어스타일은 직접 시술을 하기 전에 자신에게 어울리는지 확인하기 어렵다.
> 생활 편의기능을 제공해주는 기존의 스마트 미러에 헤어스타일링 기능을 접목시켜
> 헤어스타일에 변화를 주려는 사람에게 편의를 제공한다.

주요기능
-------------
> * 어플 
>   - 사용자 정보 입력, 수정
>   - 메모 입력,수정,삭제
>   - 매칭 희망 헤어이미지 등록,수정,삭제
>   - 매칭 결과물 열람 갤러리
>
> * 스마트 미러
>   - 기본 생활 편의기능 (사용자 위치 기반 날씨정보, 메모)
>   - 헤어 이미지 매칭
>   - 헤어 컬러 매칭 (염색기능)

프로젝트 구조 및 설명
-------------
> 1. GC_Server (Google Cloud Compute활용)
>    * 스마트 미러의 frontend 웹 구현
>    * Bootstrap 라이브러리 활용
>    * html, javascript 활용
>    * Flask 프레임워크 활용
>    * 데이터 요청시 REST API (HTTP API 활용 요청)
>    * 헤어스타일링 기능을 위한 알고리즘 코드 파이썬으로 작성
>    * Opencv를 활용 영상처리
>    * Haarcascade 알고리즘을 통한 안면인식 응용
>    
> 2. FB_Server (Firebase활용)
>    * node.js framework활용
>    * RealtimeDatabse 활용
>    * HTTP API, json응답 작성
>
> 3. MirrorApp
>    * Firebase RealtimeDatabse 활용
