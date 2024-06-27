import './PersonalInfo.css';
import ProfileInfo from './ProfileInfo';
import WorkInfo from './WorkInfo';

const dummyUserProfile = {
  employeeNumber: 101,
  name: '안민지',
  position: 'Software Engineer',
  hireDate: '2015-10-11',
  birthDate: '1987-05-08',
  address: '경상북도 안산시 단원구 반포대거리',
  email: 'anminji@cubeit.com',
  phoneNumber: '010-7583-2446',
  salary: 69000000,
  isAdmin: false,
  departmentNumber: 20,
  education: '성균관대학교 소프트웨어공학 학사',
  career: [
    {
      companyName: '카카오',
      period: '2012-04-06 ~ 2014-07-02',
      role: '백엔드 개발자',
    },
  ],
  role: '백엔드 개발자',
  profileImage:
    'https://api.dicebear.com/9.x/lorelei/svg?seed=Max&eyes=variant09',
  remainingVacationDays: 11,
};

export default class PersonalInfo {
  constructor() {
    this.ProfileInfo = new ProfileInfo({ user: dummyUserProfile });
    this.WorkInfo = new WorkInfo();
  }

  html() {
    return `
      <section class="personal-info-section">
        <div class="wrapper">
          ${this.ProfileInfo.html()}
          ${this.WorkInfo.html()}
        </div>
      </section>
    `;
  }
}
