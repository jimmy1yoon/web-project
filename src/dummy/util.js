const KOREAN_START_CHAR_CODE = '가'.charCodeAt(0);
const KOREAN_END_CHAR_CODE = '힣'.charCodeAt(0);

function randomKoreanChar() {
    return String.fromCharCode(
        (parseInt(Math.random() * (KOREAN_END_CHAR_CODE - KOREAN_START_CHAR_CODE + 1)) + KOREAN_START_CHAR_CODE)
            .toFixed(0)
    );
}

/* 공백 포함 length 글자 한국어 */
export function randomKorean(length, includesSpace=false, maxWordLength=length) {
    let entireString = '';
    // not includes space
    if (!includesSpace) {
        for (let i = 0; i < length; i++) {
            const koreanChar = randomKoreanChar();
            entireString = entireString.concat(koreanChar);
        }
        return entireString;
    }

    // includes space
    while (length > 0) {
        let nextStrLength = parseInt(Math.random() * Math.min(maxWordLength, (length - 1))) + 1
        for (let i = 0; i < nextStrLength; i++) {
            const koreanChar = randomKoreanChar();
            entireString = entireString.concat(koreanChar);
        }
        entireString = entireString.concat(' ');
        length = length - nextStrLength  - 1;
    }

    return entireString;
}

/* 랜덤 이미지 by https://loremflickr.com/ */
/* TODO: fetch를 사용할 때 promise가 아닌 실제 값을 인터페이스에서 리턴해줄 방법이 있을까? */
export function randomImage(category, width=300, height=300) {
    const url = `https://loremflickr.com/${width}/${height}/` + (category ? category : '');
    // const content = await fetch(url)
    // return content.url;
    return url;
}
