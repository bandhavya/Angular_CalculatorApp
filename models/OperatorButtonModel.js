angularModule.factory('OperatorButtonModel', function() {
    var OperatorBtns = {};

    OperatorBtns.data = [{
    id: '200',
    value: '.',
    className: 'OperatorBtnClass',
    type: 'operator',
},{
    id: '201',
    value: '*',
    className: 'OperatorBtnClass',
    type: 'operator',
}, {
    id: '202',
    value: '/',
    className: 'OperatorBtnClass',
    type: 'operator',
}, {
    id: '203',
    value: '+',
    className: 'OperatorBtnClass',
    type: 'operator',
}, {
    id: '204',
    value: '-',
    className: 'OperatorBtnClass',
    type: 'operator',
}, {
    id: '205',
    value: '=',
    className: 'equalBtnClass',
    type: 'equal',
}, {
    id: '206',
    value: 'c',
    className: 'ClearBtnClass',
    type: 'clear',
}]

return OperatorBtns;
});
     