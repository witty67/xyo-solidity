module.exports = {"functionHashes":{"answerList(uint256)":"c9930ee0","answeredQueries(address)":"2afe70fd","hasPendingQuery()":"e491650e","pendingQueries(address)":"7fc4077e","publishAnswer(address,uint256,uint256,uint256,uint256)":"8b09220b","publishQuery(uint256,address,uint256,uint256,uint256,uint256,address,address)":"f8cd5750"},"gasEstimates":{"creation":[386,347800],"external":{"answerList(uint256)":903,"answeredQueries(address)":1634,"hasPendingQuery()":588,"pendingQueries(address)":2382,"publishAnswer(address,uint256,uint256,uint256,uint256)":null,"publishQuery(uint256,address,uint256,uint256,uint256,uint256,address,address)":165529},"internal":{}},"interface":"[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"answeredQueries\",\"outputs\":[{\"name\":\"xyoAddress\",\"type\":\"address\"},{\"name\":\"range\",\"type\":\"uint256\"},{\"name\":\"accuracy\",\"type\":\"uint256\"},{\"name\":\"certainty\",\"type\":\"uint256\"},{\"name\":\"epoch\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"pendingQueries\",\"outputs\":[{\"name\":\"xyoValue\",\"type\":\"uint256\"},{\"name\":\"xyoAddress\",\"type\":\"address\"},{\"name\":\"accuracyThreshold\",\"type\":\"uint256\"},{\"name\":\"certaintyThresold\",\"type\":\"uint256\"},{\"name\":\"minimumDelay\",\"type\":\"uint256\"},{\"name\":\"epoch\",\"type\":\"uint256\"},{\"name\":\"relativeAddress\",\"type\":\"address\"},{\"name\":\"xynotify\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_xyoAddress\",\"type\":\"address\"},{\"name\":\"_range\",\"type\":\"uint256\"},{\"name\":\"_accuracy\",\"type\":\"uint256\"},{\"name\":\"_certainty\",\"type\":\"uint256\"},{\"name\":\"_epoch\",\"type\":\"uint256\"}],\"name\":\"publishAnswer\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"answerList\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"hasPendingQuery\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_xyoValue\",\"type\":\"uint256\"},{\"name\":\"_xyoAddress\",\"type\":\"address\"},{\"name\":\"_accuracy\",\"type\":\"uint256\"},{\"name\":\"_certainty\",\"type\":\"uint256\"},{\"name\":\"_delay\",\"type\":\"uint256\"},{\"name\":\"_epoch\",\"type\":\"uint256\"},{\"name\":\"_relativeAddress\",\"type\":\"address\"},{\"name\":\"_xynotify\",\"type\":\"address\"}],\"name\":\"publishQuery\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"xyoValue\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"xyoAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"accuracy\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"certainty\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"delay\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"epoch\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"relativeAddress\",\"type\":\"address\"}],\"name\":\"QueryReceived\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"xyoAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"range\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"accuracy\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"certainty\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"epoch\",\"type\":\"uint256\"}],\"name\":\"AnswerReceived\",\"type\":\"event\"}]"}