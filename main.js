// let str = `
// 010-1234-5678.
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과 백두산이 마르고 닳도록
// d` 

// const regexp = new RegExp('the', 'gi') //정규표현식 1

// const regexp = /the/gi //정규표현식 2
// console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str))
// // console.log(str.replace(regexp, 'AAA'))
// // console.log(str) // 원본은 보존됨

// //원본 바꾸는 방법 
// str = str.replace(regexp, 'AAA')
// console.log(str)
// const regexp = /the/gi
// console.log(str.match(regexp))
// console.log(str.match(/the/gi))

// console.log(
//     str.match(/\.$/gim)
//     )

// console.log(
//     str.match(/dog|fox/g)
// )            
// console.log(
//     str.match(/https?/g)
// )

// console.log(
//     str.match(/\b\w{2,3}\b/g) // 2글자 이상 3글자 이하 단어 찾기
// )

// console.log(
//     str.match(/[가-힣]{1,}/g) //한글자 이상의 모든 단어 
// )
// console.log(
//     str.match(/\bf\w{1,}\b/g) // f로 시작하는 모든 영단어 찾기
// )

// const h = ` the hello world !
// `

// console.log(
//     h.replace(/\s/g,'')
// )

const str =`
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
` 

console.log(
    str.match(/(?<=@).{1,}/g)
)