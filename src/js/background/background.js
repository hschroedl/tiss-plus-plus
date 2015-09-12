/**
 * Created by hasch on 06.09.2015.
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request) {
        if (request.action == "UpdateLvaList") {
            chrome.storage.sync.get("lvalist", function (val) {
                var lvaList = new LvaList(val.lvalist);
                lvaList.add(request.data);
                chrome.storage.sync.set({"lvalist": lvaList.get()});
            });
        }
        else if (request.action == "GetLvaTable") {
            chrome.storage.sync.get("lvalist", function (val) {
                var renderService = new RenderService(chrome.runtime);
                renderService.renderRecentLvas(val.lvalist, sendResponse)
            });
        }
    }
    return true;
});
