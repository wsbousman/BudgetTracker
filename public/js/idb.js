let db;

// idb connection
const request = indexedDB.open('budget_tracker', 1);

// idb update event
request.onupgradeneeded = function(event) {
    const db = event.target.result;
    // object store creation
    db.createObjectStore('budget_store', { autoIncrement: true });
  };

request.onsuccess = function(event) {
    // update db variable to include newly created 'budget_store'
    db = event.target.result;
  
    // connectivity check
    if (navigator.onLine) {
      // uploadData();
    }
  };
  
  // error handling
  request.onerror = function(event) {
    console.log(event.target.errorCode);
  };

function saveRecord(record) {
    // open db  transaction, specify read and write permissions
    const transaction = db.transaction(['budget_store'], 'readwrite');
  
    // access the object store for `budget_store`
    const budgetObjectStore = transaction.objectStore('budget_store');
  
    // add method inserts 'record' into 'budget_store'
    budgetObjectStore.add(record);
  }