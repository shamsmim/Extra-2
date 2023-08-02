// Nested Object Destucturibg

const studentInfo = {
    id : 101,
    fullName : 'Shams Mim',
    gpa : 3.81,

    language : {
        native : 'Bangla',
        beginer : 'english'
    }

}
const {id, language} = studentInfo
console.log(language.native);