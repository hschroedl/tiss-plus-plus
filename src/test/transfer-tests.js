/**
 * Created by hans on 18.09.15.
 */
QUnit.module("Transfer tests");

QUnit.test('Should return render map request', function (assert) {
    var request = tpp.transfer.getMap("test");

    assert.equal(request.action, tpp.transfer.actions.RENDER_MAP)
});

QUnit.test('Should return render history request', function(assert){
    var courses = [ 1,2,3 ]
    var request = tpp.transfer.getHistory(courses);

    assert.equal(request.action, tpp.transfer.actions.RENDER_COURSE_HISTORY)
    assert.equal(request.data, courses)
});


QUnit.test('Should return render reminder request', function(assert){
    var request = tpp.transfer.getReminder();

    assert.equal(request.action, tpp.transfer.actions.RENDER_REMINDER)
});

