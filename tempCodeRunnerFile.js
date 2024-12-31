for (i = 0; i < arr.length; i++) {
  if (map.has(arr[i].employeeName)) {
    val = map.get(arr[i].employeeName);
      map.set(arr[i].employeeName, val + 1);
  } else {
    map.set(arr[i].employeeName, 1);
  }
}