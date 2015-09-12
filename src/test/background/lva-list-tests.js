QUnit.module("Recently visited LVAs tests")
QUnit.test('Add lva to empty list', function (assert) {
    var newLva = CreateDummyLvaStub();
    var lvaList = new LvaList();
    lvaList.add(newLva);

    assert.equal(lvaList.get().length, 1, "Lva added to empty list");
});

QUnit.test('Add lva to non-empty list', function (assert) {
    var lvas = CreateExistingLvasStub(1);
    var lvaList = new LvaList(lvas);

    lvaList.add(CreateDummyLvaStub());

    assert.equal(lvaList.get().length, 2, "New LVA added");
});

QUnit.test('Add duplicate of lva', function (assert) {
    var lvas = CreateExistingLvasStub(1);
    var lvaList = new LvaList(lvas);
    var newLva = {
        name: "existing0",
        number: "number0",
        semester: "semester0",
        date: new Date().toJSON(),
        url: "somelink"
    };

    lvaList.add(newLva);

    var newList = lvaList.get();
    assert.equal(newList.length, 1, "Lva updated");
    assert.notEqual(newList[0].date, "anotherDate", "Date updated")
});

QUnit.test("Add lva to full list", function (assert) {
    var existingLvas = CreateExistingLvasStub(10);
    var lvaList = new LvaList(existingLvas);
    var newLva = CreateDummyLvaStub();

    lvaList.add(newLva);

    var newList = lvaList.get();
    assert.equal(newList.length, 10, "Length is still 10");
    assert.equal(newList[0].name, "existing1", "Oldest item was removed")
});

function CreateExistingLvasStub(count) {
    var lvas = [];
    for (var i = 0; i < count; i++) {
        lvas.push(
            {
                name: "existing" + i,
                number: "number" + i,
                semester: "semester" + i,
                date: new Date().toJSON(),
                url: "somelink"
            });
    }
    return lvas;

}
function CreateDummyLvaStub() {
    var newLva = {
        name: "name",
        number: "number",
        semester: "semester",
        date: new Date().toJSON(),
        url: "somelink"
    };
    return newLva;
}