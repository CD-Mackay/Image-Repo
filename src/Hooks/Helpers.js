export default function Helpers() {


  function getImagesByID(images, users, name) {
    const currentUser = users.filter(user => user.name === name);
    const displayImages = images.filter(image => image.user_id == currentUser.id);
    return displayImages;
  }
  return {
    getImagesByID
  }
}