chrome.runtime.sendMessage(
  {
    type: 'CONTENT',
    payload: {
      message: 'message from content',
    },
  },
  (response) => { console.log(response); },
);
