class Photos {
  async getPhotos() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    return response.json();
  }
}

export default Photos;
