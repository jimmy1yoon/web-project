import { randomKorean, randomImage } from './util'

const dummyDataMap = {
    'houses': {
        'get': {
            status: 200,
            data: Array.from(Array(10), () => (
                {
                    code: randomKorean(10),
                    title: randomKorean(10, true),
                    town: randomKorean(3),
                    imageURL: randomImage('5'),
                    description: randomKorean(80, true, 5),
                })
            )
        }
    }
}

export default function dummyData(method, uri) {
    method = method.toLowerCase();
    // uri 부분
    // chunk가 int로 변환 가능하면 [dynamic]로 대체 (or [])
    // TODO: dynamic url이 들어오면 어떻게 매핑시킬 것인가?
    return dummyDataMap[uri][method];
}