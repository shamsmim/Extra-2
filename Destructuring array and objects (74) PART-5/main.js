// destructuring function perameters

const studentInfo = ({id, fullaName}) => {
    console.log(`${id}, ${fullaName}`);
}

const student = {
    fullaName : 'Ash Shams Mim',
    id : 101
}
studentInfo(student);