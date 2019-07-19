class NetworkHelper {
  getApi(url) {
    const result = fetch(url)
      .then(res => res.json())
      .then(
        result => {
          return result;
        },
        error => {
          return error;
        }
      );
    return result
  }
}

export default new NetworkHelper();
