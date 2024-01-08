function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        scope: {
            skill: '='
        },
        controller: 'SkillsMemberController',
        controllerAs: 'skillsMemberCtrl'
    };
}