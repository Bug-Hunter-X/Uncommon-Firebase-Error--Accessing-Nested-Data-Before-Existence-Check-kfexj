The following code snippet demonstrates an uncommon Firebase error related to data retrieval.  The issue stems from attempting to access nested data within a document before ensuring that the data exists and is of the expected type. This can cause unexpected behavior and crashes in the application.

```javascript
const snapshot = await getDoc(docRef);
const nestedData = snapshot.data().nested.property; // Error prone line
console.log(nestedData);
```

This code assumes that `snapshot.data().nested` exists and that `property` is available within `nested`. If `snapshot.data()` is null or `nested` is undefined, accessing `property` will cause an error.