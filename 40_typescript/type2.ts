//************* */
//interface 중요
interface Student {
  name: string;
  grade: number;
  isPassed: boolean;
}

let persons: Student = {
  name: 'WOo',
  grade: 4,
  isPassed: true,
};

type Gender = 'Female' | 'male';
const gender: Gender = 'male';
