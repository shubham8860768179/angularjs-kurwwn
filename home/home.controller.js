class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = 'AngularJS';

    this.genders = [];
    this.genders.push('Male');
    this.genders.push('Female');
  }

  onSubmit(){
    console.log("on submit");
  }
}

export default HomeCtrl;
